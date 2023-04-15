import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../utils/theme';

type OutsideContainerProps = {
  color?: string;
};

export const SectionContainer = styled(Box).attrs(
  (props: OutsideContainerProps) => ({
    backgroundColor: props.color || 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  })
)<OutsideContainerProps>`
  min-height: 100vh;
`;

export const TitleTypography = styled(Typography)`
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 45px !important;
  line-height: 111% !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    font-size: 32px !important;
    line-height: 48px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 24px !important;
    line-height: 36px !important;
    margin: 0 16px !important;
  }
`;

export const InfoTypography = styled(Typography).attrs({
  margin: '24px 16px 72px 16px',
  variant: 'body1',
  color: 'grey',
  textAlign: 'center',
})``;
