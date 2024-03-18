import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import theme from '../../utils/theme';
import useExternalMonitoring from './hooks/useExternalMonitoring';
import ProfessorInput from './components/professorInput';
import {
  Container,
  HeaderTypography,
  Card,
  TypographyContainer,
  SubTypography,
  InputContainer,
  StyledTextField,
  StyledTextFieldContainer,
  DateFieldsContainer,
} from './styles';
import {
  Autocomplete,
  Box,
  CircularProgress,
  FormHelperText,
  MenuItem,
  Select,
  TextField as TextFieldMUI,
  Typography,
  useMediaQuery,
} from '@mui/material';
import DateInput from './components/dateInput';
import CourseInput from './components/courseInput';
import SubjectInput from './components/subjectInput';

const ExternalMonitoring = () => {
  const {
    allCourses,
    listSubject,
    listProfessors,
    selectedCourse,
    selectedSubject,
    selectedProfessor,
    handleCourseValueChange,
    handleSubjectValueChange,
    handleProfessorValueChange,
  } = useExternalMonitoring();

  return (
    <ContainerWithSidebar
      selectedSidebarItem={SidebarItemEnum.EXTERNAL_MONITORING}
    >
      <Container>
        <Card>
          <TypographyContainer>
            <HeaderTypography>Registro de Monitoria Externa</HeaderTypography>
            <SubTypography>
              Este formulário é destinado para o registro de atendimentos
              realizados fora do sistema Super Monitoria. Complete as
              informações abaixo para registrar a monitoria realizada.
            </SubTypography>
          </TypographyContainer>
          <InputContainer>
            <StyledTextFieldContainer>
              <StyledTextField
                placeholder="Nome ou e-mail do aluno(a)"
                value={''}
                onChange={() => console.log('A')}
              />
            </StyledTextFieldContainer>
            <CourseInput
              allCourses={allCourses}
              handleCourseValueChange={handleCourseValueChange}
              selectedCourse={selectedCourse}
            />
            <SubjectInput
              handleSubjectValueChange={handleSubjectValueChange}
              isCourseSelected={!selectedCourse}
              listSubject={listSubject ? listSubject : null}
              selectedSubject={selectedSubject}
            />
            <ProfessorInput
              isSubjectSelected={!selectedSubject}
              professors={listProfessors ? listProfessors : null}
              selectedProfessor={selectedProfessor}
              handleProfessorValueChange={handleProfessorValueChange}
            />
          </InputContainer>
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default ExternalMonitoring;
