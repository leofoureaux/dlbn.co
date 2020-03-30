import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Text from '../components/Text';
import Art from '../components/Art';

const ArtPage = () => {
  return (
    <Layout>
      <Text fontSize={1} mb={4}>
        <Link to="/" style={{ display: 'inline-block' }}>
          ← back
        </Link>
      </Text>
      <Art />
    </Layout>
  );
};

export default ArtPage;
