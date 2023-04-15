import Lottie from 'react-lottie';
import * as animationData from '../../assets/hero-animation.json';
import { Container } from './styles';

const SchedulesRoutineAnimation = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOption} />
    </Container>
  );
};

export default SchedulesRoutineAnimation;
