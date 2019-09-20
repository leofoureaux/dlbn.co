import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1.2rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  p {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
  ul,
  ol {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
  }
  /* custom list bullets */
  ul {
    li::before {
      content: "•";
      display: inline-block;
      width: 1em;
    }
  }
`;

const article = ({ pageContext: { article } }) => {
  return (
    <Layout discreet>
      <Container>
        <h1>
          <strong>{article.frontmatter.title}</strong>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </Container>
    </Layout>
  );
};

article.propTypes = {};

export default article;
