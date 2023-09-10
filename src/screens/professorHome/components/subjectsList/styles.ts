import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  margin: '24px 0px',
  gap: '24px',
})``;

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '60px 0',
})``;

export const SubjectHeaderContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})``;

export const MonitorsContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  margin: '24px 0px',
  gap: '24px',
})``;

export const AccessSubject = styled(Button).attrs({
  variant: 'text',
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;
