import { Typography } from '@mui/material';
import HeaderLogo from '../../../../assets/header-logo.svg';
import BottomArea from '../../../../components/bottomArea';
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
  SignUpButton,
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
            <Typography>Não é cadastrado(a)?</Typography>
          </ContainerRegisterText>
          <SignUpButton
            id={testId.login.registerButton}
            color="secondary"
            onClick={handleRegisterClick}
          >
            Cadastre-se
          </SignUpButton>
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
