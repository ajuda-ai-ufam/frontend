import { Box } from '@mui/system';
import styled from 'styled-components';
import { TextField } from '../../components/textField';
import theme from '../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 16px !important;
  }
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  maxWidth: '1128px',
  margin: '24px',
  backgroundColor: 'white',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  width: 80%;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 !important;
    margin: 16px 0 !important;
    box-shadow: none;
  }
`;

export const SearchField = styled(TextField)`
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
