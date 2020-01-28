import Header from '~components/Header';

import styles from './styles.scss';

const About = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      <Header />
      <div className={styles.shape} />
      <div className={styles.name}>
      Hi
        <br />
      I&apos;m Andrea
      </div>
      <div className={styles.intro}>
      I&apos;m a 25y/o developer based in London, UK.
        <br />
      I like to solve problems and make stuff. I also like
        <span role="img" aria-label="emoji"> 🐹, 🍣 and ☕.</span>
      </div>
    </div>
  </div>
);

export default About;
