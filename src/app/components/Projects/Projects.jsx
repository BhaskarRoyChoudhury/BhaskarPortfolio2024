"use client";

import styles from "./Projects.module.css";
import Link from "next/link";
import { projectsData } from "@/app/constants";
import { motion } from "framer-motion";
import Image from 'next/image'

const Projects = () => {
  return (
    <motion.section className={styles.projectsContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Selected Work</h2>
      </div>

      {projectsData.map((item, idx) => {
        return (
          <motion.article
            key={Math.random()}
            className={styles.container}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, type: 'tween' }}
          >
            <div className={styles.headerContainer}>
              <header className={styles.header}>
                <h3 className={styles.pHeading}>{item.title}</h3>
                <span className={styles.pIndex}>0{idx + 1}</span>
              </header>
              {/* <img
                src={item.image}
                alt={item.title}
                className={styles.pImage}
              /> */}
              <Image src={item.image} alt={item.title} className={styles.pImage} unoptimized width={500} height={500} />
            </div>
            <div className={styles.pDetails}>
              <p>{item.type}</p>
              <div className={styles.linkContainer}>
                <Link href={item.liveDemo} className="link-up" target="_blank">
                  See full Project
                </Link>
                <img src="/arrow.svg" alt="" className={styles.icon} />
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default Projects;
