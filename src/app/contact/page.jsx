"use client";

import styles from "./contact.module.css";
import Button from "../components/Button/Button";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactPage = () => {
  const form = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();

    await toast
      .promise(
        emailjs.sendForm(
          "service_v1re3iq",
          "template_8mhrs0f",
          form.current,
          "ClzJ56MO0pD1u_El0"
        ),
        {
          loading: "Sending Message",
          success: "Sent Message successfully",
          error: "Some thing went wrong!",
        }
      )
      .then(() => {
        event.target.reset();
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: "-95vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, type: "tween" }}
      className={styles.contactContainer}
    >
      <h2 className={styles.heading}>Get in touch</h2>
      <p className={styles.description}>
        I would love to hear from you. Whether you like to say hi, write to me
      </p>
      <div className={styles.emailContainer}>
        <img src="/email.svg" alt="email icon" className={styles.icon} />
        <p>bhaskarchoudhuy93@gmail.com</p>
      </div>
      <form ref={form} onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.formControl}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              autoComplete="off"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div className={styles.formControl}>
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Message"
            required
            autoComplete="off"
          ></textarea>
        </div>
        <div>
          <Button link="" type="submit" className="btn--secondary">
            Send
          </Button>
        </div>
        <Toaster />
      </form>
    </motion.section>
  );
};

export default ContactPage;
