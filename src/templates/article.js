import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import { format } from 'date-fns';
import Text from '../components/Text';
import { Link } from 'gatsby';
import githubcss from 'github-markdown-css';
import draculaPrismCss from './dracula-prism.css';

const Container = styled.div`
  ${githubcss}
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.5;
  ul {
    list-style: disc;
  }
  .markdown-body {
    blockquote {
      color: inherit;
    }
    a,
    a:link {
      text-decoration: none;
      color: #44bce3;
      &:hover {
        color: #3cf0b9;
      }
    }
    color: inherit;
    line-height: 1.5;
    font-family: inherit;
    pre {
      background: #212121;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 0 !important;
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
  iframe {
    width: 100%;
    margin-bottom: 1rem;
  }
  ${draculaPrismCss}
`;

const article = ({ pageContext: { article } }) => {
  const { title, date } = article.frontmatter;
  const datetime = new Date(date);
  return (
    <Layout discreet>
      <Meta title={title} description={article.excerpt}></Meta>
      <Container>
        <Text fontSize={1} mb={4}>
          <Link to="/" style={{ display: 'inline-block' }}>
            ← back
          </Link>
        </Text>
        <h1>
          <strong>{article.frontmatter.title}</strong>
        </h1>
        <Text as="p" fontSize={0} variant="secondary" mb={3}>
          {format(datetime, 'MMMM dd, yyyy')}
        </Text>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </Container>
    </Layout>
  );
};

export default article;
