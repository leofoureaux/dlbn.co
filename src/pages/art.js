import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Box } from 'rebass';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Text from '../components/Text';

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const ArtPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { absolutePath: { regex: "/art/" } }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 720, quality: 100, toFormat: JPG) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <Layout discreet>
      <Container>
        <Text fontSize={1} mb={4}>
          <Link to="/" style={{ display: 'inline-block' }}>
            ← back
          </Link>
        </Text>
        <Box m={-3}>
          {data.allFile.nodes.map(img => (
            <Box p={3} key={img.id}>
              <Image fluid={img.childImageSharp.fluid} />
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default ArtPage;
