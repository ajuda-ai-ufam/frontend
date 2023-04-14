import LoadingButton from '@mui/lab/LoadingButton';
import styled from 'styled-components';

interface ButtonProp {
  color: string;
  width?: string;
}

export const Button = styled(LoadingButton).attrs((props) => ({
  variant: props.variant || 'contained',
}))<ButtonProp>`
  color: ${(props) => props.color};
  border-radius: 100px !important;
  width: ${(props) => props.width || '180px'};
`;
