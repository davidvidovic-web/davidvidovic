
// Experience Data
const experienceData = [
  {
    duration: "2022 - Present",
    title: "UI/UX Lead Designer",
    company: "Amazon INC",
  },
  {
    duration: "2022 - Present",
    title: "Product Lead Designer",
    company: "Amazon INC",
  },
  {
    duration: "2022 - Present",
    title: "Graphic Designer",
    company: "Amazon INC",
  },
  {
    duration: "2022 - Present",
    title: "Software developer",
    company: "Amazon INC",
    isLast: true,
  },
];

const ExperienceInfo = () => {
  return (
    <>
      {experienceData.map((exp, index) => (
        <div
          key={index}
          className={`ab-personal-info__exprience-box d-flex align-items-start ${
            exp.isLast ? "ab-personal-bttom-border" : ""
          }`}
        >
          <span className="ab-personal-info__exprience-length">
            {exp.duration}
          </span>
          <div className="ab-personal-info__exprience-content">
            <h4 className="ab-personal-info__exprience-title">{exp.title}</h4>
            <span>{exp.company}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceInfo;
