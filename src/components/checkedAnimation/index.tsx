import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/checked-animation.json';
import { Container } from './styles';

const CheckedAnimation = () => {
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

export default CheckedAnimation;
