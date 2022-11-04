import { Button as MUIButton } from '@mui/material';
import styled from 'styled-components';

export const ButtonPrimary = styled(MUIButton).attrs({
  color: 'primary',
  variant: 'contained',
})`
  border-radius: 100px !important;
  width: 180px;
`;

export const ButtonSecondary = styled(MUIButton).attrs({
  color: 'secondary',
  variant: 'contained',
})`
  border-radius: 100px !important;
  width: 180px;
`;
