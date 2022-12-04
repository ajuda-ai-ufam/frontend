import { AccountCircle } from '@mui/icons-material';
import { Box, Card } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Card)`
  display: flex !important;
  align-items: center !important;
  background-color: ${theme.palette.background.default} !important;
  border-radius: 16px !important;
  padding: 24px;

  :hover {
    background-color: ${theme.palette.primary.main} !important;
    cursor: pointer;
    transition: 0.5s;

    span {
      color: white !important;
    }

    h6 {
      color: white !important;
    }

    svg {
      color: white !important;
    }
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 16px !important;
  }
`;

export const AccountIcon = styled(AccountCircle).attrs({
  style: {
    fontSize: 56,
  },
})`
  color: ${theme.palette.grey[500]};
`;

export const DataContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})``;
