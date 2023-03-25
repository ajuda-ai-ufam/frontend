import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/404-error.json';
import { Container } from './styles';

const NotFoundErrorAnimation = () => {
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

export default NotFoundErrorAnimation;
