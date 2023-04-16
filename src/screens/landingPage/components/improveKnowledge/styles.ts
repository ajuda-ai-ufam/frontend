import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const InnerContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
  height: '100%',
})`
  max-width: 1400px;

  @media (max-height: 680px) {
    margin-top: 64px !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: column-reverse !important;
    text-align: center !important;
  }
`;

export const MessageContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  marginLeft: '70px',
})`
  max-width: 850px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    margin-left: 24px !important;
    max-width: 100% !important;
    align-items: center !important;
    margin: 0 240px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0 !important;
  }
`;

export const GIFContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '70px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    margin-right: 24px !important;
  }
`;

export const ButtonFindMonitor = styled(Button)`
  margin-top: 32px !important;
  min-width: 250px !important;
  max-width: 300px !important;
  width: 100%;
`;

export const InfoTypography = styled(Typography).attrs({
  margin: '16px 0',
  variant: 'body1',
  color: 'grey',
  textAlign: 'left',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    text-align: center !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px !important;
  }
`;
