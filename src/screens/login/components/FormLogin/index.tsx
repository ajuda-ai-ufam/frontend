import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
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
import { SCREENS } from '../../../../utils/screens';
import testId from '../../../../utils/testId';
import useLogin from '../../hooks/useLogin';
import {
  Container,
  ContainerBottom,
  ContainerLogin,
  ContainerUp,
  ForgotPasswordLink,
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
    error,
    emailError,
    passwordError,
    password,
    showPassword,
  } = useLogin();

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

  return (
    <Container>
      <ContainerUp>
        <TypographyLogin component="h1">Faça seu login</TypographyLogin>
        <TypographyCredentials component="h5">
          Insira suas credenciais abaixo para continuar
        </TypographyCredentials>

        <StyledForm id={testId.login.form} onSubmit={handleLoginClick}>
          <Box sx={{ width: '100%' }}>
            <TextField
              error={!!emailError || !!error}
              value={email}
              id="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="E-mail IComp"
              startAdornment={
                <InputAdornment position="start">
                  {!email ? <PersonOutlineOutlinedIcon /> : <PersonIcon />}
                </InputAdornment>
              }
              sx={{ mt: 4, width: '100%' }}
            />
            <EmailError />
          </Box>

          <Box sx={{ mt: '16px', width: '100%' }}>
            <TextField
              error={!!passwordError || !!error}
              type={showPassword ? 'text' : 'password'}
              value={password}
              id="password"
              name="password"
              placeholder="Senha"
              onChange={handlePasswordChange}
              startAdornment={
                <InputAdornment position="start">
                  {!password ? <VpnKeyOutlinedIcon /> : <VpnKeyIcon />}
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    id={testId.login.showPasswordButton}
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
            <ForgotPasswordLink href={SCREENS.REGISTER}>
              Esqueci minha senha
            </ForgotPasswordLink>
            <LoginButton type="submit" loading={isLoading}>
              Entrar
            </LoginButton>
          </ContainerLogin>
        </StyledForm>
      </ContainerUp>

      <ContainerBottom>
        <Typography align="center">Ainda não tem uma conta?&nbsp;</Typography>
        <NavLink to={SCREENS.REGISTER}>
          <Typography color={'secondary'}>Cadastre-se</Typography>
        </NavLink>
      </ContainerBottom>
    </Container>
  );
};

export default FormLogin;
