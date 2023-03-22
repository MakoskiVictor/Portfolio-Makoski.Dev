import locationStyles from '@/styles/Location.module.css'
import Mail from '@/assets/Logos/Mail.svg'
import Maps from '@/assets/Logos/Maps.svg'

export function Location () {
  return (
    <section className={locationStyles.section}>
      <div className={locationStyles.container}>
        <div>
          <img src={Mail} alt='mail logo' className={locationStyles.image} />
        </div>
        <div>
          <h2>Have a question?</h2>
          <p>I am here to help you.</p>
          <p>Email me at makoski.ed@gmail.com</p>
        </div>
      </div>
      <div className={locationStyles.container}>
        <div>
          <img src={Maps} alt='maps logo' className={locationStyles.image} />
        </div>
        <div>
          <h2>Current Location</h2>
          <p>Misiones, Argentina</p>
          <p>Serving clients worldwide</p>
        </div>
      </div>
    </section>
  )
}
