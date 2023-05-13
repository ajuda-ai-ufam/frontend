import { TextField as MUITextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import { TextField } from '../../../textField';

export const DateFieldsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const DateTextField = styled(MUITextField).attrs({})`
  width: 100%;

  fieldset {
    border-radius: 12px;
  }
`;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const FeedbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  padding: '0 20px',
  flexDirection: 'column',
})``;

export const DescriptionTextField = styled(TextField).attrs({
  type: 'text',
  name: 'description',
  multiline: true,
  placeholder:
    'Descreva o motivo do agendamento, cite informações como:\n - Quais são suas dúvidas?\n - Você fará sozinho ou em grupo? (Caso seja em grupo, informe quem irá participar.)\n - Você prefere que seja presencial ou online?',
  inputProps: { maxLength: 500 },
})``;

export const DescriptionContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})``;
