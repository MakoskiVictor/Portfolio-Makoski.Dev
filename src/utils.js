/* import javascript from '@/assets/skills/javascript.svg' */
import Astro from "@/assets/skills/astrojs.svg";
import tailwind from "@/assets/skills/tailwind.svg";
import mongodb from "@/assets/skills/mongodb.svg";
import react from "@/assets/skills/react.svg";
import docker from "@/assets/skills/docker.svg";
import git from "@/assets/skills/git.svg";
import node from "@/assets/skills/node.svg";
import postgres from "@/assets/skills/postgres.svg";
import typescript from "@/assets/skills/typescript.svg";
import reactNative from "@/assets/skills/react-native.svg";
import snake from "@/assets/projects/SnakeApp.webp";
import tech from "@/assets/projects/tech.webp";
import tateti from "@/assets/projects/tateti.webp";
import translate from "@/assets/projects/translate.webp";
import starWars from "@/assets/projects/starWars.webp";
//import metropolitan from "@/assets/projects/metropolitan.webp";
import nest from "@/assets/skills/NestJS.svg";
import recipehub from "@/assets/projects/recipehub.webp";
import NestRegister from "@/assets/projects/NestRegister.webp"

export const PUBLIC_KEY = "x9ZTYKf99VqNZsdGN";
export const SERVICE_ID = "service_p29qgw1";
export const TEMPLATE_ID = "template_wblizpm";

export const SKILLS = [
  
  {
    name: "Typescript",
    image: typescript,
    web: "https://www.typescriptlang.org/",
  },
  {
    name: "NestJs",
    image: nest,
    web: "https://nestjs.com/",
  },
  {
    name: "AstroJs",
    image: Astro,
    web: "https://astro.build/",
  },
  {
    name: "react",
    image: react,
    web: "https://reactjs.org/",
  },
  {
    name: 'Tailwind',
    image: tailwind,
    web: 'https://tailwindcss.com/'
  }, 
  {
    name: "docker",
    image: docker,
    web: "https://www.docker.com/",
  },
  {
    name: "git",
    image: git,
    web: "https://git-scm.com/",
  },
  {
    name: "node",
    image: node,
    web: "https://nodejs.org/en/",
  },
  {
    name: "postgres",
    image: postgres,
    web: "https://www.postgresql.org/",
  },
  {
    name: "mongodb",
    image: mongodb,
    web: "https://www.mongodb.com/es",
  },
  // {
  //   name: "React Native",
  //   image: reactNative,
  //   web: "https://reactnative.dev/",
  // },
];

export const PROJECTS = [
  // {
  //   name: "Club Metropolitan",
  //   url: "https://metropolitan-eta.vercel.app/",
  //   description: `-- ON GOING PROJECT -- An Angular and NestJs project that involves the development of a gym portal, 
  //   designed to provide customers with a comprehensive experience. From detailed information about the gym, easy registration options, 
  //   to the convenience of paying fees directly through the portal.`,
  //   tech: "Full Stack",
  //   image: metropolitan,
  // },
  {
    name: "Register System",
    url: "https://register-api-sigma.vercel.app/api/v1",
    description:
      "Register and Login System. Made it with NestJs, TypeScript, TypeORM, JWT and PostgreSQL.",
    tech: "Back End",
    image: NestRegister,
  },
  {
    name: "RecipeHub-API",
    url: "https://recipe-hub-api.vercel.app/",
    description:
      "REST Api with NestJs, TypeScript, TypeORM and PostgreSQL. You can Get a recipes list, recipe by id, Post new recipes and Delete it.",
    tech: "Back End",
    image: recipehub,
  },
  {
    name: "Star Wars Microservices",
    url: "https://star-wars-microservices.vercel.app/",
    description:
      "REST Api with Microservices Architecture, MongoDB and Docker. Deployed on Google Cloud.",
    tech: "Back End",
    image: starWars,
  },
  {
    name: "Techno Trade",
    url: "https://front-wheat-gamma.vercel.app/",
    description:
      "This PERN application allows users to create an account, login, and view their cart.",
    tech: "Full Stack",
    image: tech,
  },
  {
    name: "Ta-Te-Ti",
    url: "https://ta-te-ti-sigma.vercel.app/",
    description:
      "A game between two players: O and X, who alternately mark the spaces of a 3×3 grid.",
    tech: "Fron End",
    image: tateti,
  },
  {
    name: "Google Translate Clone",
    url: "https://google-translate-clonned.vercel.app",
    description:
      "A Google Translate clone made with Typescript. It has three available languages and an audio button.",
    tech: "Full Stack",
    image: translate,
  },
  {
    name: "Snake App",
    url: "https://expo.dev/@makoski/SnakeApp?serviceType=classic&distribution=expo-go",
    description:
      "A React Native and Typescript app where you got a snake and need to give it fruits. WARNING: needs Expo App to run it",
    tech: "React Native",
    image: snake,
  },
];
