import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled, { css } from "styled-components";
import { width } from "styled-system";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = styled(Img)`
  width: 100%;
`;

const Wrapper = styled.div`
  ${width}
  position: absolute;
  z-index: 0;
  transition: 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: translate(-50%, -50%);
  ${({ scroll }) => {
    let transformFactor = 50;
    transformFactor = Math.max(10, 50 / (1 + scroll / 200));
    return css`
      transform: translate(-${transformFactor}%, -${transformFactor}%) rotate(${scroll / 180}rad);
      opacity: ${Math.min(1, 100 / scroll)};
      rotate: ${scroll / 2}deg;
      filter: hue-rotate(${scroll / 2}deg);
    `;
  }}
`;

Wrapper.defaultProps = {
  width: ["144vw", "100vw", "70vw", "50vw"],
};

const ArtHeader = () => {
  const [scroll, setScroll] = useState();
  const scrollListener = () => {
    if (typeof window !== "undefined") {
      setScroll(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener);
      }
    };
  }, []);
  return (
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "14-colored.png" }) {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <Wrapper scroll={scroll}>
          <Image fluid={data.image.childImageSharp.fluid} />
        </Wrapper>
      )}
    />
  );
};

export default ArtHeader;
