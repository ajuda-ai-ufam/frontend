import { Box } from '@mui/material';
import theme from '../../../../../../utils/theme';
import styled from 'styled-components';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
})``;

export const CollaboratorsContainer = styled(Box).attrs({
  display: 'grid',
  gap: '24px',
  flexWrap: 'wrap',
  height: '100% !important',
  padding: '0 16px',
})`
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;
