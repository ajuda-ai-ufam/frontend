import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled(Box)`
  width: 600px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 500px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 250px !important;
  }
`;
