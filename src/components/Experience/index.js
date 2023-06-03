import "./ExperienceStyles.scss";
import resume from "../../assets/resume.pdf"
const Experience = ({ job, company, timeframe, achievements }) => {
  return (
    <div id="Experience">
      <article className="experience">
        <header>
          <h1>
            <span>Experience</span>
          </h1>
          <div className="subtext">
            <h3>
              {job} <span>@{company}</span>
            </h3>
            <h3>{timeframe}</h3>
          </div>
        </header>
        <ul className="achievements">
          {achievements.map((achievement, index) => {
            return <li key={index}>{achievement}</li>;
          })}
        </ul>
        <aside className="download">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <ion-icon name="cloud-download-outline"></ion-icon>
          </a>
          <p>Full Resume</p>
        </aside>
      </article>
    </div>
  );
};

export default Experience;
