import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '@mui/material';

type InfoContainerProps = {
  keepAsRow?: boolean;
};

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 16px !important;
  }
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  width: '1128px',
  margin: '24px',
  backgroundColor: 'white',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 !important;
    margin: 16px 0 !important;
    box-shadow: none;
  }
`;

export const InfoContainer = styled(Box).attrs({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `space-between`,
})<InfoContainerProps>`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: ${(props) =>
      props.keepAsRow ? `row` : `column`} !important;
  }
`;

export const EditButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '140px',
  height: '44px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 118px !important;
  }
`;
