import { SKILLS } from '@/utils.js'
import skillsStyle from '@/styles/Skills.module.css'

export function Skills () {
  return (
    <section className={skillsStyle.section} id='skills'>
      <div className={skillsStyle.skills}>
        {
          SKILLS.map(skill => {
            return (
              <a target='_blank' rel='noreferrer' href={skill.web} key={skill.name}>
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
