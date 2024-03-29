import styles from "./About.module.css";
import { getImageURL } from "../../util";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front end Developer</h3>
              <p>
                I&apos;m a front-end developer with experience in building
                responsive and optimised sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed UI components to enhance the overall user
                experience for customers.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
