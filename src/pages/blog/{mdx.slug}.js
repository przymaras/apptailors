import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./mdx_slug.module.scss";

import Layout from "../../components/Layout";
import BlogPostCard from "../../components/BlogPostCard";

const BlogPost = ({ data, ...props }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_alt} />
        <div>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        <div>
          <h3>Recent posts:</h3>
          {data.allMdx.nodes.map((node) => (
            <BlogPostCard
              key={node.id}
              link={`/blog/${node.slug}`}
              img={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_alt}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              author={node.frontmatter.author}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      nodes {
        frontmatter {
          date
          title
          author
          hero_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
        slug
        id
      }
    }
  }
`;
