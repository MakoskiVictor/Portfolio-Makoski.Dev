import footerStyles from '@/styles/Footer.module.css'
import GithubLogo from '@/assets/Logos/GithubLogo.svg'
import LinkedinLogo from '@/assets/Logos/LinkedinLogo.svg'

export function Footer () {
  return (
    <section className={footerStyles.section}>
      <div className={footerStyles.container}>
        <p className={footerStyles.name}>Makoski Víctor</p>
        <div>
          <ul className={footerStyles.ul}>
            <li className={footerStyles.socialsLogo}>
              <a target='_blank' rel='noreferrer' href='https://github.com/MakoskiVictor'><img src={GithubLogo} alt='GitHub Logo' className={footerStyles.img} /></a>
            </li>
            <li className={footerStyles.socialsLogo}><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/makoskidev/'><img src={LinkedinLogo} alt='LinkedIn Logo' className={footerStyles.img} /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
