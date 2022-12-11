import SignInHeader from '../../components/signInHeader';
import Copyright from '../../components/copyright';
import {
  Container,
  CardContainer,
  CopyrightContainer,
  OutsideContainer,
} from './styles';
import FormRegister from './components/FormRegister';

const RegisterProfessor = () => {
  return (
    <OutsideContainer>
      <Container>
        <SignInHeader />
        <CardContainer>
          <FormRegister />
        </CardContainer>
      </Container>
      <CopyrightContainer>
        <Copyright />
      </CopyrightContainer>
    </OutsideContainer>
  );
};

export default RegisterProfessor;
