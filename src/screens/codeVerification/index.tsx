import { FormHelperText, Typography } from '@mui/material';
import Copyright from '../../components/copyright';
import SignInHeader from '../../components/signInHeader';
import EmailAnimation from './components/EmailAnimation';
import LoadingAnimation from '../../components/loadingAnimation';
import useCodeVerification from './hooks/useCodeVerification';
import {
  ActionsContainer,
  Card,
  CardContainer,
  CodeFormButton,
  CodeTextField,
  Container,
  CopyRigthContainer,
} from './styles';
import ConfirmedEmail from './components/ConfirmedEmail';

const CodeVerificationScreen = () => {
  const {
    code,
    errorMessage,
    isGenerateCodeLoading,
    isSuccess,
    isVerifyCodeLoading,
    timeToResendCode,
    handleCodeChange,
    handleResendCodeClick,
    handleSubmit,
  } = useCodeVerification();

  const InvalidCodeError = () => {
    if (!!errorMessage)
      return <FormHelperText error>{errorMessage}</FormHelperText>;

    return <></>;
  };

  const CardContent = () => {
    if (isVerifyCodeLoading) return <LoadingAnimation />;

    if (isSuccess) return <ConfirmedEmail />;

    return (
      <>
        <EmailAnimation />
        <Typography sx={{ margin: '24px 0 16px 0' }} variant={'h3'}>
          Quase lá!
        </Typography>

        <Typography textAlign={'center'} variant={'body1'}>
          Te enviamos um código de confirmação de e-mail. Para concluir seu
          cadastro, digite o código recebido abaixo.
        </Typography>

        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <CodeTextField
            key="code"
            error={!!errorMessage}
            value={code}
            onChange={handleCodeChange}
          />
          <InvalidCodeError />

          <ActionsContainer>
            <CodeFormButton type={'submit'}>Concluir o cadastro</CodeFormButton>
            <CodeFormButton
              disabled={!!timeToResendCode}
              loading={isGenerateCodeLoading}
              variant={'outlined'}
              onClick={handleResendCodeClick}
            >
              Enviar código novamente{' '}
              {timeToResendCode ? `(${timeToResendCode}s)` : ''}
            </CodeFormButton>
          </ActionsContainer>
        </form>
      </>
    );
  };

  return (
    <Container>
      <SignInHeader />

      <CardContainer>
        <Card>{CardContent()}</Card>
      </CardContainer>

      <CopyRigthContainer>
        <Copyright />
      </CopyRigthContainer>
    </Container>
  );
};

export default CodeVerificationScreen;
