import { Typography, FormHelperText } from '@mui/material';
import { validateEmail } from '../../../../utils/validateFields';
import {
  ContentContainer,
  TypographyContainer,
  InputContainer,
  EmailTextFieldContainer,
  EmailTextField,
  ButtonContainer,
  ConfirmButton,
  ReturnButton,
} from './styles';

type Props = {
  email: string;
  emailError: string;
  setEmailError(email: string): void;
  handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleConfirmEmailClick(): void;
  handleLoginClick(): void;
};

const ResetEmail = ({
  email,
  emailError,
  setEmailError,
  handleEmailChange,
  handleConfirmEmailClick,
  handleLoginClick,
}: Props) => {
  const EmailErrorHelper = () => {
    if (emailError) {
      return (
        <FormHelperText error sx={{ paddingLeft: '16px' }}>
          {emailError}
        </FormHelperText>
      );
    }
    return <></>;
  };
  return (
    <ContentContainer>
      <TypographyContainer>
        <Typography variant="h4">Recuperação de Senha</Typography>
        <Typography variant="body1">
          Digite abaixo seu e-mail para iniciarmos o processo de recuperação de
          senha.
        </Typography>
      </TypographyContainer>
      <InputContainer onSubmit={handleConfirmEmailClick}>
        <EmailTextFieldContainer>
          <EmailTextField
            name="email"
            value={email}
            type="email"
            placeholder="E-mail"
            error={!!emailError}
            onChange={handleEmailChange}
            onBlur={() => setEmailError(validateEmail(email))}
          />
          <EmailErrorHelper />
        </EmailTextFieldContainer>
        <ButtonContainer>
          <ReturnButton onClick={handleLoginClick}>
            Voltar para o login
          </ReturnButton>
          <ConfirmButton disabled={!!validateEmail(email)} type="submit">
            Confirmar E-mail
          </ConfirmButton>
        </ButtonContainer>
      </InputContainer>
    </ContentContainer>
  );
};

export default ResetEmail;
