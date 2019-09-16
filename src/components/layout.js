/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { space } from "styled-system";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./header";
import Meta from "./Meta";
import ArtHeader from "./ArtHeader";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans&display=swap');
  html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; } h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; } ul { list-style: none; } button, input, select, textarea { margin: 0; } html { box-sizing: border-box; } *, *:before, *:after { box-sizing: inherit; } img, embed, iframe, object, video { height: auto; max-width: 100%; } audio { max-width: 100%; } iframe { border: 0; } table { border-collapse: collapse; border-spacing: 0; } td, th { padding: 0; text-align: left; }          
  body {
    font-family: 'Fira Sans', sans-serif;
    color: white;
  }
  a, a:link {
    text-decoration: none;
    color: #44bce3;
    &:hover {
      color: #3cf0b9;
    }
  }
  p {
    font-family: 'Fira Mono', monospace;
  }
`;

const Body = styled.div`
  min-height: 100vh;
  background: black;
  position: relative;
`;

const Container = styled.div.attrs(() => ({
  px: [3, 4],
  py: [4, 5],
}))`
  ${space}
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Meta />
        <GlobalStyle />
        <Body>
          <ArtHeader />
          <Container>
            <Header mb={[4, 5]} siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
          </Container>
        </Body>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
