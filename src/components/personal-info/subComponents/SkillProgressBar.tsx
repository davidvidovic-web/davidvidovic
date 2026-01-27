
// skills data
const skills = [
    { label: "Figma", value: 90, width: "90%" },
    { label: "Sketch", value: 82, width: "82%" },
    { label: "Photoshop", value: 65, width: "65%" },
    { label: "Invision", value: 58, width: "58%" },
];

const SkillProgressBar = () => {
    return (
        <div className="p-progress-bar-wrap">
            {skills.map((skill, index) => (
                <div className="tp-progress-bar-item" key={index}>
                    <label>{skill.label}</label>
                    <div className="tp-progress-bar">
                        <div className="progress">
                            <div
                                style={{ width: skill.width }}
                                className="progress-bar"
                                role="progressbar"
                                data-width={`${skill.value}%`}
                                aria-valuenow={skill.value}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <span>{skill.value}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillProgressBar;
