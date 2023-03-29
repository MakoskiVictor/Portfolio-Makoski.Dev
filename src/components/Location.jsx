import locationStyles from '@/styles/Location.module.css'
import Mail from '@/assets/Logos/Mail.svg'
import Maps from '@/assets/Logos/Maps.svg'

export function Location () {
  return (
    <section className={locationStyles.section}>
      <div className={locationStyles.container}>
        <div className={locationStyles.imageContainer}>
          <img src={Mail} alt='mail logo' className={locationStyles.image} />
        </div>
        <div className={locationStyles.subTitleContainer}>
          <h2 className={locationStyles.subTitle}>Have a question?</h2>
          <p className={locationStyles.whiteText}>I'm here to help you.</p>
          <p className={locationStyles.redText}>Email me at makoski.ed@gmail.com</p>
        </div>
      </div>
      <div className={locationStyles.container}>
        <div className={locationStyles.imageContainer}>
          <img src={Maps} alt='maps logo' className={locationStyles.image} />
        </div>
        <div className={locationStyles.subTitleContainer}>
          <h2 className={locationStyles.subTitle}>Current Location</h2>
          <p className={locationStyles.whiteText}>Misiones, Argentina</p>
          <p className={locationStyles.redText}>Serving clients worldwide</p>
        </div>
      </div>
    </section>
  )
}
