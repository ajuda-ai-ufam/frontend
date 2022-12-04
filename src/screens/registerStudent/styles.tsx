import { styled as styledMUI } from '@material-ui/core/styles';
import { OutlinedInput } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../components/button';
import theme from '../../utils/theme';

export const OutsideContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})`
  min-height: 100vh !important;
  width: 100% !important;
`;

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '16px',
})``;

export const ContainerContinue = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: '32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
  }
`;

export const LeftButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 22px !important;
  }
`;

export const RightButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 0px !important;
  }
`;

export const StyledFormBox = styled(Box).attrs({
  marginTop: '16px',
  width: '100%',
})``;

export const StyledFormTextField = styled(OutlinedInput)`
  width: 100%;
  fieldset {
    border-radius: 12px;
  }
`;

export const StyledForm = styled.form`
  margin: 0 16px;
  width: 100%;
  right: 0;
  left: 0;
`;

export const TypographyTextRegister = styledMUI(Typography)({
  textAlign: 'center',
});

export const ContainerProgressBar = styled(Box).attrs({
  margin: '26px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 15px 0px 15px 0px !important;
  }
`;

export const CopyRigthContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    margin-top: 64px !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: 24px !important;
  }
`;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})``;

export const Card = styled(Box).attrs((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: props.justifyContent || 'flex-start',
  alignItems: 'center',
  padding: '72px 96px',
}))`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 80%;
  min-height: 400px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 50% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    min-height: 550px;
    width: calc(100% - 32px) !important;
    padding: 0 !important;
    box-shadow: none;
  }
`;
