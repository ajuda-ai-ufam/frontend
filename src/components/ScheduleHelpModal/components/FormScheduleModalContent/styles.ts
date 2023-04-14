import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const DateFieldsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const DateTextField = styled(TextField).attrs({})`
  width: 100%;

  fieldset {
    border-radius: 12px;
  }
`;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const FeedbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  padding: '0 20px',
  flexDirection: 'column',
})``;
