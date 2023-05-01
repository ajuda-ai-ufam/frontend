import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingRight: '20px',
})`
  overflow: scroll;
`;

export const StyledCard = styled(Card).attrs({
  width: '100%',
  height: '100%',
})`
  min-height: 40px;
  background-color: ${theme.palette.background.default} !important;
  border-radius: 24px !important;
  padding: 16px 24px;

  :hover {
    background-color: ${theme.palette.grey[200]} !important;
    cursor: pointer;
    transition: 0.8s;
  }
`;

export const InnerContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
})``;

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '10vh',
})`
  p {
    color: ${theme.palette.grey[500]} !important;
    text-align: center;
  }
`;

export const FallbackTypography = styled(Typography).attrs({
  variant: 'body1',
  color: theme.palette.grey[500],
  textAlign: 'center',
})``;
