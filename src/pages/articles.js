import React from 'react';
import Articles from '../components/Articles';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Text from '../components/Text';

const ArticlesPage = () => {
  return (
    <Layout>
      <Text fontSize={1} mb={4}>
        <Link to="/" style={{ display: 'inline-block' }}>
          ← back
        </Link>
      </Text>
      <Articles />
    </Layout>
  );
};

export default ArticlesPage;
