import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import { Home } from '@/components/Home.jsx'
import { About } from '@/components/About.jsx'
import { Skills } from '@/components/Skills.jsx'
import portfolio from '@/assets/text/portfolio.svg'
import portfolioStyles from '@/styles/Portfolio.module.css'
import { PROJECTS } from '@/utils.js'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <section id='portfolio' className={portfolioStyles.section}>
        <div className={portfolioStyles.portfolio}>
          <div>
            <div className={portfolioStyles.titleContainer}>
              <img src={portfolio} alt='portfolio img' className={portfolioStyles.imageText} />
              <p className={portfolioStyles.title}>My latest works</p>
            </div>
            <div className={portfolioStyles.descriptionContainer}>
              <p className={portfolioStyles.description}>I like to learn new things and I'm always looking for new projects to work on. So here I show you some of my latest projects.</p>
            </div>
          </div>
          <div className={portfolioStyles.bottom}>
            {
              PROJECTS.map(project => {
                return (
                  <a href={project.url} key={project.name} className={portfolioStyles.cardContainer}>
                    <div className={portfolioStyles.imageContainer}>
                      <img src={project.image} alt={project.name} className={portfolioStyles.projectImage} />
                    </div>
                    <div>
                      <p className={portfolioStyles.projectName}>{project.name}</p>
                      <p className={portfolioStyles.projectDescription}>{project.description}</p>
                    </div>
                    <div className={portfolioStyles.linea} />
                  </a>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  )
}
