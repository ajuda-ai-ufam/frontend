import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled(Box).attrs({
  width: '280px',
  height: '150px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 180px !important;
    height: 100px !important;
  }
`;
