import portfolio from '@/assets/text/portfolio.svg'
import portfolioStyles from '@/styles/Portfolio.module.css'
import { Card } from '@/components/Card.jsx'

export function Portfolio () {
  return (
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
        <Card />
      </div>
    </section>
  )
}
