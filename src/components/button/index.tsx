import { Button as MUIButton } from '@mui/material';
import styled from 'styled-components';

interface ButtonProp {
  color: string;
}

export const Button = styled(MUIButton).attrs({
  variant: 'contained',
})<ButtonProp>`
  color: ${(props) => props.color};
  border-radius: 100px !important;
  width: 180px;
`;
