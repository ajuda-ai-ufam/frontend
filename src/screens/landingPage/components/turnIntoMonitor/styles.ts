import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import LeftImage1920 from '../../../../assets/landingPageImages/1920/image-44.png';
import RightImage1920 from '../../../../assets/landingPageImages/1920/image-45.png';
import { Button } from '../../../../components/button';

export const InnerContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
})`
  min-height: 100vh;
`;

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})``;

export const FooterContainer = styled(Box).attrs({
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#232323',
  width: '100% ',
  padding: '16px 0',
})``;

export const DoubtsTypography = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0 16px !important;
  }
`;

export const MonitorButton = styled(Button)`
  width: 100%;
  max-width: 300px;
`;

export const MessageContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '0 24px',
  height: '90vh',
})``;

export const LeftImage = styled(Box)`
  background-image: url(${LeftImage1920});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: initial;
  width: 600px !important;
  height: 500px !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: none !important;
  }
`;

export const RightImage = styled(Box)`
  background-image: url(${RightImage1920});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  width: 600px !important;
  height: 500px !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: none !important;
  }
`;
