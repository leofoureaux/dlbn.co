import React from 'react';
import { Box } from 'rebass';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import getSlugFromFilePath from '../utils/getSlugFromFilePath';
import Text from './Text';

const Articles = () => {
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
      <Text as="h2" fontSize={3} variant="secondary" mb={4}>
        {title}
      </Text>
      {articles.map(article => {
        const {
          id,
          fileAbsolutePath,
          frontmatter: { title, date },
        } = article;
        const slug = getSlugFromFilePath(fileAbsolutePath);
        const datetime = new Date(date);
        return (
          <Box key={id} mb={3}>
            <Link to={`/articles/${slug}`} style={{ display: 'inline-block' }}>
              <Text fontSize={3}>{title}</Text>
              <Text as="p" color="#fafafa">
                {format(datetime, 'MMM dd, yyyy')}
              </Text>
            </Link>
          </Box>
        );
      })}
    </div>
  );
};

export default Articles;
