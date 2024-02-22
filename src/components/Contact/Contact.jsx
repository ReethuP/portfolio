import styles from "./Contact.module.css";
import { getImageURL } from "../../util";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:reethu.p.030@gmail.com">myemail@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/reethu-peddakotla-b77373196/">
            linkedin.com/myname
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ReethuP">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
