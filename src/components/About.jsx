import me from "@/assets/images/me.webp";
import aboutStyles from "@/styles/About.module.css";
import about from "@/assets/text/about.svg";

export function About() {
  return (
    <section className={aboutStyles.section} id="about">
      <div className={aboutStyles.about}>
        <div>
          <img
            src={me}
            alt="Victor image"
            fetchpriority="high"
            width="350px"
            height="350px"
            className={aboutStyles.image}
          />
        </div>
        <div>
          <div>
            <div className={aboutStyles.imageText}>
              <img src={about} alt="about img" fetchpriority="high" />
            </div>
            <div>
              <p className={aboutStyles.name}>Makoski Víctor</p>
              <p className={aboutStyles.developer}>Full Stack Developer</p>
            </div>
          </div>
          <div className={aboutStyles.linea} />
          <div className={aboutStyles.bottom}>
            <ul className={aboutStyles.ul}>
              <li>
                <p className={aboutStyles.description}>
                👩🏻‍💻 Full Stack Developer with a passion for building and optimizing end-user-oriented
                 web applications in a scalable and modularized manner.
                </p>
              </li>
              <li>
                <p className={aboutStyles.description}>
                📖✏️ I am an avid investigator and problem-solver, always eager to learn from others and
                 share my knowledge. With strong conflict resolution skills, I thrive in collaborative 
                 environments where I can contribute my expertise to achieve our goals.
                </p>
              </li>
              <li>
                <p className={aboutStyles.description}>
                Experience: Proficient in TypeScript, HTML, and CSS, with hands-on experience in 
                React, AstroJs, Node.js (Express and NestJS), PostgreSQL, MongoDB, and Git.
                </p>
              </li>
            </ul>
          </div>
          <div className={aboutStyles.buttonContainer}>
            <a href="#contact">
              <button className={aboutStyles.button}>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
