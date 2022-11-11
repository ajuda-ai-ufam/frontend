import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../../assets/email-animation.json';
import { Container } from './styles';

const EmailAnimation = () => {
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

export default EmailAnimation;
