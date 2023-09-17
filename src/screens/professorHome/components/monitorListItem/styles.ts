import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  borderRadius: '16px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatusValueContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})``;

export const DataContainer = styled(Box).attrs({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 33.33%)',
  width: '100%',
  marginLeft: '16px',
  padding: '16px 8px',
  alignItems: 'center',
})`
  @media (max-width: 1400px) {
    grid-template-columns: 30% 30% 40% !important;
  }

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    margin: 0 !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 16px 0 !important;
  }
`;

export const DataField = styled(Box).attrs({
  margin: '8px',
})`
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledInfoIcon = styled(InfoOutlinedIcon)`
  font-size: 16px !important;
  color: ${theme.palette.secondary.light} !important;
`;

export const Label = styled(Typography).attrs({
  variant: 'caption',
  color: theme.palette.secondary.light,
})``;

export const Value = styled(Typography).attrs({
  variant: 'subtitle1',
})``;

export const StatusValue = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})``;

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'flex-end',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const StatusLabelContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2px',
})``;
