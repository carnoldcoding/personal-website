import "./ExperienceStyles.scss";
import resumeDL from "../../assets/resume.pdf";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = ({ job, company, timeframe, achievements }) => {
  const scope = useRef();
  const tl = useRef();
    const title = useRef();
    const subtext = useRef();
    const list = useRef([]);
    const resume = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
            start: "top center"
        },
      });
        tl.current.from(title.current,{
            opacity: 0,
            x: -100
       }).from(subtext.current,{
           opacity: 0,
           x: 100
       }, "-=.3")
        list.current.forEach(item=>{
            tl.current.from(item,{
                opacity: 0
            }, "-=.3")
        })
        tl.current.from(resume.current, {
            y: 100,
            opacity: 0,
        }, "-=.4")

    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div id="Experience" ref={scope}>
      <article className="experience">
        <header>
          <h1 ref={title}>
            <span>Experience</span>
          </h1>
          <div className="subtext" ref={subtext}>
            <h3>
              {job} <span>@{company}</span>
            </h3>
            <h3>{timeframe}</h3>
          </div>
        </header>
        <ul className="achievements">
          {achievements.map((achievement, index) => {
            return <li ref={el=>{list.current.push(el)}} key={index}>{achievement}</li>;
          })}
        </ul>
        <aside className="download" ref={resume}>
          <a href={resumeDL} target="_blank" rel="noopener noreferrer">
            <ion-icon name="cloud-download-outline"></ion-icon>
          </a>
          <p>Full Resume</p>
        </aside>
      </article>
    </div>
  );
};

export default Experience;
