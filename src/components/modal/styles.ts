import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  backgroundColor: 'white',
  padding: '24px',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 752px;
  width: 80%;

  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  max-height: 90%;
  overflow-y: overlay;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-height: 80% !important;
  }
`;
