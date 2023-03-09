import { Box } from '@mui/system';
import styled from 'styled-components';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '56px',
  width: '100%',
  marginTop: '36px',
  alignItems: 'center',
})``;

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '60px 0',
})``;
