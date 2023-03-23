import webDesigner from '@/assets/images/imgHero.webp'
import HomeStyles from '@/styles/Home.module.css'

export function Home () {
  return (
    <section className={HomeStyles.section}>
      <div className={HomeStyles.home}>
        <div className={HomeStyles.texts}>
          <div className={HomeStyles.saluteContainer}>
            <p className={HomeStyles.salute}>Hi, I'm Víctor 🙋‍♂️ </p>
          </div>
          <div>
            <p className={HomeStyles.fullStack}>Full Stack Developer</p>
          </div>
          <div>
            <p className={HomeStyles.paragraph}>I love being able to learn something everyday by engaging in experiments and working on projects.
              It's not only a job, is a passion.
            </p>
          </div>
          <div className={HomeStyles.buttonContainer}>
            <button className={HomeStyles.button}><a href='#contact'>Work with me</a></button>
          </div>
        </div>
        <div className={HomeStyles.image}>
          <img src={webDesigner} alt='web designer img' fetchpriority='high' className={HomeStyles.imageHome} />
        </div>
      </div>
    </section>
  )
}
