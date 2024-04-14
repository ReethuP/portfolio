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
                I&apos;m proficient in front-end technologies like HTML, CSS,
                JavaScript, TypeScript and React.js. Strong experience in
                building interactive and dynamic user interfaces
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
