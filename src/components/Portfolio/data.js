import speedy from "../../images/speedydoodle.png";
import poke from "../../images/Poke2.png";
import wordle from "../../images/wordle.png";
import sharaway from "../../images/sharaway.png";
import synthetic from "../../images/synthetic.png"

const featured1 = {
  header: "Service Site",
  site: "Speedydoodle Art",
  image: speedy,
  link: "https://speedydoodle.com/",
  stack: [ "React", "Node", "HTML", "SASS", "GoogleAPIs", "SMTP Server", "Javascript"],
  reverse: true,
  description:
    "Single Page Application designed with the intent of showcasing the client's artistic talent while retaining industry standards to simplify user experience.",
};

 const featured2 = {
  header: "Spelling App",
  site: "Wordle Plus",
  image: wordle,
  stack: ["HTML", "SASS", "Javascript", "Node", "WordAPI"],
  link: "https://carnoldcoding.github.io/wordle-clone/",
  description: "Single Page Application developed in Node.JS with HTML/SASS/Typescript, hosted on Github through pages. Leverages an open source language generative API model to query the english lexicon."
}

const featured3 = {
  header: "Pokedex App",
  site: "Generation VI Pokedex",
  image: poke,
  stack: ["HTML", "SASS", "Typescript", "Node", "Vite", "PokeAPI", "GSAP"],
  link: "https://carnoldcoding.github.io/pokedex/",
  reverse: true,
  description:
    "Single Page Application developed in Node.JS with HTML/SASS/Typescript and packaged/shipped with Vite. Leverages the community driven PokeAPI over HTTP to visualize data in a glassmorphic design.",
};

const featured4 = {
  header: "Consultation Website",
  site: "Sharaway Strategic Consulting",
  image: sharaway,
  stack: ["HTML", "Typescript", "Tailwind", "Node", "Vite"],
  link: "https://www.sharawayconsulting.com/",
  reverse: true,
  description: "Single Page Application developed in the Node.JS runtime packaged and shipped with Vite. Designed for an older target audience with ADA standards in mind."
}

const featured5 = {
  header: "Digital Blog",
  site: "Synthetic Soul",
  image: synthetic,
  stack: ["React", "Typescript", "Tailwind", "Express", "MongoDB"],
  link: "https://syntheticsoul.me/",
  reverse: false,
  description: "Full stack React blog application served on Cloudflare with a MongoDB database accessed by an admin panel that routes to an Express backend. The site sports a unique polished retro operating system aesthetic that remains consistent across all devices for a performant experience."
}

const projects = [
  {
    title: "Synthetic Soul",
    description:
      "Full stack React blog application served on Cloudflare with a MongoDB database accessed by an admin panel that routes to an Express backend. The site sports a unique polished retro operating system aesthetic that remains consistent across all devices for a performant experience.",
      git: "https://github.com/carnoldcoding/mind-dump",
      live: "https://syntheticsoul.me/"
  },
  {
    title: "Sharaway Consulting",
    description:
      "This website serves as an advertisement for the services of an organization that helps non-profits get on their feet.",
      git: "https://github.com/carnoldcoding/carolyn-site",
      live: "https://www.sharawayconsulting.com/"
  },
{
    title: "Covid 19 and Politics",
    description:
      "This is a machine learning research paper written in Python using Jupytr Labs with the goal of representing a correlation between political affiliation and likelihood to contract COVID-19.",
    git: "https://github.com/carnoldcoding/Covid-and-Politics",
    live: "https://github.com/carnoldcoding/Covid-and-Politics/blob/main/Covid%20and%20Politics.pdf"
  },
  {
    title: "NeoVim Configuration",
    description:
      "This project contains the dotfiles and configuration tree for my personal development environment. The project is written entirely in Lua, and is formatted to allow quick installation on different devices.",
      git: "https://github.com/carnoldcoding/linux-environment"
  },
  {
    title: "iPhone Calculator",
    description:
      "Remake of the iPhone calculator from scratch written in pure html/css/js. Adhering to the modern Model-View-Controller architectural pattern.",
  },
  
];

export { featured1, featured2, featured3, featured4, featured5, projects };
