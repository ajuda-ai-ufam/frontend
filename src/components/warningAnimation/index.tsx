import Lottie from 'react-lottie';
import * as animationData from '../../assets/warning-animation.json';
import { Container } from './styles';

const WarningAnimation = () => {
  const defaultOption = {
    loop: false,
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

export default WarningAnimation;
