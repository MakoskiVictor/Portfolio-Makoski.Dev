import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import webDesigner from '@/assets/images/imgHero.jpg'
import HomeStyles from '@/styles/Home.module.css'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <section className={HomeStyles.home}>
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
            <button className={HomeStyles.button}>Work with me</button>
          </div>
        </div>
        <div className={HomeStyles.image}>
          <img src={webDesigner} alt='web designer img' className={HomeStyles.imageHome} />
        </div>
      </section>
    </main>
  )
}
