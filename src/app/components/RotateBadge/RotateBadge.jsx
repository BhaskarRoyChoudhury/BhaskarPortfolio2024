import styles from "./RotateBadge.module.css";

const RotateBadge = () => {
  const text = "scroll down to see more".split("");

  const content = text.map((item, idx) => {
    return (
      <span style={{ transform: `rotate(${idx * 15.1}deg)` }} key={idx * 2}>
        {item}
      </span>
    );
  });

  return (
    <article className={styles.circle}>
      <img src="/arrow-down-white.svg" alt="arrow down" className={styles.arrowDown} />
      <div className={styles.text}>{content}</div>
    </article>
  );
};

export default RotateBadge;
