import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  // console.log(data);
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const quuery = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          date
          title
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
