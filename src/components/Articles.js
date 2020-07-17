import React from 'react';
import { Box, Flex } from 'rebass';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import getSlugFromFilePath from '../utils/getSlugFromFilePath';
import Text from './Text';
import Card from './Card';

const Articles = ({ limit }) => {
  const {
    meta: {
      frontmatter: { title },
    },
    articles: { nodes: articles },
  } = useStaticQuery(graphql`
    {
      meta: markdownRemark(fileAbsolutePath: { regex: "//blog/messages.md/" }) {
        id
        frontmatter {
          title
        }
      }
      articles: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/(?!messages)/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          fileAbsolutePath
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  return (
    <div>
      <Text
        as="h2"
        fontSize={3}
        variant="secondary"
        mb={4}
        css={{ textTransform: 'uppercase', letterSpacing: 4 }}
      >
        {title}
      </Text>
      {articles.slice(0, limit).map(article => {
        const {
          id,
          fileAbsolutePath,
          excerpt,
          frontmatter: { title, date },
        } = article;
        const slug = getSlugFromFilePath(fileAbsolutePath);
        const datetime = new Date(date);
        return (
          <Box key={id} mb={[3, 4]}>
            <Link to={`/articles/${slug}`} style={{ display: 'block' }}>
              <Card width={1} p={[3, 4]}>
                <Text fontWeight="700" fontSize={3}>
                  {title}
                </Text>
                <Text
                  py={3}
                  fontFamily="Fira Mono"
                  lineHeight="1.5"
                  color="#fafafa"
                >
                  {excerpt}
                </Text>
                <Text as="p" color="#fafafa">
                  {format(datetime, 'MMM dd, yyyy')}
                </Text>
              </Card>
            </Link>
          </Box>
        );
      })}
      {limit < articles.length && (
        <Link
          to={'articles'}
          style={{ letterSpacing: 2, textTransform: 'uppercase' }}
        >
          Show all →
        </Link>
      )}
    </div>
  );
};

export default Articles;
