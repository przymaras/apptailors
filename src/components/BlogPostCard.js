import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./BlogPostCard.module.scss";

function BlogPostCard(props) {
  return (
    <div className={styles.container}>
      <Link to={props.link}>
        <div className={styles.imageWrapper}>
          <GatsbyImage image={props.img} alt={props.alt} layout="fullWidth" />
        </div>
        <div className={styles.post}>
          <h2 className={styles.title}>{props.title}</h2>
          <div className={styles.dateAuthor}>
            <p>{props.date}</p>
            <p>{props.author}</p>
          </div>
          <p>{props.excerpt}</p>
          <p className={styles.readMore}>Read more...</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostCard;
