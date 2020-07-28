import React from 'react';
import Layout from '../components/layout';
import About from '../components/About';
import Experience from '../components/Experience';
import Separator from '../components/Separator';
import { Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact';
import Text from '../components/Text';

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "//cv/headline/" }) {
        frontmatter {
          title
        }
      }
    }
  `);
  const headline = data.markdownRemark.frontmatter.title;
  return (
    <Layout>
      <Box as="section" pt={[3, 4, null, null, 5]}>
        <About />
      </Box>
      <Contact />
      <Separator width={[1 / 2, null, 1 / 4]} height={24} my={[3, null, 4]} />
      <Text fontSize={4} fontWeight="bold" mb={4}>
        {headline}
      </Text>
      <Experience />
    </Layout>
  );
};

export default Resume;
