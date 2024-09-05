'use client'

import styles from "./aboutPage.module.css";
import Connect from "../components/Connect/Connect";
import { education, skill, experience } from "@/app/constants";
import RotateBadge from "../components/RotateBadge/RotateBadge";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutPage = () => {

  const myRef = useRef(null)
  const isInView = useInView(myRef, { once: true });

  return (
    <>
      <section className={styles.aboutContainer}>
        <header className={styles.Container}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className={styles.headerContainer}>
            <h2 className={styles.heading}>
              Hello — I'm Bhaskar Roy Choudhury, Front&nbsp;End Developer from Guwahati, Assam
            </h2>
            <RotateBadge />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: .4 }}
            viewport={{ once: true }}
            className={styles.description}>
            Experienced Front End Developer proficient in HTML, CSS, JavaScript, React Js, Next Js, TypeScript, Framer. Successfully delivered responsive web apps with seamless server-side integration. Excited to contribute expertise for the growth of an innovative organization.
          </motion.p>
        </header>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: .6, delay: 1 }}
          className={styles.techStack}>
          <h2 className={styles.techHeading}>Tech Stack</h2>
          <div ref={myRef} className={styles.skillContainer}>
            {skill.map((item, idx) => {
              return (
                <motion.div
                  key={`${Math.random()}`}
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: `${.7 + idx * 0.2}`, type: 'spring', duration: 1 }}
                  className={styles.iconContainer}
                >
                  <img
                    src={item.link} alt="" className={styles.icon} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className={styles.educationContainer}>
          <h2 className={styles.educationHeading}>Education</h2>
          {education.map((item) => {
            return (
              <div key={`${Math.random()}`} className={styles.education}>
                <div className={styles.timeline}>{item.duration}</div>
                <h3 className={styles.eduTitle}>{item.title}</h3>
                <p className={styles.eduDetail}>{item.place}</p>
                <p className={styles.eduDetail}>{item.location}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.educationContainer}>
          <h2 className={styles.educationHeading}>Experience</h2>

          {experience.map((item) => {
            return (
              <div
                key={`${Math.random()}`}
                className={styles.education}>
                <div className={styles.timeline}>{item.duration}</div>
                <h3 className={styles.eduTitle}>{item.title}</h3>
                <p className={styles.eduDetail}>{item.place}</p>
                <p className={styles.eduDetail}>{item.location}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Connect />
    </>
  );
};

export default AboutPage;

