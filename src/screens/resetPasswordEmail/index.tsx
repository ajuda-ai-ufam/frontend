import {
  Container,
  Bottom,
  MiddleContainer,
  SuccessCardContainer,
  SuccessContentContainer,
  SuccessTypographyContainer,
  LoginButton,
  CardContainer,
} from './styles';
import RegisterHeader from './components/registerHeader';
import ResetEmail from './components/resetEmail';
import LoadingAnimation from '../../components/loadingAnimation';
import CheckedAnimation from '../../components/checkedAnimation';
import useResetPasswordEmail from './hooks/useResetPasswordEmail';
import { Typography } from '@mui/material';

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
        <CardContainer>
          <LoadingAnimation />
        </CardContainer>
      );
    }

    if (isSuccess) {
      return (
        <SuccessCardContainer>
          <SuccessContentContainer>
            <CheckedAnimation />
            <SuccessTypographyContainer>
              <Typography variant="h4">Tudo certo!</Typography>
              <Typography variant="body1">
                Em instantes você receberá um e-mail com o link de recuperação
                de senha
              </Typography>
            </SuccessTypographyContainer>
          </SuccessContentContainer>
          <LoginButton onClick={handleLoginClick}>Voltar ao login</LoginButton>
        </SuccessCardContainer>
      );
    }
    return (
      <CardContainer>
        <ResetEmail
          email={email}
          emailError={emailError}
          handleEmailChange={handleEmailChange}
          handleConfirmEmailClick={handleConfirmEmailClick}
          setEmailError={setEmailError}
          handleLoginClick={handleLoginClick}
        />
      </CardContainer>
    );
  };

  return (
    <Container>
      <RegisterHeader />
      <MiddleContainer>{CardContent()}</MiddleContainer>
      <Bottom>
        <Typography variant="caption">Super Monitoria, 2024</Typography>
      </Bottom>
    </Container>
  );
};

export default ResetPasswordEmail;
