import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

type Props = {
  scrolled: boolean;
};

export const HeaderContainer = styled(Box)<Props>`
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  ${(props) =>
    props.scrolled &&
    `
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);`}
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-bottom: 36px !important;
  }
`;
