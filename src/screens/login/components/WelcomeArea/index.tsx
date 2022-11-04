import { Typography } from '@mui/material';
import { ButtonSecondary } from '../../../../components/button';
import Copyright from '../../../../components/copyright';
import useLogin from '../../hooks/useLogin';
import FormLogin from '../FormLogin';
import {
  Container,
  ContainerBottom,
  ContainerMiddle,
  ContainerUp,
} from './styles';

const WelcomeArea = () => {
  const { handleRegisterClick } = useLogin();

  return (
    <Container>
      <ContainerUp>
        <Typography sx={{ mt: 4, mr: 3 }}>Não é cadastrado?</Typography>
        <ButtonSecondary sx={{ mt: 4, mr: 5 }} onClick={handleRegisterClick}>
          Cadastre-se
        </ButtonSecondary>
      </ContainerUp>

      <ContainerMiddle>
        <FormLogin />
      </ContainerMiddle>

      <ContainerBottom>
        <Copyright mb={3} />
      </ContainerBottom>
    </Container>
  );
};

export default WelcomeArea;
