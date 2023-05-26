import {
  Container,
  Bottom,
  TypographyCaption,
  CardContainer,
  LoadingContainer,
  SuccessContainer,
  SuccessButtonContainer,
  SuccessContentContainer,
  SuccessTypographyContainer,
  SuccessTypographyHeader,
  SuccessTypographySub,
  LoginButton,
} from './styles';
import RegisterHeader from '../../components/registerHeader';
import ResetEmail from './components/resetEmail';
import LoadingAnimation from '../../components/loadingAnimation';
import CheckedAnimation from '../../components/checkedAnimation';
import useResetPasswordEmail from './hooks/useResetPasswordEmail';

const ResetPasswordEmail = () => {
  const {
    email,
    emailError,
    isLoading,
    isSuccess,
    setEmailError,
    handleEmailChange,
    handleConfirmEmailClick,
    handleLoginClick,
  } = useResetPasswordEmail();

  const CardContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      );
    }

    if (isSuccess) {
      return (
        <SuccessContainer>
          <SuccessContentContainer>
            <CheckedAnimation />
            <SuccessTypographyContainer>
              <SuccessTypographyHeader>Tudo certo!</SuccessTypographyHeader>
              <SuccessTypographySub>
                Em instantes você receberá um e-mail com o link de recuperação
                de senha
              </SuccessTypographySub>
            </SuccessTypographyContainer>
            <SuccessButtonContainer>
              <LoginButton onClick={handleLoginClick}>
                Voltar ao login
              </LoginButton>
            </SuccessButtonContainer>
          </SuccessContentContainer>
        </SuccessContainer>
      );
    }
    return (
      <ResetEmail
        email={email}
        emailError={emailError}
        handleEmailChange={handleEmailChange}
        handleConfirmEmailClick={handleConfirmEmailClick}
        setEmailError={setEmailError}
        handleLoginClick={handleLoginClick}
      />
    );
  };

  return (
    <Container>
      <RegisterHeader />
      <CardContainer>{CardContent()}</CardContainer>
      <Bottom>
        <TypographyCaption>Super Monitoria, 2023</TypographyCaption>
      </Bottom>
    </Container>
  );
};

export default ResetPasswordEmail;
