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
        <ul>
          <li>
            <a href='#'><p>Home</p></a>
          </li>
          <li>
            <a href='#'><p>About</p></a>
          </li>
          <li>
            <a href='#'><p>Portfolio</p></a>
          </li>
          <li>
            <a href='#'><p>Contact</p></a>
          </li>
        </ul>
      </nav>
      <nav className={NavBarStyle.socials}>
        <ul>
          <li className={NavBarStyle.socialsLogo}>
            <a href='https://github.com/MakoskiVictor'><img src={GithubLogo} alt='GitHub Logo' /></a>
          </li>
          <li className={NavBarStyle.socialsLogo}><a href='https://www.linkedin.com/in/makoskidev/'><img src={LinkedinLogo} alt='LinkedIn Logo' /></a></li>
        </ul>
      </nav>
    </div>
  )
}
