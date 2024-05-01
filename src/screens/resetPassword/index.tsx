import {
  Container,
  Bottom,
  MiddleContainer,
  Card,
  SuccessContentContainer,
  SuccessTypographyContainer,
  LoginButton,
  TopContainer,
} from './styles';
import useResetPassword from './hooks';
import { Typography, Link } from '@mui/material';
import CreateNewPassword from './components/createNewPassword';
import InvalidLink from './components/invalidLink';
import LoadingAnimation from '../../components/loadingAnimation';
import CheckedAnimation from '../../components/checkedAnimation';
import HeaderLogo from '../../assets/header-logo.svg';
import { SCREENS } from '../../utils/screens';

const ResetPassword = () => {
  const {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    showPassword,
    showConfirmPassword,
    isValidaToken,
    decodedToken,
    isLoading,
    isSuccess,
    setPasswordError,
    setConfirmPasswordError,
    handleShowConfirmPasswordClick,
    handleShowPasswordClick,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleResetPassword,
    handleToLoginClick,
    handleToResetPasswordClick,
  } = useResetPassword();

  const CardContent = () => {
    if (isLoading) {
      return (
        <Card>
          <LoadingAnimation />
        </Card>
      );
    }

    if (isSuccess) {
      return (
        <Card>
          <SuccessContentContainer>
            <CheckedAnimation />
            <SuccessTypographyContainer>
              <Typography variant="h4">Tudo certo!</Typography>
              <Typography variant="body1">
                Sua senha foi alterada com sucesso, volte ao login e acesse a
                conta com sua nova senha
              </Typography>
            </SuccessTypographyContainer>
          </SuccessContentContainer>
          <LoginButton onClick={handleToLoginClick}>
            Voltar ao login
          </LoginButton>
        </Card>
      );
    }

    if (isValidaToken) {
      return (
        <CreateNewPassword
          password={password}
          confirmPassword={confirmPassword}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          decodedToken={decodedToken}
          handleShowConfirmPasswordClick={handleShowConfirmPasswordClick}
          handleShowPasswordClick={handleShowPasswordClick}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          setPasswordError={setPasswordError}
          setConfirmPasswordError={setConfirmPasswordError}
          handleResetPassword={handleResetPassword}
        />
      );
    }

    return (
      <InvalidLink handleToResetPasswordClick={handleToResetPasswordClick} />
    );
  };
  return (
    <Container>
      <TopContainer>
        <Link href={SCREENS.LOGIN}>
          <img src={HeaderLogo} alt={'Super Monitoria'} />
        </Link>
      </TopContainer>
      <MiddleContainer>{CardContent()}</MiddleContainer>
      <Bottom>
        <Typography variant="caption">Super Monitoria, 2024</Typography>
      </Bottom>
    </Container>
  );
};

export default ResetPassword;
