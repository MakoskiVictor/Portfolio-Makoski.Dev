import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import { Home } from '@/components/Home.jsx'
import { About } from '@/components/About.jsx'
import { Skills } from '@/components/Skills.jsx'
import { Portfolio } from '@/components/Portfolio.jsx'
import { Contact } from '@/components/Contact.jsx'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}
