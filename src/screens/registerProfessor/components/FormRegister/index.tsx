import { Box, FormHelperText } from '@mui/material';
import BottomArea from '../../../../components/bottomArea';
import { TextField } from '../../../../components/textField';
import useRegisterProfessor from '../hooks/useRegister';
import {
  Container,
  StyledForm,
  FormContainer,
  TypographyRegister,
  TypographyCredentials,
  ContainerRegisterOption,
  CancelRegisterLink,
  RegisterButton,
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
        <TypographyRegister>Cadastro de Professor</TypographyRegister>
        <TypographyCredentials>
          Preencha os campos abaixo para iniciar o seu cadastro.
        </TypographyCredentials>
        <StyledForm onSubmit={handleContinueClick}>
          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!nameError}
              value={name}
              id="name"
              name="name"
              onChange={handleNameChange}
              onBlur={() => setNameError(validateName(name))}
              type="text"
              placeholder="Nome Completo* "
              sx={{ mt: 4, width: '100%' }}
            />
            <NameError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!emailError}
              value={email}
              id="email"
              name="email"
              onChange={handleEmailChange}
              onBlur={() => setEmailError(validateEmail(email))}
              type="text"
              placeholder="E-mail do Icomp* "
              sx={{ mt: 4, width: '100%' }}
            />
            <EmailError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!passwordError}
              value={password}
              id="password"
              name="password"
              onChange={handlePasswordChange}
              onBlur={() => setPasswordError(validatePassword(name, password))}
              type="password"
              placeholder="Crie sua senha* "
              sx={{ mt: 4, width: '100%' }}
            />
            <PasswordError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
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
              type="password"
              placeholder="Confirme sua senha* "
              sx={{ mt: 4, width: '100%' }}
            />
            <ConfPasswordError />
          </Box>

          <ContainerRegisterOption>
            <CancelRegisterLink onClick={handleCancelClick}>
              Cancelar cadastro
            </CancelRegisterLink>
            <RegisterButton type="submit">Continuar</RegisterButton>
          </ContainerRegisterOption>
        </StyledForm>
      </FormContainer>
      <BottomArea />
    </Container>
  );
};

export default FormRegister;
