import React from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import { format } from 'date-fns';
import Text from '../components/Text';
import { Link } from 'gatsby';
import githubcss from 'github-markdown-css';
import draculaPrismCss from './dracula-prism.css';

const Container = styled.div`
  ${githubcss}
  ${({ theme }) => css`
    margin: 0 auto;
    line-height: 1.5;
    @media (min-width: ${theme.breakpoints[2]}) {
      &,
      .markdown-body {
        font-size: 20px !important;
        line-height: 1.6;
      }
      p {
        margin-bottom: 40px !important;
      }
    }
    p {
      font-size: 1em !important;
    }
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
      font-weight: 700 !important;
    }
    h1 {
      font-size: 2.25em;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.75em;
    }
    h4 {
      font-size: 1.5em;
    }
    h5 {
      font-size: 1.25em;
    }
    h6 {
      font-size: 1em;
    }
    iframe {
      width: 100%;
      margin-bottom: 1em;
    }
    ${draculaPrismCss}
  `}
`;

const article = ({ pageContext: { article } }) => {
  const { title, date, image } = article.frontmatter;
  let ogUrl;
  if (image) {
    ogUrl = image.childImageSharp.fixed.src;
  }
  const datetime = new Date(date);
  return (
    <Layout maxWidth={1024}>
      <Meta title={title} description={article.excerpt} image={ogUrl} />
      <Container>
        <Text fontSize={1} mb={4}>
          <Link to="/" style={{ display: 'inline-block' }}>
            ← back
          </Link>
        </Text>
        <h1>
          <strong>{article.frontmatter.title}</strong>
        </h1>
        <Text
          fontSize={[0, null, 2]}
          fontFamily="Fira Mono"
          variant="secondary"
          mb={[3, null, 5]}
        >
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
