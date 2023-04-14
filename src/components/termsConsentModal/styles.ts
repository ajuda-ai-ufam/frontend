import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';

export const TermConsentCard = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  padding: '0 18px 0 0',
  margin: '48px 23px 48px 56px',
  overflow: 'auto',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0px !important;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    height: 500px !important;
  }
  height: 608px !important;
`;

export const TermConsentContent = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})``;

export const TermConsentTitle = styled(Box).attrs({
  textAlign: 'center',
  padding: '0px 24px',
})``;

export const TermConsentText = styled(Box).attrs({
  textAlign: 'justify',
})``;

export const StyledButton = styled(Button).attrs({
  width: '100%',
})``;

export const StyledTypography = styled(Typography).attrs({
  variant: 'body1',
  paddingBottom: '20px',
})``;

export const ConsentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '8px',
})`
  margin-top: 32px;
`;

export const TypographyConsent = styled(Typography).attrs({
  variant: 'caption',
  textAlign: 'center',
})``;

export const TypographyGreen = styled(Typography).attrs({
  variant: 'caption',
  color: 'primary',
})`
  cursor: pointer !important;
`;
