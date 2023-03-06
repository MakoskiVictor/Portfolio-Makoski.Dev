import LinkedinLogo from '@/assets/Logos/LinkedinLogo.svg'
import GithubLogo from '@/assets/Logos/GithubLogo.svg'
import NavBarStyle from '@/styles/NavBar.module.css'

export function NavBar () {
  return (
    <div id='NavBar' className={NavBarStyle.NavBar}>
      <nav className={NavBarStyle.makoski}>
        <a href='NavBar'>Makoski Víctor</a>
      </nav>
      <nav className={NavBarStyle.NavButtons}>
        <ul className={NavBarStyle.ulNav}>
          <li className={NavBarStyle.liNav}>
            <a href='#'><p className={NavBarStyle.pNav}>Home</p></a>
          </li>
          <li className={NavBarStyle.liNav}>
            <a href='#'><p className={NavBarStyle.pNav}>About</p></a>
          </li>
          <li className={NavBarStyle.liNav}>
            <a href='#'><p className={NavBarStyle.pNav}>Portfolio</p></a>
          </li>
          <li className={NavBarStyle.liNav}>
            <a href='#'><p className={NavBarStyle.pNav}>Contact</p></a>
          </li>
        </ul>
      </nav>
      <nav className={NavBarStyle.socials}>
        <ul className={NavBarStyle.ulNav}>
          <li className={NavBarStyle.socialsLogo}>
            <a href='https://github.com/MakoskiVictor'><img src={GithubLogo} alt='GitHub Logo' className={NavBarStyle.imgNav} /></a>
          </li>
          <li className={NavBarStyle.socialsLogo}><a href='https://www.linkedin.com/in/makoskidev/'><img src={LinkedinLogo} alt='LinkedIn Logo' className={NavBarStyle.imgNav} /></a></li>
        </ul>
      </nav>
    </div>
  )
}