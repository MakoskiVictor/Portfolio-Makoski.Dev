import javascript from '@/assets/skills/javascript.svg'
import css from '@/assets/skills/css.svg'
import html from '@/assets/skills/html.svg'
import react from '@/assets/skills/react.svg'
import redux from '@/assets/skills/redux.svg'
import git from '@/assets/skills/git.svg'
import node from '@/assets/skills/node.svg'
import postgres from '@/assets/skills/postgres.svg'
/* import food from '@/assets/projects/food.jpg'
import tech from '@/assets/projects/tech.jpg'
import tateti from '@/assets/projects/tateti.jpg' */

export const SKILLS = [
  {
    name: 'Javascript',
    image: javascript,
    web: 'https://www.javascript.com/'
  },
  {
    name: 'CSS',
    image: css,
    web: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'HTML',
    image: html,
    web: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'react',
    image: react,
    web: 'https://reactjs.org/'
  },
  {
    name: 'redux',
    image: redux,
    web: 'https://redux.js.org/'
  },
  {
    name: 'git',
    image: git,
    web: 'https://git-scm.com/'
  },
  {
    name: 'node',
    image: node,
    web: 'https://nodejs.org/en/'
  },
  {
    name: 'postgres',
    image: postgres,
    web: 'https://www.postgresql.org/'
  }
]

export const PROJECTS = [
  {
    name: 'Food Api',
    url: 'https://food-api-front.vercel.app/',
    description: 'A full stack application that allows users to search for food recipes and view their information.',
    tech: 'Full Stack',
    image: "https://res.cloudinary.com/dl9pbe0eu/image/upload/v1679573840/food_2_uhty2k.webp"
  },
  {
    name: 'Techno Trade',
    url: 'https://front-wheat-gamma.vercel.app/',
    description: 'This PERN application allows users to create an account, login, and view their cart.',
    tech: 'Full Stack',
    image: "https://res.cloudinary.com/dl9pbe0eu/image/upload/v1679574036/tech_1_bckg0o.webp"
  },
  {
    name: 'Ta-Te-Ti',
    url: 'https://ta-te-ti-sigma.vercel.app/',
    description: 'A game between two players: O and X, who alternately mark the spaces of a 3×3 grid.',
    tech: 'Fron End',
    image: "https://res.cloudinary.com/dl9pbe0eu/image/upload/v1679574039/teteti_2_jpxufn.webp"
  }
]
