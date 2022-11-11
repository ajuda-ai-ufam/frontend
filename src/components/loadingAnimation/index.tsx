import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading-animation.json';
import { Container } from './styles';

const LoadingAnimation = () => {
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

export default LoadingAnimation;
