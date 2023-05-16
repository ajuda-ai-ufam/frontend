import testId from '../../../../utils/testId';
import useSelectRegisterType from '../../hooks/useSelectRegisterType';
import {
  Container,
  ContainerBottom,
  ContainerDisclaimer,
  ContainerUp,
  ProfessorButton,
  StudentButton,
  TypographyDisclaimer,
  TypographyStartRegister,
} from './styles';

const SelectRegisterType = () => {
  const { handleClickProfessor, handleClickStudent } = useSelectRegisterType();

  return (
    <Container>
      <ContainerUp>
        <TypographyStartRegister variant="h3">
          Vamos começar seu cadastro!
        </TypographyStartRegister>

        <ContainerDisclaimer>
          <TypographyDisclaimer variant="body1">
            Mas antes preciso que você selecione o tipo de perfil que você
            deseja utilizar
          </TypographyDisclaimer>
        </ContainerDisclaimer>
      </ContainerUp>

      <ContainerBottom>
        <ProfessorButton
          id={testId.typeRegister.iAmProfessorButton}
          onClick={handleClickProfessor}
        >
          Sou Professor(a)
        </ProfessorButton>
        <StudentButton
          id={testId.typeRegister.iAmStudentButton}
          onClick={handleClickStudent}
        >
          Sou Aluno(a)
        </StudentButton>
      </ContainerBottom>
    </Container>
  );
};

export default SelectRegisterType;
