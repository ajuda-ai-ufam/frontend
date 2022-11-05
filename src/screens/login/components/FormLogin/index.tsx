import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../../components/button';
import useLogin from '../../hooks/useLogin';
import {
  Container,
  ContainerBottom,
  ContainerLogin,
  ContainerUp,
} from './styles';

const FormLogin = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    email,
    password,
    showPassword,
  } = useLogin();

  return (
    <Container>
      <ContainerUp>
        <Typography
          component="h1"
          variant="h5"
          fontWeight={600}
          fontSize="36px"
          lineHeight="52px"
          align="center"
          color="#2D2D2C"
          sx={{ m: 2 }}
        >
          Faça seu login
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          fontWeight={400}
          fontSize="16px"
          lineHeight="19.36px"
          align="center"
          color="#2D2D2C"
        >
          Insira suas credenciais abaixo para continuar
        </Typography>

        <OutlinedInput
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
          sx={{ mt: 4, width: '60ch' }}
        />

        <OutlinedInput
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
          sx={{ mt: 2, width: '60ch' }}
        />

        <ContainerLogin sx={{ m: 4 }}>
          <Typography color="primary" align="center">
            Esqueci minha senha
          </Typography>
          <Button color="primary">Entrar</Button>
        </ContainerLogin>
      </ContainerUp>

      <ContainerBottom sx={{ mt: 10 }}>
        <Typography align="center">
          Ainda não tem uma conta?
          <NavLink to="/register"> Cadastre-se</NavLink>
        </Typography>
      </ContainerBottom>
    </Container>
  );
};

export default FormLogin;
