import { Typography } from '@mui/material';
import HeaderLogo from '../../../../assets/header-logo.svg';
import LoginPatternBottomEnd from '../../../../assets/login-pattern-be-small.svg';
import LoginPatternBottomStart from '../../../../assets/login-pattern-bs-small.svg';
import { Button } from '../../../../components/button';
import Copyright from '../../../../components/copyright';
import useLogin from '../../hooks/useLogin';
import FormLogin from '../FormLogin';
import {
  Container,
  ContainerBottom,
  ContainerLogo,
  ContainerMiddle,
  ContainerRegister,
  ContainerUp,
  PatternBox,
} from './styles';

const WelcomeArea = () => {
  const { handleRegisterClick } = useLogin();

  return (
    <Container>
      <ContainerUp>
        <ContainerLogo>
          <img src={HeaderLogo} />
        </ContainerLogo>

        <ContainerRegister>
          <Typography>Não é cadastrado?</Typography>
          <Button
            color="secondary"
            sx={{ ml: 2 }}
            onClick={handleRegisterClick}
          >
            Cadastre-se
          </Button>
        </ContainerRegister>
      </ContainerUp>

      <ContainerMiddle>
        <FormLogin />
      </ContainerMiddle>

      <ContainerBottom>
        <PatternBox>
          <img src={LoginPatternBottomEnd} />
        </PatternBox>

        <Copyright mb={3} />

        <PatternBox>
          <img src={LoginPatternBottomStart} />
        </PatternBox>
      </ContainerBottom>
    </Container>
  );
};

export default WelcomeArea;
