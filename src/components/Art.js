import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Box, Flex } from 'rebass';
import Image from 'gatsby-image';
import Text from './Text';

const Art = ({ limit, itemWidth, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      meta: markdownRemark(fileAbsolutePath: { regex: "//art/messages.md/" }) {
        id
        frontmatter {
          title
        }
      }
      art: allFile(
        filter: { absolutePath: { regex: "/art/(?!messages)/" } }
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
  const hasMore = limit < data.art.nodes.length;
  return (
    <div>
      <Text
        as="h2"
        fontSize={3}
        variant="secondary"
        mb={4}
        css={{ textTransform: 'uppercase', letterSpacing: 4 }}
      >
        {data.meta.frontmatter.title}
      </Text>
      <Flex flexWrap="wrap" m={-3} mb={hasMore ? 3 : undefined}>
        {data.art.nodes.slice(0, limit).map(img => (
          <Box width={itemWidth} p={3} key={img.id}>
            <Image fluid={img.childImageSharp.fluid} />
          </Box>
        ))}
      </Flex>
      {hasMore && (
        <Link
          to={'art'}
          style={{ letterSpacing: 2, textTransform: 'uppercase' }}
        >
          Show all →
        </Link>
      )}
    </div>
  );
};

Art.defaultProps = {
  itemWidth: 1,
};

export default Art;
