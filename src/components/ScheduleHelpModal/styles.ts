import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '24px',
  marginTop: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    justify-content: center !important;
  }
`;

export const StyledButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const FeedbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  padding: '0 20px',
  flexDirection: 'column',
})``;
