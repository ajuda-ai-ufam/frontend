import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  width: '50vw',
})`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: none !important;
  }
`;

export const UpPatternBox = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})``;

export const BottomPatternBox = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})``;

export const LogoBox = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})``;
