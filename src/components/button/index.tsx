import LoadingButton from '@mui/lab/LoadingButton';
import styled from 'styled-components';

interface ButtonProp {
  color: string;
}

export const Button = styled(LoadingButton).attrs({
  variant: 'contained',
})<ButtonProp>`
  color: ${(props) => props.color};
  border-radius: 100px !important;
  width: 180px;
`;
