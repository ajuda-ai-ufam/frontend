import {
  ContainerUp,
  ContainerLogo,
  ContainerRegister,
  ContainerRegisterText,
  SignUpButton,
  TypographyRegister,
} from './styles';
import HeaderLogo from '../../../../assets/header-logo.svg';
import { Link } from '@mui/material';
import { SCREENS } from '../../../../utils/screens';
import { useNavigate } from 'react-router-dom';

const RegisterHeader = () => {
  const navigate = useNavigate();
  return (
    <ContainerUp>
      <ContainerLogo>
        <Link href={SCREENS.LOGIN}>
          <img src={HeaderLogo} alt={'Super Monitoria'} />
        </Link>
      </ContainerLogo>

      <ContainerRegister>
        <ContainerRegisterText>
          <TypographyRegister>Não é cadastrado(a)?</TypographyRegister>
        </ContainerRegisterText>
        <SignUpButton onClick={() => navigate(SCREENS.REGISTER)}>
          Cadastre-se
        </SignUpButton>
      </ContainerRegister>
    </ContainerUp>
  );
};

export default RegisterHeader;
