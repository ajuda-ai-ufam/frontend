import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import TopRightImage1920 from '../../../../assets/landingPageImages/lateralAssets/image-40.png';
import TopLeftImage1920 from '../../../../assets/landingPageImages/lateralAssets/image-41.png';
import BottomRightImage1920 from '../../../../assets/landingPageImages/lateralAssets/image-42.png';
import BottomLeftImage1920 from '../../../../assets/landingPageImages/lateralAssets/image-43.png';
import Book from '../../../../assets/landingPageImages/book.svg';
import Book100 from '../../../../assets/landingPageImages/book100.svg';
import Book160 from '../../../../assets/landingPageImages/book160.svg';
import Hands from '../../../../assets/landingPageImages/hands.svg';
import Hands100 from '../../../../assets/landingPageImages/hands100.svg';
import Hands160 from '../../../../assets/landingPageImages/hands160.svg';
import Notification from '../../../../assets/landingPageImages/notification.svg';
import Notification100 from '../../../../assets/landingPageImages/notification100.svg';
import Notification160 from '../../../../assets/landingPageImages/notification160.svg';
import theme from '../../../../utils/theme';

export const OutsideContainer = styled(Box).attrs({
  width: '100%',
  height: '100%',
  position: 'relative',
})`
  @media (max-height: 700px) {
    margin: 100px 0 0 0 !important;
  }
  @media (max-height: 600px) {
    margin: 130px 0 0 0 !important;
  }
`;

export const InnerContainer = styled(Box).attrs({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '64px 0',
  position: 'relative',
})``;

export const BoxContainer = styled(Box).attrs({
  display: 'grid',
  gap: '24px',
  flexWrap: 'wrap',
  margin: '80px 0 0 0',
})`
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    margin: 48px 24px 0 24px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 24px 16px 0 16px !important;
    display: flex !important;
    justify-content: center !important;
  }
`;

export const InfoBox = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  padding: '12px 26px',
  textAlign: 'center',
})`
  width: 100%;
  height: 100%;
  background-color: #393939;
  border-radius: 32px;
  max-width: 350px !important;
  height: 428px;

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    height: 312px !important;
    padding: 0 0 24px 0 !important;
    gap: 24px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-height: 200px !important;
  }
`;

export const InfoBoxTypography = styled(Typography)`
  max-height: 50px;
  height: 100%;

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    max-height: 60px;
    margin: 0 16px 0 16px !important;
  }
`;

export const BookImage = styled(Box)`
  background-image: url(${Book}) !important;
  width: 180px !important;
  height: 180px !important;
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    background-image: url(${Book160}) !important;
    width: 160px !important;
    height: 160px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    background-image: url(${Book100}) !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const NotificationImage = styled(Box)`
  background-image: url(${Notification}) !important;
  width: 180px !important;
  height: 180px !important;
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    background-image: url(${Notification160}) !important;
    width: 160px !important;
    height: 160px !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    background-image: url(${Notification100}) !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const HandsImage = styled(Box)`
  background-image: url(${Hands}) !important;
  width: 180px !important;
  height: 180px !important;
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    background-image: url(${Hands160}) !important;
    width: 160px !important;
    height: 160px !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    background-image: url(${Hands100}) !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const TopLeftImage = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${TopLeftImage1920});

  margin-top: -120px !important;
  width: 158px !important;
  height: 206px !important;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: -80px !important;
    width: 106px !important;
    height: 139px !important;
  }
`;

export const TopRightImage = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${TopRightImage1920});
  margin-top: -120px !important;
  width: 164px !important;
  height: 206px !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: -80px !important;
    width: 111px !important;
    height: 139px !important;
  }
`;

export const BottomLeftImage = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BottomLeftImage1920});
  width: 108px !important;
  height: 152px !important;
  margin-bottom: -82px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 72px !important;
    margin-bottom: -56px;
    height: 102px !important;
  }
`;

export const BottomRightImage = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BottomRightImage1920});
  width: 158px !important;
  margin-bottom: -82px;
  height: 152px !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 105px !important;
    margin-bottom: -56px;
    height: 102px !important;
  }
`;
