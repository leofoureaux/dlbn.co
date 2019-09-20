import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import getSlugFromFilePath from "../utils/getSlugFromFilePath";

const Articles = () => {
  const {
    allMarkdownRemark: { nodes: articles },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
      <h1>Articles</h1>
      {articles.map((article) => {
        const {
          id,
          fileAbsolutePath,
          frontmatter: { title, date },
        } = article;
        const slug = getSlugFromFilePath(fileAbsolutePath);
        return (
          <div key={id}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
