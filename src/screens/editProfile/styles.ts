import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Typography } from '@mui/material';
import { TextField } from '../../components/textField';
import { Button } from '../../components/button';

type InfoContainerProps = {
  keepAsRow?: boolean;
};

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0 16px !important;
  }
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  width: '1128px',
  margin: '24px',
  backgroundColor: 'white',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

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

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '60px 0',
})``;

export const EditButton = styled(Button).attrs({
  color: `primary`,
})`
  width: 100%;
  max-width: 144px;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-width: 104px !important;
  }
`;

export const SectionContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: `column`,
  gap: `24px`,
  margin: `24px 0 24px 0`,
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 14px 0 14px 0 !important;
  }
`;

export const InfoContainer = styled(Box).attrs({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `space-between`,
})<InfoContainerProps>`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: ${(props) =>
      props.keepAsRow ? `row` : `column`} !important;
  }
`;

export const InfoLegendContainer = styled(Box).attrs({
  display: `flex`,
  flexDirection: `column`,
})`
  width: 40%;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const TextFieldContainer = styled(Box)`
  width: 50%;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 16px;
  }
`;

export const LegendTypography = styled(Typography).attrs({
  color: 'secondary.light',
  variant: 'body2',
})`
  margin-top: 8px !important;
`;

export const StyledTextField = styled(TextField).attrs({
  sx: {
    '&.Mui-disabled': {
      backgroundColor: `#F6F7F6 !important`,
      '& > fieldset': {
        borderColor: '#F6F7F6 !important',
      },
    },
  },
})`
  width: 100%;
  max-height: 48px;
`;

export const DescriptionTextField = styled(TextField).attrs({
  type: 'text',
  name: 'description',
  multiline: true,
  inputProps: { maxLength: 500 },
  sx: {
    '&.Mui-disabled': {
      backgroundColor: `#F6F7F6 !important`,
      '& > fieldset': {
        borderColor: '#F6F7F6 !important',
      },
    },
  },
})`
  width: 100%;
`;

export const SectionTitleTypography = styled(Typography).attrs({
  variant: `h6`,
  marginTop: `24px`,
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: 16px !important;
  }
`;
