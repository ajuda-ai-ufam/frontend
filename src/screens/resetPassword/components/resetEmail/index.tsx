import { validateEmail } from '../../../../utils/validateFields';
import {
  CardContainer,
  ContentContainer,
  TypographyContainer,
  TypographyHeader,
  TypographySub,
  TypographySubContainer,
  InputContainer,
  EmailTextFieldContainer,
  EmailTextField,
  EmailError,
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
      return <EmailError error>{emailError}</EmailError>;
    }
    return <></>;
  };
  return (
    <CardContainer>
      <ContentContainer>
        <TypographyContainer>
          <TypographySubContainer>
            <TypographyHeader>Recuperação de Senha</TypographyHeader>
            <TypographySub>
              Digite abaixo seu e-mail para iniciarmos o processo de recuperação
              de senha.
            </TypographySub>
          </TypographySubContainer>
        </TypographyContainer>
        <InputContainer>
          <EmailTextFieldContainer>
            <EmailTextField
              name={email}
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
            <ConfirmButton onClick={handleConfirmEmailClick}>
              Confirmar E-mail
            </ConfirmButton>
          </ButtonContainer>
        </InputContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default ResetEmail;
