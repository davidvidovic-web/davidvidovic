import AnimatedCounter from '../shared/Counter/AnimatedCounter';
import { CounterMetric } from '@/types/project-dt';

interface ProjectDetailsCounterProps {
    counters?: CounterMetric[];
}

const defaultCounterData: CounterMetric[] = [
    {
        value: 120,
        suffix: '%',
        label: 'Months Project Duration',
    },
    {
        value: 45,
        suffix: '%',
        label: 'Average daily signups',
    },
    {
        value: 300,
        suffix: '%',
        label: 'Active users worldwide',
    },
];

const ProjectDetailsCounter = ({ counters }: ProjectDetailsCounterProps) => {
    const counterData = counters && counters.length > 0 ? counters : defaultCounterData;
    
    return (
        <div className="tp-project-details-result-right">
            {counterData.map((counter, index) => (
                <div key={index} className="tp-project-details-result">
                    <AnimatedCounter min={0} max={counter.value} cls='child-1' prefix={counter.prefix || ''} suffix={counter.suffix || ''} />
                    <span className="child-2">{counter.label}</span>
                </div>
            ))}
        </div>
    );
};

export default ProjectDetailsCounter;
