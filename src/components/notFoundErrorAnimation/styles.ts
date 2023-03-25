import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled(Box)`
  width: 500px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 300px !important;
  }
`;
