import React from "react";
import styles from "../styles/navigation.module.css";
import Link from "next/link";
function Header() {
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.navigation__link}>
        <p>RR</p>
      </Link>
      <Link href="/about" className={styles.navigation__link}>
        <p>about</p>
      </Link>
      {/* <Link href="/" className={styles.navigation__link}>
            <p>work</p>
        </Link>
        <Link href="/" className={styles.navigation__link}>
            <p>blog</p>
        </Link>
        <Link href="/" className={styles.navigation__link}>
            <p>contact</p>
        </Link> */}
    </nav>
  );
}

export default Header;
