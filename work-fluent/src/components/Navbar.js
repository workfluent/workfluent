import React from "react";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Logo Placeholder */}
      <div className={styles.logoPlaceholder}>Logo</div>

      {/* Navigation Links */}
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          <a href="#services" className={`${styles.navLink} ${styles.navButton}`}>Services</a>
          <a href="#process" className={`${styles.navLink} ${styles.navButton}`}>Process</a>
          <a href="#contact" className={`${styles.navLink} ${styles.navButton}`}>Contact</a>
          <a href="#about" className={`${styles.navLink} ${styles.navButton}`}>About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
