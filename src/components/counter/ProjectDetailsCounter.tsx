import AnimatedCounter from '../shared/Counter/AnimatedCounter';

const counterData = [
    {
        id: 1,
        end: 120,
        duration: 0.7,
        suffix: '%',
        label: 'Months Project Duration',
    },
    {
        id: 2,
        end: 45,
        duration: 0.7,
        suffix: '%',
        label: 'Average daily signups',
    },
    {
        id: 3,
        end: 300,
        duration: 0.7,
        suffix: '%',
        label: 'Active users worldwide',
    },
];

const ProjectDetailsCounter = () => {
    return (
        <div className="tp-project-details-result-right">
            {counterData.map(({ id, end, suffix, label }) => (
                <div key={id} className="tp-project-details-result">
                    <AnimatedCounter min={0} max={end} cls='child-1' suffix={suffix} />
                    <span className="child-2">{label}</span>
                </div>
            ))}
        </div>
    );
};

export default ProjectDetailsCounter;
