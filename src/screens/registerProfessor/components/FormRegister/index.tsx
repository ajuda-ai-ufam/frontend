import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingAnimation from '../../../../components/loadingAnimation';
import { FormHelperText, InputAdornment, IconButton } from '@mui/material';
import useRegisterProfessor from '../hooks/useRegisterProfessor';
import { TRegisterProfessorHook } from '../hooks/types';
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../../../utils/validateFields';
import {
  FormContainer,
  CardForm,
  TypographyContainer,
  TypographyTextRegister,
  StyledForm,
  StyledFormTextField,
  TextFieldContainer,
  ButtonContainer,
  CancelButton,
  ContinueButton,
  ConsentContainer,
  TypographyConsent,
  TypographyGreen,
} from '../../styles';
import useTermConsentModal from '../../../../components/termsConsentModal/hooks/useTermConsentModal';
import TermConsentModal from '../../../../components/termsConsentModal';

const FormRegister = () => {
  const {
    name,
    nameError,
    setNameError,
    handleNameChange,
    email,
    emailError,
    handleEmailChange,
    setEmailError,
    password,
    passwordError,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handlePasswordChange,
    setPasswordError,
    confPassword,
    confPasswordError,
    showConfirmPassword,
    handleClickShowConfirmPassword,
    handleConfPasswordChange,
    setConfPasswordError,
    isLoading,
    handleCancelClick,
    handleContinueClick,
  }: TRegisterProfessorHook = useRegisterProfessor();

  const { isOpen, handleOpenModal, handleCloseModal } = useTermConsentModal();

  const NameError = () => {
    if (!!nameError) return <FormHelperText error>{nameError}</FormHelperText>;

    return <></>;
  };

  const EmailError = () => {
    if (!!emailError)
      return <FormHelperText error>{emailError}</FormHelperText>;

    return <></>;
  };

  const PasswordError = () => {
    if (!!passwordError)
      return <FormHelperText error>{passwordError}</FormHelperText>;

    return <></>;
  };

  const ConfirmPasswordError = () => {
    if (!!confPasswordError)
      return <FormHelperText error>{confPasswordError}</FormHelperText>;

    return <></>;
  };

  return (
    <>
      <CardForm>
        <FormContainer>
          {!isLoading ? (
            <>
              <TypographyContainer>
                <TypographyTextRegister variant="h4">
                  Cadastro de Professor(a)
                </TypographyTextRegister>
                <TypographyTextRegister variant="body1">
                  Preencha os campos abaixo para iniciar o seu cadastro.
                </TypographyTextRegister>
              </TypographyContainer>
              <StyledForm onSubmit={handleContinueClick}>
                <TextFieldContainer>
                  <StyledFormTextField
                    value={name}
                    error={!!nameError}
                    id="name"
                    name="name"
                    placeholder="Nome Completo*"
                    onBlur={() => setNameError(validateName(name))}
                    onChange={handleNameChange}
                  />
                  <NameError />
                </TextFieldContainer>
                <TextFieldContainer>
                  <StyledFormTextField
                    value={email}
                    error={!!emailError}
                    id="email"
                    name="email"
                    placeholder="E-mail do IComp"
                    onBlur={() => setEmailError(validateEmail(email))}
                    onChange={handleEmailChange}
                  />
                  <EmailError />
                </TextFieldContainer>
                <TextFieldContainer>
                  <StyledFormTextField
                    type={showPassword ? 'text' : 'password'}
                    onBlur={() =>
                      setPasswordError(validatePassword(name, password))
                    }
                    value={password}
                    error={!!passwordError}
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder="Crie sua senha*"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <PasswordError />
                </TextFieldContainer>
                <TextFieldContainer>
                  <StyledFormTextField
                    type={showConfirmPassword ? 'text' : 'password'}
                    onBlur={() =>
                      setConfPasswordError(
                        validateConfirmPassword(password, confPassword)
                      )
                    }
                    value={confPassword}
                    error={!!confPasswordError}
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleConfPasswordChange}
                    placeholder="Confirme sua senha*"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <ConfirmPasswordError />
                </TextFieldContainer>
                <ConsentContainer>
                  <TypographyConsent>
                    Ao clicar em “Finalizar”, você autoriza o recebimento de
                    notificações pelo e-mail IComp cadastrado na plataforma, bem
                    como Aceito os{' '}
                    <TypographyGreen onClick={handleOpenModal}>
                      Termos de Consentimentos de Coleta de Dados e Política de
                      Privacidade.
                    </TypographyGreen>
                  </TypographyConsent>
                </ConsentContainer>
                <ButtonContainer>
                  <CancelButton variant="text" onClick={handleCancelClick}>
                    Cancelar cadastro
                  </CancelButton>
                  <ContinueButton type="submit">Continuar</ContinueButton>
                </ButtonContainer>
              </StyledForm>

              <TermConsentModal
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
              />
            </>
          ) : (
            <LoadingAnimation />
          )}
        </FormContainer>
      </CardForm>
    </>
  );
};

export default FormRegister;
