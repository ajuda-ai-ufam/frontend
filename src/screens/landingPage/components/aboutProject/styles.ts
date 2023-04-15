import { Box } from '@mui/material';
import styled from 'styled-components';
import LogoImage1920 from '../../../../assets/landingPageImages/1920/image-46.png';
import theme from '../../../../utils/theme';

export const InnerContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
})`
  max-width: 1100px;
`;

export const LogoImage = styled.img.attrs({
  src: `${LogoImage1920}`,
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    max-width: 260px !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-width: 190px !important;
  }
`;
