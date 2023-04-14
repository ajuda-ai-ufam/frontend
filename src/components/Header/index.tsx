import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from '../../assets/header-logo.svg';
import { SCREENS } from '../../utils/screens';
import useHeader from './hooks/useHeader';
import {
  Container,
  LoginButton,
  LoginContainer,
  LogoContainer,
  RegisterTypographyContainer,
} from './styles';

type Props = {
  showLogin: boolean;
};

const Header = ({ showLogin }: Props) => {
  const navigate = useNavigate();
  const { handleLogoClick } = useHeader();

  return (
    <Container>
      <LogoContainer>
        <Link href={handleLogoClick()}>
          <img src={HeaderLogo} alt={'Super Monitoria'} />
        </Link>
      </LogoContainer>

      <LoginContainer visibility={showLogin ? 'visible' : 'hidden'}>
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

export default Header;
