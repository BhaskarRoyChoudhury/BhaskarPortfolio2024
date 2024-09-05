"use client";

import styles from "./Connect.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'tween', duration: 1, delay: .2 }}
      viewport={{ once: false, amount: 0.25 }}
      className={styles.container}
    >
      <div className={styles.CTA}>
        <h2 className={styles.heading}>Let's Create Something Great</h2>
        <Button link="/contact" className="btn--primary">
          Connect with Me
        </Button>
      </div>
    </motion.section>
  );
};

export default Connect;
