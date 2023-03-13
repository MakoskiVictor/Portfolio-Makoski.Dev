import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import { Home } from '@/components/Home.jsx'
import me from '@/assets/images/me.jpg'
import aboutStyles from '@/styles/About.module.css'
import about from '@/assets/text/about.svg'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <Home />
      <section className={aboutStyles.section}>
        <div className={aboutStyles.about}>
          <div>
            <img src={me} alt='Victor image' className={aboutStyles.image} />
          </div>
          <div>
            <div>
              <div className={aboutStyles.imageText}>
                <img src={about} alt="about img" />
              </div>
              <div>
                <p className={aboutStyles.name}>Makoski Víctor</p>
                <p className={aboutStyles.developer}>Full Stack Developer</p>

              </div>
            </div>
            <div className={aboutStyles.linea}></div>
            <div className={aboutStyles.bottom}>
            <ul className={aboutStyles.ul}>
              <li>
                <p className={aboutStyles.description}>👩🏻‍💻Full Stack Developer with the ability to build and optimize end-user-oriented web sites and applications in a scalable and modularized manner</p>
              </li>
              <li>
                <p className={aboutStyles.description}>📖✏️I love to investigate, solve problems, learn from others and teach, that is why in me you will find a developer with conflict resolution skills, willing to listen to ideas and contribute all my knowledge to achieve the proposed objectives.</p>
              </li>
              <li>
                <p className={aboutStyles.description}>I have experience in JavaScript language, HTML, CSS and also in technologies like React, Node, Express, Sequelize, PostgreSQL, Git.</p>
              </li>
            </ul>
            </div>
          <div className={aboutStyles.buttonContainer}>
            <button className={aboutStyles.button}>Contact</button>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}
