import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import Book from '../../../../assets/landingPageImages/book.svg';
import Book100 from '../../../../assets/landingPageImages/book100.svg';
import Book160 from '../../../../assets/landingPageImages/book160.svg';
import Hands from '../../../../assets/landingPageImages/hands.svg';
import Hands100 from '../../../../assets/landingPageImages/hands100.svg';
import Hands160 from '../../../../assets/landingPageImages/hands160.svg';
import Notification from '../../../../assets/landingPageImages/notification.svg';
import Notification100 from '../../../../assets/landingPageImages/notification100.svg';
import Notification160 from '../../../../assets/landingPageImages/notification160.svg';

export const InnerContainer = styled(Box).attrs({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '64px 0',
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
