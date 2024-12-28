"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/floating.module.css";
import LinkStyles from "@/styles/navigation.module.css";
function FloatingContainer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = 1000;

      if (scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <a
            href="https://github.com/rakeshrepos"
            className={LinkStyles.navigation__link}
            style={{ color: "white" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakeshrebbavarapu"
            className={LinkStyles.navigation__link}
            style={{ color: "white" }}
          >
            Linkedin
          </a>
          <a
            href="mailto:rebbavarapurakesh@gmail.com"
            className={LinkStyles.navigation__link}
            style={{ color: "white" }}
          >
            Mail
          </a>
        </div>
        <div className={styles.inner_wrapper}>
          <section className={styles.enable__animation}>
            <div className={styles.marquee}>
              <ul className={styles.marquee__content}>
                <li className={styles.list_style}>HTM - CSS - JS </li>
                <li className={styles.list_style}>React - Vue</li>
                <li className={styles.list_style}>Expressjs - Laravel </li>
                <li className={styles.list_style}>Python - PHP - Java</li>
              </ul>
              <ul className={styles.marquee__content}>
                <li className={styles.list_style}>HTM - CSS - JS </li>
                <li className={styles.list_style}>React - Vue</li>
                <li className={styles.list_style}>Nodejs - Laravel</li>
                <li className={styles.list_style}>Python - PHP - Java</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FloatingContainer;
