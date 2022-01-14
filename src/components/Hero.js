import * as React from "react";

import * as styles from "./Hero.module.scss";

import bgImg from "../images/light_background.svg";

function Hero(props) {
  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <img
          alt="Geometric figures"
          src={bgImg}
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {props.title}
          <span>{props.shadowTitle}</span>
        </h1>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Hero;
