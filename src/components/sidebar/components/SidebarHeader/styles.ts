import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 !important',
  padding: '16px 30px',
  backgroundColor: theme.palette.secondary.main,
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 16px 20px !important;
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    display: none !important;
  }
`;
