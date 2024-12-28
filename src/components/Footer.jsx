import React from "react";
import styles from "@/styles/footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.content}>
          <p>Rakesh</p>
          <p>Rebbavarapu</p>
          <a href="tel:+917288071875" className={styles.footer__link}>
            +91 72880 72875
          </a>
        </div>
        <div className={styles.content}>
          <a
            href="https://github.com/rakeshrepos"
            target="_blank"
            className={`${styles.footer__link} ${styles.footer__link__right}`}
          >
            GitHub
          </a>
          <a
            href=""
            target="_blank"
            className={`${styles.footer__link} ${styles.footer__link__right}`}
          >
            Linkedin
          </a>
          <a
            href="mailto:rebbavarapurakesh@gmail.com"
            className={`${styles.footer__link} ${styles.footer__link__right}`}
          >
            Mail
          </a>
        </div>
      </div>
      <div className={styles.coming__soon}>
        <p className={styles.coming__soon__container}>Full site soon</p>
      </div>
    </div>
  );
}

export default Footer;
