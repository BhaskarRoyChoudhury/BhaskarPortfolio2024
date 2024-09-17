"use client";

import styles from "./Hero.module.css";
import Button from "../Button/Button";
import RotateBadge from "../RotateBadge/RotateBadge";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 2.5, }}
      viewport={{ once: true, amount: 0.25 }}
      className={styles.heroContainer}
    >
      <header className={styles.introContainer}>
        <div className={styles.container}>
          <div className={styles.nameContainer}>
            <div className={styles.greet}>
              <img src="/hand.png" alt="" className={styles.handIcon} />
              <h2 className={styles.name}>Hello,</h2>
            </div>
            <h2 className={styles.name}>I'm Bhaskar</h2>
          </div>
          <h1 className={styles.designation}>Software</h1>
        </div>
        <div className={styles.badgeContainer}>
          <h1 className={styles.designation}>Developer</h1>
          <div className={styles.badge}>
            <RotateBadge />
          </div>
        </div>
      </header>
      <div className={styles.heroContent}>
        <motion.p
          className={styles.about}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          I am Bhaskar, Logical and results driven front-end developer with over 2 years of experinence dedicated
          to building and user-focused websites and applications. Technically proficient and analytical problem solver.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 2.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.btnContainer}
        >
          <Button link="/about" className="btn--primary">
            About Me
          </Button>
          <Button href="/BhaskarResume.pdf" download className="btn--primary">
            Download CV
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
