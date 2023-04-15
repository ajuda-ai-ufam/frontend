import Header from '../../components/header';
import SuperMonitoria from '../../components/superMonitoria';
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
        <SuperMonitoria />
      </CopyrightContainer>
    </OutsideContainer>
  );
};

export default RegisterProfessor;
