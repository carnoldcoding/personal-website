import { ReactComponent as DrivenSVG } from "../../images/driven.svg";
import { ReactComponent as CollabSVG } from "../../images/collab.svg";
import { ReactComponent as KindSVG } from "../../images/kind.svg";

const trait1 = {
  image: <DrivenSVG />,
  title: "Driven",
  text: "I love building. Programming is a tool that I use towards that end. I express myself in the interfaces I create, the code that I write, and the designs that I breathe life into",
};

const trait2 = {
  image: <CollabSVG />,
  title: "Collaborative",
  text: "Very little of what we do in programming comes solely from us. We don't develop the frameworks, libraries or languages that we program in. We use the tools that people are kind enough to make free. In that spirit, I like to contribute whatever I can, wherever I can.",
};

const trait3 = {
  image: <KindSVG />,
  title: "Kind",
  text: "Oddly enough, kindness is one of the more important aspects of programming. Being kind enough to welcome adverse ideas in safe discourse is a vital trait to have. Projects are rarely a one-man journey, kindness promotes diversity of thought and nourishes innovation in others.",
};

const experience1 = {
  job: "Geiger - Web Developer I",
  timeframe: "2022 - Current",
  achievements: [
    "Developed scalable and efficient eCommerce solutions for various corporations including State Farm, Blue Cros, and Ingersoll Rand.",
    "Wrote concise documentation for feature additions to our codebase which ensures easy modulation and composition.",
    "Worked with legacy code and frameworks to modernize outdated web infrastructure.",
  ],
};
export { trait1, trait2, trait3, experience1 };
