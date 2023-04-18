import javascript from '@/assets/skills/javascript.svg'
import css from '@/assets/skills/css.svg'
import html from '@/assets/skills/html.svg'
import react from '@/assets/skills/react.svg'
import redux from '@/assets/skills/redux.svg'
import git from '@/assets/skills/git.svg'
import node from '@/assets/skills/node.svg'
import postgres from '@/assets/skills/postgres.svg'
import typescript from '@/assets/skills/typescript.svg'
import food from '@/assets/projects/food.webp'
import tech from '@/assets/projects/tech.webp'
import tateti from '@/assets/projects/tateti.webp'
import translate from '@/assets/projects/translate.webp'

export const PUBLIC_KEY = 'x9ZTYKf99VqNZsdGN'
export const SERVICE_ID = 'service_p29qgw1'
export const TEMPLATE_ID = 'template_wblizpm'

export const SKILLS = [
  {
    name: 'Javascript',
    image: javascript,
    web: 'https://www.javascript.com/'
  },
  {
    name: 'Typescript',
    image: typescript,
    web: 'https://www.typescriptlang.org/'
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
    image: food
  },
  {
    name: 'Techno Trade',
    url: 'https://front-wheat-gamma.vercel.app/',
    description: 'This PERN application allows users to create an account, login, and view their cart.',
    tech: 'Full Stack',
    image: tech
  },
  {
    name: 'Ta-Te-Ti',
    url: 'https://ta-te-ti-sigma.vercel.app/',
    description: 'A game between two players: O and X, who alternately mark the spaces of a 3×3 grid.',
    tech: 'Fron End',
    image: tateti
  },
  {
    name: 'Google Translate Clone',
    url: 'https://google-translate-clonned.vercel.app',
    description: 'A Google Translate clone made with Typescript. It has three available languages and an audio button.',
    tech: 'Full Stack',
    image: translate
  }
]
