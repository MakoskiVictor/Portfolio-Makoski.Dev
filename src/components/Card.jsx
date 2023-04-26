import portfolioStyles from '@/styles/Portfolio.module.css'
import { PROJECTS } from '@/utils.js'

export function Card () {
  return (
    <div className={portfolioStyles.bottom}>
      {
              PROJECTS.map(project => {
                return (
                  <a target='_blank' href={project.url} key={project.name} className={portfolioStyles.cardContainer}>
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
  )
}
