import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import { Home } from '@/components/Home.jsx'
import { About } from '@/components/About.jsx'
import { SKILLS } from '@/utils.js'
import skillsStyle from '@/styles/Skills.module.css'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <Home />
      <About />
      <section className={skillsStyle.section}>
        <div className={skillsStyle.skills}>
          {
          SKILLS.map(skill => {
            return (
              <a href={skill.web} key={skill.name}>
                <div className={skillsStyle.imageContainer}>
                  <img src={skill.image} alt={`${skill.name} icon`} className={skillsStyle.image} />
                </div>
              </a>
            )
          })
        }
        </div>
      </section>
    </main>
  )
}
