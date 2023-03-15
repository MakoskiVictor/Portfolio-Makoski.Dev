import './App.css'
import { NavBar } from '@/components/NavBar.jsx'
import { Home } from '@/components/Home.jsx'
import { About } from '@/components/About.jsx'

export function App () {
  return (
    <main className='App'>
      <NavBar />
      <Home />
      <About />
    </main>
  )
}
