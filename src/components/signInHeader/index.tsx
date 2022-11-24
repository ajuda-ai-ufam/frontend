import { Typography } from '@material-ui/core';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from '../../assets/header-logo.svg';
import { SCREENS } from '../../utils/screens';
import {
  Container,
  LoginButton,
  LoginContainer,
  LogoContainer,
  RegisterTypographyContainer,
} from './styles';

const SignInHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <Link href={SCREENS.LOGIN}>
          <img src={HeaderLogo} alt={'Super Monitoria'} />
        </Link>
      </LogoContainer>

      <LoginContainer>
        <RegisterTypographyContainer>
          <Typography variant={'body1'}>Já possui cadastro?</Typography>
        </RegisterTypographyContainer>
        <LoginButton onClick={() => navigate(SCREENS.LOGIN)}>
          Faça seu login
        </LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default SignInHeader;
