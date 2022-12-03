import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, FormHelperText, InputAdornment, IconButton } from '@mui/material';
import Copyright from '../../../../components/copyright';
import useRegisterProfessor from '../hooks/useRegisterProfessor';
import {
  Container,
  StyledForm,
  FormContainer,
  TypographyRegister,
  ContainerRegisterOption,
  CancelRegister,
  RegisterButton,
  CopyrigthContainer,
  StyledFormTextField,
} from './styles';
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../../../utils/validateFields';

const FormRegister = () => {
  const {
    confPassword,
    confPasswordError,
    email,
    emailError,
    name,
    nameError,
    password,
    passwordError,
    showPassword,
    setNameError,
    setConfPasswordError,
    setEmailError,
    setPasswordError,
    handleCancelClick,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfPasswordChange,
    handleContinueClick,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useRegisterProfessor();

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

  const ConfPasswordError = () => {
    if (!!confPasswordError)
      return <FormHelperText error>{confPasswordError}</FormHelperText>;

    return <></>;
  };

  return (
    <Container>
      <FormContainer>
        <TypographyRegister variant="h4">
          Cadastro de Professor
        </TypographyRegister>
        <TypographyRegister variant="body1">
          Preencha os campos abaixo para iniciar o seu cadastro.
        </TypographyRegister>

        <StyledForm onSubmit={handleContinueClick}>
          <Box>
            <StyledFormTextField
              error={!!nameError}
              value={name}
              id="name"
              name="name"
              onChange={handleNameChange}
              onBlur={() => setNameError(validateName(name))}
              type="text"
              placeholder="Nome Completo* "
            />
            <NameError />
          </Box>

          <Box>
            <StyledFormTextField
              error={!!emailError}
              value={email}
              id="email"
              name="email"
              onChange={handleEmailChange}
              onBlur={() => setEmailError(validateEmail(email))}
              type="text"
              placeholder="E-mail do Icomp* "
            />
            <EmailError />
          </Box>

          <Box>
            <StyledFormTextField
              error={!!passwordError}
              value={password}
              id="password"
              name="password"
              onChange={handlePasswordChange}
              onBlur={() => setPasswordError(validatePassword(name, password))}
              type="password"
              placeholder="Crie sua senha* "
            />
            <PasswordError />
          </Box>

          <Box>
            <StyledFormTextField
              error={!!confPasswordError}
              value={confPassword}
              id="confirm_password"
              name="confirm_password"
              onChange={handleConfPasswordChange}
              onBlur={() =>
                setConfPasswordError(
                  validateConfirmPassword(password, confPassword)
                )
              }
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirme sua senha* "
            />
            <ConfPasswordError />
          </Box>

          <ContainerRegisterOption>
            <CancelRegister variant="text" onClick={handleCancelClick}>
              Cancelar cadastro
            </CancelRegister>
            <RegisterButton type="submit">Continuar</RegisterButton>
          </ContainerRegisterOption>
        </StyledForm>
      </FormContainer>
      <CopyrigthContainer>
        <Copyright />
      </CopyrigthContainer>
    </Container>
  );
};

export default FormRegister;
