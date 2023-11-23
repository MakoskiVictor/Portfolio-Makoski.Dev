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
                  👩🏻‍💻Full Stack Developer with the ability to build and optimize
                  end-user-oriented web sites and applications in a scalable and
                  modularized manner.
                </p>
              </li>
              <li>
                <p className={aboutStyles.description}>
                  📖✏️I love to investigate, solve problems, learn from others
                  and teach, that is why in me you will find a developer with
                  conflict resolution skills, willing to listen to ideas and
                  contribute all my knowledge to achieve the proposed
                  objectives.
                </p>
              </li>
              <li>
                <p className={aboutStyles.description}>
                  I have experience in JavaScript language, HTML, CSS and also
                  in technologies like React, React Native, Node with Express
                  and NestJs, PostgreSQL, MongoDB, Git.
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
