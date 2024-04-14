import { getImageURL } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Reethu</h1>
        <p className={styles.description}>
          I&apos;m a front-end developer with 2 years of professional experience
          specializing in React, HTML, CSS, and JavaScript. Reach out to me if
          you&apos;d like to know more!
        </p>
        <a href="mailto:reethu.p.030@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
