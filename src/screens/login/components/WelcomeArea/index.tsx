import { Typography } from '@mui/material';
import HeaderLogo from '../../../../assets/header-logo.svg';
import BottomArea from '../../../../components/bottomArea';
import { Button } from '../../../../components/button';
import testId from '../../../../utils/testId';
import useLogin from '../../hooks/useLogin';
import FormLogin from '../FormLogin';
import {
  Container,
  ContainerLogo,
  ContainerMiddle,
  ContainerRegister,
  ContainerRegisterText,
  ContainerUp,
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
          <ContainerRegisterText>
            <Typography>Não é cadastrado?</Typography>
          </ContainerRegisterText>
          <Button
            id={testId.login.registerButton}
            color="secondary"
            onClick={handleRegisterClick}
          >
            Cadastre-se
          </Button>
        </ContainerRegister>
      </ContainerUp>

      <ContainerMiddle>
        <FormLogin />
      </ContainerMiddle>

      <BottomArea />
    </Container>
  );
};

export default WelcomeArea;
