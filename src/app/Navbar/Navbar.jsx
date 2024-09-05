"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/app/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  const navbarStyles = showNav
    ? `${styles.navbar} ${styles.active}`
    : styles.navbar;

  const emailAddress = "bhaskarchoudhury93@gmail.com";

  return (
    <motion.nav
      className={navbarStyles}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 1.2, }}
    >
      <Link href="/" className={styles.logoContainer}>
        <p>Bhaskar</p>
        <p>- Roy Choudhury</p>
      </Link>
      <div className={styles.hamburger} onClick={handleNavbar}>
        <span className={styles.hItem}></span>
        <span className={styles.hItem}></span>
        <span className={styles.hItem}></span>
      </div>

      <ul className={styles.navList}>
        {navbarLinks.map((item) => {
          return (
            <li key={item.title}>
              <Link className="link" href={item.link}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="mailto:bhaskarchoudhury93@gmail.com"
            className={styles.emailContainer}
          >
            <img src="/email.svg" alt="" className={styles.emailIcon} />
            <p className="link">{emailAddress}</p>
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
