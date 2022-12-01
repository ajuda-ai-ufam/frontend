import styled from 'styled-components';
import theme from '../../utils/theme';
import { TextField } from '../textField';

export const StyledTextField = styled(TextField)`
  margin: 32px 0;
  background: ${theme.palette.background.default};
  width: 100% !important;
  border-radius: 12px !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px 0 !important;
  }

  fieldset {
    border-width: 0;

    :focus {
      border-width: 1px !important;
    }
  }
`;
