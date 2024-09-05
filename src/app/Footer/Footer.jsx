import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <img src="/arrow-up.svg" alt="go to top" className={styles.up} />
        <p className={styles.tagline}>Back to Top</p>
      </a>
      <div className={styles.year}>Bhaskar Roy Choduhury Portfolio 2024</div>
    </footer>
  );
};

export default Footer;
