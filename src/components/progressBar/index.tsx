import { Container, ProgressStep } from './styles';

type Props = {
  currentStep: number;
  steps: number;
};

const ProgressBar = ({ currentStep, steps }: Props) => {
  const renderSteps = () => {
    const stepsList = [];

    for (let i = 0; i < steps; i++) {
      stepsList.push(<ProgressStep key={i} isSelected={i === currentStep} />);
    }

    return stepsList;
  };

  return <Container>{renderSteps()}</Container>;
};

export default ProgressBar;
