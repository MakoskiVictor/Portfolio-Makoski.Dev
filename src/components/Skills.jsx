import { SKILLS } from '@/utils.js'
import skillsStyle from '@/styles/Skills.module.css'

export function Skills () {
  return (
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
  )
}
