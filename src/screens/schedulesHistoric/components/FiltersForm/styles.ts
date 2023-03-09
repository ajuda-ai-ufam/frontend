import { Box, Select } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100% !important;
`;

export const SelectField = styled(Select)`
  width: 100% !important;
  fieldset {
    border-radius: 12px;
  }
`;

export const DatePickersContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  width: '90%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
    width: 100% !important;
  }
`;

export const FilterButtonContainer = styled(Box).attrs({
  width: '20%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const UntilContainer = styled(Box)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;

export const LastFormRowContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  width: 100%;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column;
  }
`;
