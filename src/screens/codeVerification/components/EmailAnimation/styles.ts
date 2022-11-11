import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box)`
  width: 190px !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 132px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 110 px !important;
  }
`;
