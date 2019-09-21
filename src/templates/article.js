import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import { format } from 'date-fns';
import Text from '../components/Text';
import { Link } from 'gatsby';

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
      content: '•';
      display: inline-block;
      width: 1em;
    }
  }
`;

const article = ({ pageContext: { article } }) => {
  const { title, excerpt, date } = article.frontmatter;
  const datetime = new Date(date);
  return (
    <Layout discreet>
      <Meta title={title} description={excerpt}></Meta>
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
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </Container>
    </Layout>
  );
};

export default article;
