import { Box } from '@mui/material';
import styled from 'styled-components';

export const InnerContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  heigth: '100%',
  padding: '64px 0',
})`
  max-width: 1200px;
`;
