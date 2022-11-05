import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { TextField } from '../../../../components/textField';
import useLogin from '../../hooks/useLogin';
import {
  Container,
  ContainerBottom,
  ContainerLogin,
  ContainerUp,
  ForgotPasswordButton,
  LoginButton,
  StyledForm,
  TypographyCredentials,
  TypographyLogin,
} from './styles';

const FormLogin = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleLoginClick,
    email,
    isLoading,
    isInvalidEmail,
    isInvalidPassword,
    error,
    password,
    showPassword,
  } = useLogin();

  const EmailError = () => {
    if (isInvalidEmail)
      return <FormHelperText error>E-mail inválido.</FormHelperText>;

    return <></>;
  };

  const PasswordError = () => {
    if (isInvalidPassword)
      return <FormHelperText error>Informe uma senha.</FormHelperText>;

    if (error)
      return (
        <FormHelperText error>
          E-mail ou senha incorreto. Tente novamente.
        </FormHelperText>
      );

    return <></>;
  };

  return (
    <Container>
      <ContainerUp>
        <TypographyLogin component="h1">Faça seu login</TypographyLogin>
        <TypographyCredentials component="h5">
          Insira suas credenciais abaixo para continuar
        </TypographyCredentials>

        <StyledForm onSubmit={handleLoginClick}>
          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!error || isInvalidEmail}
              value={email}
              id="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="E-mail IComp"
              startAdornment={
                <InputAdornment position="start">
                  <PermIdentityOutlinedIcon />
                </InputAdornment>
              }
              sx={{ mt: 4, width: '100%' }}
            />
            <EmailError />
          </Box>

          <Box sx={{ mt: '16px', width: '100%' }}>
            <TextField
              error={!!error || isInvalidPassword}
              type={showPassword ? 'text' : 'password'}
              value={password}
              id="password"
              name="password"
              placeholder="Senha"
              onChange={handlePasswordChange}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyOutlinedIcon />
                </InputAdornment>
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
              sx={{ width: '100%' }}
            />
            <PasswordError />
          </Box>

          <ContainerLogin sx={{ m: 4 }}>
            <ForgotPasswordButton>Esqueci minha senha</ForgotPasswordButton>
            <LoginButton type="submit" loading={isLoading}>
              Entrar
            </LoginButton>
          </ContainerLogin>
        </StyledForm>
      </ContainerUp>

      <ContainerBottom>
        <Typography align="center">
          Ainda não tem uma conta?
          <NavLink to="/register"> Cadastre-se</NavLink>
        </Typography>
      </ContainerBottom>
    </Container>
  );
};

export default FormLogin;
