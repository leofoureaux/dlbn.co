import React from "react";
import styled from "styled-components";
import { fontSize, space } from "styled-system";

const P = styled.p.attrs(() => ({
  mb: 3,
}))`
  ${fontSize}
  ${space}
`;

P.defaultProps = {
  fontSize: 2,
};

const About = () => {
  return (
    <>
      <P fontSize={3}>
        Hi{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </P>
      <P>I'm a software developer, raver, cyclist and yogi.</P>
      <P>
        I've been traveling as a nomad while working remotely
        <br /> and enjoying what the world has to offer.
      </P>
      <P>
        Currently in Romania{" "}
        <span role="img" aria-label="europe flag">
          🇷🇴
        </span>
      </P>
    </>
  );
};

export default About;
