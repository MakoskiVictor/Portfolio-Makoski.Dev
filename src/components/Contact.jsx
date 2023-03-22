import contact from '@/assets/text/contact.svg'
import contactStyles from '@/styles/Contact.module.css'
import { Messager } from '@/components/Messager.jsx'
import { Location } from '@/components/Location.jsx'

export function Contact () {
  return (
    <section className={contactStyles.section} id='contact'>
      <div className={contactStyles.portfolio}>
        <div>
          <div className={contactStyles.titleContainer}>
            <img src={contact} alt='portfolio img' className={contactStyles.imageText} />
            <p className={contactStyles.title}>Contact me</p>
          </div>
          <div className={contactStyles.descriptionContainer}>
            <p className={contactStyles.description}>Do you want to know more about me?
              Don't hesitate and contact me!
            </p>
          </div>
        </div>
        <div className={contactStyles.bottom}>
          <Location />
          <Messager />
        </div>
      </div>
    </section>
  )
}
