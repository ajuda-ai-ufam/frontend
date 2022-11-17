import { Box, Typography, FormHelperText } from '@mui/material';
import BottomArea from '../../../../components/bottomArea';
import { TextField } from '../../../../components/textField';
import { SCREENS } from '../../../../utils/screens';
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

const FormRegister = () => {
  const {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfPasswordChange,
    handleLoginClick,
    handleContinueClick,
    name,
    email,
    password,
    confPassword,
    error,
    isLoading,
    nameError,
    emailError,
    passwordError,
    confPasswordError,
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
              error={!!nameError || !!error}
              value={name}
              id="name"
              name="name"
              onChange={handleNameChange}
              type="text"
              placeholder="Nome Completo* "
              sx={{ mt: 4, width: '100%' }}
            />
            <NameError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!emailError || !!error}
              value={email}
              id="email"
              name="email"
              onChange={handleEmailChange}
              type="text"
              placeholder="E-mail do Icomp* "
              sx={{ mt: 4, width: '100%' }}
            />
            <EmailError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!passwordError || !!error}
              value={password}
              id="password"
              name="password"
              onChange={handlePasswordChange}
              type="password"
              placeholder="Crie sua senha* "
              sx={{ mt: 4, width: '100%' }}
            />
            <PasswordError />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!confPasswordError || !!error}
              value={confPassword}
              id="confirm_password"
              name="confirm_password"
              onChange={handleConfPasswordChange}
              type="password"
              placeholder="Confirme sua senha* "
              sx={{ mt: 4, width: '100%' }}
            />
            <ConfPasswordError />
          </Box>

          <ContainerRegisterOption>
            <CancelRegisterLink href={SCREENS.HOME}>
              Cancelar cadastro
            </CancelRegisterLink>
            <RegisterButton type="submit" loading={isLoading}>
              Continuar
            </RegisterButton>
          </ContainerRegisterOption>
        </StyledForm>
      </FormContainer>
      <BottomArea />
    </Container>
  );
};

export default FormRegister;
