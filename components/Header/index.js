import styles from './styles.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>ANDREA CASINO</div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <a href="http://www.github.com/andrydood" rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
      </li>
      <li className={styles.link}>
        <a href="https://www.linkedin.com/in/andrea-casino/" rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
      </li>
      <li className={styles.link}>
        <a href="/cv.pdf" rel="noopener noreferrer" target="_blank">
          CV
        </a>
      </li>
      <li className={styles.link}>
        <a href="mailto:andrea.casino.2@gmail.com" rel="noopener noreferrer" target="_blank">
          Contact
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
