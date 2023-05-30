import "./ExperienceStyles.scss";
const Experience = ({ job, timeframe, achievements }) => {
  return (
    <div className="experience-container">
      <article className="experience">
        <header>
          <h1>
            <span>Experience</span>
          </h1>
          <div className="subtext">
            <h3>{job}</h3>
            <h3>{timeframe}</h3>
          </div>
        </header>
        <ul className="achievements">
          {achievements.map((achievement, index) => {
            return <li key={index}>{achievement}</li>;
          })}
        </ul>
        <aside className="download">
          <ion-icon name="cloud-download-outline"></ion-icon>
          <p>Full Resume</p>
        </aside>
      </article>
    </div>
  );
};

export default Experience;
