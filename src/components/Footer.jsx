import React from "react";
import styles from "@/styles/footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Rakesh</p>
        <p>Rebbavarapu</p>
        <a href="tel:+917288071875" className={styles.footer__link}>+91 72880 72875</a>
      </div>
      <div className={styles.content}>
        <a href="https://github.com/rakeshrepos" target="_blank" className={styles.footer__link}>GitHub</a>
        <a href="" target="_blank" className={styles.footer__link}>Linkedin</a>
        <a href="mailto:rebbavarapurakesh@gmail.com" className={styles.footer__link}>Mail</a>
      </div>
    </div>
  );
}

export default Footer;
