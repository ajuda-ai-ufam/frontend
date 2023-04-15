import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animação-hero.json';
import { Container } from './styles';

const ExplanationAnimation = () => {
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

export default ExplanationAnimation;
