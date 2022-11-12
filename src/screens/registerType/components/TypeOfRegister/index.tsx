import { Typography } from '@mui/material';
import HeaderLogo from '../../../../assets/header-logo.svg';
import BottomArea from '../../../../components/bottomArea';
import testId from '../../../../utils/testId';
import useSelectRegisterType from '../../hooks/useSelectRegisterType';
import SelectRegisterType from '../SelectRegisterType';
import {
  Container,
  ContainerLogin,
  ContainerLoginText,
  ContainerLogo,
  ContainerMiddle,
  ContainerUp,
  LoginButton,
} from './styles';

const TypeOfRegister = () => {
  const { handleClickLogin } = useSelectRegisterType();

  return (
    <Container>
      <ContainerUp>
        <ContainerLogo>
          <img src={HeaderLogo} />
        </ContainerLogo>

        <ContainerLogin>
          <ContainerLoginText>
            <Typography>Já possui cadastro?</Typography>
          </ContainerLoginText>
          <LoginButton
            id={testId.typeRegister.loginButton}
            onClick={handleClickLogin}
          >
            Faça seu login
          </LoginButton>
        </ContainerLogin>
      </ContainerUp>

      <ContainerMiddle>
        <SelectRegisterType />
      </ContainerMiddle>

      <BottomArea />
    </Container>
  );
};

export default TypeOfRegister;
