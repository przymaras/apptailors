import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import BlogPostCard from "../../components/BlogPostCard";
import Seo from "../../components/Seo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="AppTailors | Blog" />
      <Hero title="Blog" shadowTitle="apptailors">
        <h2>
          Our mobile & web app development agency will help you to bring your
          business ideas to life using latest technology and beautiful design.
        </h2>
        <p>Read more.... </p>
      </Hero>
      <div className={styles.content}>
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
    </Layout>
  );
};

export const quuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default BlogPage;
