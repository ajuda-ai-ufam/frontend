import Header from '../../components/Header';
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
        <Header showLogin={true} />
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
