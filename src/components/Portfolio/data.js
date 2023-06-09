import speedy from "../../images/speedydoodle.png";
const featured1 = {
  header: "Sales Site",
  site: "Speedydoodle Art",
  image: speedy,
  description:
    "Single Page Application designed with the intent of showcasing the client's artistic talent while retaining industry standards to simplify user experience.",
};

const projects = [
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

export { featured1, projects };
