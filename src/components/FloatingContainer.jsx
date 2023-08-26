import React from "react";
import styles from "@/styles/floating.module.css";
import LinkStyles from "@/styles/navigation.module.css";
function FloatingContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <a
            href="https://github.com/rakeshrepos"
            className={LinkStyles.navigation__link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakeshrebbavarapu"
            className={LinkStyles.navigation__link}
          >
            Linkedin
          </a>
          <a
            href="mailto:rebbavarapurakesh@gmail.com"
            className={LinkStyles.navigation__link}
          >
            Mail
          </a>
        </div>
        <div className={styles.inner_wrapper}>
          <section className={styles.enable__animation}>
            <div className={styles.marquee}>
              <ul className={styles.marquee__content}>
                <li>Latest Work - Hyderabad Art Festival </li>
                <li>Latest Work - Hyderabad Art Festival </li>
                <li>Latest Work - Hyderabad Art Festival </li>
              </ul>
              <ul className={styles.marquee__content}>
                <li>Latest Work - Hyderabad Art Festival </li>
                <li>Latest Work - Hyderabad Art Festival </li>
                <li>Latest Work - Hyderabad Art Festival </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FloatingContainer;
