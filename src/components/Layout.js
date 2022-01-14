import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
// import { Link, useStaticQuery, graphql } from "gatsby";

import * as styles from "./Layout.module.scss";
import { LogoA } from "../images/LogoA";
import { StaticImage } from "gatsby-plugin-image";

let prevScrollY = "0";

const Layout = ({ children }) => {
  const [navToggle, setNavToggle] = useState(true);
  const [cssScrollY, setCssScrollY] = useState("test");

  function toggleMenu() {
    setNavToggle((prev) => !prev);
  }

  function closeNav() {
    setTimeout(() => {
      setNavToggle(true);
    }, 300);
  }

  useEffect(() => {
    function handleScrollY() {
      if (
        Math.abs(window.pageYOffset - prevScrollY) > 25 ||
        window.pageYOffset < 25
      ) {
        if (window.pageYOffset < 25) {
          setCssScrollY("");
        } else if (window.pageYOffset > prevScrollY) {
          prevScrollY = window.pageYOffset;
          setCssScrollY(styles.scrollingDown);
        } else if (window.pageYOffset < prevScrollY) {
          prevScrollY = window.pageYOffset;
          setCssScrollY(styles.scrollingUp);
        }
        closeNav();
      }
    }

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  //   console.log(data);
  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} ${cssScrollY}`}>
        <div className={styles.navLogoBtnWrapper}>
          <div className={styles.navLogo}>
            <Link onClick={closeNav} to="/">
              <LogoA />
            </Link>
          </div>
          <button onClick={toggleMenu} className={styles.navToggleBtn}>
            <StaticImage
              src="../images/menu_icon.svg"
              backgroundColor="transparent"
              loading="eager"
              alt="Menu button"
            />
          </button>
        </div>

        <div className={`${styles.navLinks} ${navToggle ? styles.hidden : ""}`}>
          <Link
            onClick={closeNav}
            to="/services"
            className={styles.navLinkText}
          >
            Services
          </Link>

          <Link onClick={closeNav} to="/" className={styles.navLinkText}>
            Featured projects
          </Link>

          <Link onClick={closeNav} to="/blog" className={styles.navLinkText}>
            Blog
          </Link>

          <Link
            onClick={closeNav}
            to="/"
            className={`${styles.navLinkText} ${styles.navLinkBtn}`}
          >
            Estimate project <span className={styles.arrow}>></span>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
