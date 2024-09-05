"use client";

import Link from "next/link";
import styles from "./Button.module.css";

const Button = (props) => {
  const btnType = props.className;

  const btnStyles = btnType ? `${styles.btn} ${styles[btnType]}` : styles.btn;

  const type = props.type || "button";

  if (props.link) {
    return (
      <Link href={props.link} onClick={props.onClick} className={btnStyles}>
        {props.children}
      </Link>
    );
  }

  if (props.href) {
    return (
      <a href={props.href} download className={btnStyles}>
        {props.children}
      </a>
    );
  }

  return (
    <button type={type} className={btnStyles} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
