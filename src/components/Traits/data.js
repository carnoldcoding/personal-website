import { ReactComponent as DrivenSVG } from "../../images/driven.svg";
import { ReactComponent as CollabSVG } from "../../images/collab.svg";
import { ReactComponent as KindSVG } from "../../images/kind.svg";

const trait1 = {
  image: <DrivenSVG />,
  title: "Driven",
    text: "I trust myself to work with purpose. Give me a goal and I'll show you a path to achieve it."
};

const trait2 = {
  image: <CollabSVG />,
  title: "Creative",
  text: "To be creative is to dare think outside the confines of an environment with the information it taught you. Being a software engineer means bringing innovation to each project we build, each file we make, and each line we write. "};

const trait3 = {
  image: <KindSVG />,
  title: "Kind",
  text: "Kindness is an important aspect of programming. Being kind enough to welcome adverse ideas in safe discourse is a vital trait to have. Projects are rarely a one-man journey, and kindness promotes diversity of thought which nourishes innovation in others.",
};

export { trait1, trait2, trait3};
