import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const StyledTypography = styled(Typography).attrs({})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    text-align: center !important;
  }
`;

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '24px',
  marginTop: '16px',
})``;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const ChipsContainer = styled(Box).attrs({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 0.5,
})``;

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px 0',
})``;

export const ConfirmationContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '24px',
  padding: '16px 0',
})``;

export const ConfirmationTextContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})``;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    },
  },
  sx: {
    '&& .Mui-selected': {
      backgroundColor: theme.palette.grey[200],
      ':hover': {
        backgroundColor: theme.palette.grey[300],
      },
    },
  },
};
