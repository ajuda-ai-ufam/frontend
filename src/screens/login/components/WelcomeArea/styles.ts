import { Box } from '@mui/system';
import styled from 'styled-components';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  width: '50vw',
})``;

export const ContainerUp = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
})``;

export const ContainerMiddle = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})``;

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})``;
