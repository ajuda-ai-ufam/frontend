import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const ActionsButton = styled(Button)`
  max-width: 160px;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-width: 100% !important;
  }
`;
