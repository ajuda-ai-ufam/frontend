import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../../../utils/theme';
import { Button } from '../../../../../../components/button';

type PhotoContainerProps = {
  photo?: string;
};

export const Container = styled(Card)`
  display: flex !important;
  height: 185px;
  align-items: center !important;
  background-color: ${theme.palette.background.default} !important;
  border-radius: 16px !important;
  width: 100% !important;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
    text-align: center !important;
  }
`;

export const InfomartionContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '6px',
  marginLeft: '18px',
})`@media (max-width: ${theme.breakpoints.values.sm}px) {
  margin-left: 0px !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const Photo = styled(Box).attrs({
  backgroundColor: '#C4C4C4',
  borderRadius: '100px',
  width: '112px',
  height: '112px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '36px 0 36px 24px',
})<PhotoContainerProps>`
  background-image: url(${(props) => props.photo});
  background-size: contain !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px 46px 8px 46px !important;
    width: 60px !important;
    height: 60px !important;
  }
`;

export const LinkedinButton = styled(Button).attrs({
  variant: 'outlined',
  width: '112px',
  height: '40px',
})`
  margin: 16px 0px 0px 0px !important;
  color: #0077b7 !important;
  border-color: #0077b7 !important;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 98px !important;
    height: 32px !important;
    margin: 0px 0px 10px 0px !important;
  }
`;

export const NameTypography = styled(Typography)`
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 32px !important;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 14px !important;
    line-height: 21px !important;
  }
`;
