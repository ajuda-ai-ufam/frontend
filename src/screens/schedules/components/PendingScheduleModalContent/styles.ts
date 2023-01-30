import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const ChangeStatusButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;
