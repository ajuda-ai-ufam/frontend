import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

const Container = styled(Box)`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    margin-left: 280px !important;
  }
`;

export default Container;
