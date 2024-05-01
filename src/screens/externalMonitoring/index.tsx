import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import useExternalMonitoring from './hooks/useExternalMonitoring';
import ProfessorInput from './components/professorInput';
import {
  Container,
  HeaderTypography,
  Card,
  TypographyContainer,
  SubTypography,
  InputContainer,
  ButtonsContainer,
  StyledButton,
} from './styles';
import {
  Autocomplete,
  CircularProgress,
  FormHelperText,
  TextField as TextFieldMUI,
  useMediaQuery,
} from '@mui/material';
import DateInput from './components/dateInput';
import CourseInput from './components/courseInput';
import SubjectInput from './components/subjectInput';
import StudentInput from './components/studentInput';
import {
  DescriptionContainer,
  DescriptionTextField,
} from '../../components/ScheduleHelpModal/components/FormScheduleModalContent/styles';
import theme from '../../utils/theme';
import ConfirmExternalMonitoring from './components/confirmExternalMonitoring';

const ExternalMonitoring = () => {
  const {
    allCourses,
    listSubject,
    listProfessors,
    selectedCourse,
    selectedSubject,
    selectedProfessor,
    allStudents,
    selectedStudent,
    selectedDate,
    selectedHourIndex,
    isLoadingTopics,
    options,
    selectedTopic,
    topicInputValue,
    description,
    showConfirmation,
    confirmDisable,
    handleEditData,
    handleShowConfirmation,
    handleChangeDescription,
    handleChangeTopicInput,
    handleChangeTopicValue,
    handleStudentValueChange,
    handleCourseValueChange,
    handleSubjectValueChange,
    handleProfessorValueChange,
    handleChangeDate,
    handleChangeHour,
    handleConfirmExternalMonitoring,
    isLoadingExternalMonitoring,
    isSuccessExternalMonitoring,
    handleCompleteRegister,
  } = useExternalMonitoring();

  const shouldExpandDescriptionLines = useMediaQuery(
    theme.breakpoints.down('sm')
  );

  return (
    <ContainerWithSidebar
      selectedSidebarItem={SidebarItemEnum.EXTERNAL_MONITORING}
    >
      <ConfirmExternalMonitoring
        handleClose={handleCompleteRegister}
        isLoading={isLoadingExternalMonitoring}
        isSuccess={isSuccessExternalMonitoring}
        handleConfirmExternalMonitoring={handleConfirmExternalMonitoring}
        description={description}
        handleEditData={handleEditData}
        selectedDate={selectedDate}
        selectedHourIndex={selectedHourIndex}
        selectedProfessor={selectedProfessor}
        selectedStudent={selectedStudent}
        selectedSubject={selectedSubject}
        showConfirmation={showConfirmation}
        topic={selectedTopic}
      />
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
            <StudentInput
              listStudents={allStudents}
              handleStudentValueChange={handleStudentValueChange}
              selectedStudent={selectedStudent}
            />
            <CourseInput
              isSelectedStudent={!selectedStudent}
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
            <DateInput
              handleChangeDate={handleChangeDate}
              handleChangeHour={handleChangeHour}
              selectedDate={selectedDate}
              selectedHourIndex={selectedHourIndex}
              disable={!selectedProfessor}
            />
            <Autocomplete
              disabled={selectedHourIndex == -1}
              sx={{ width: '100%' }}
              options={options}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextFieldMUI
                  {...params}
                  placeholder="Buscar assunto"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoadingTopics && (
                          <CircularProgress color="primary" size={20} />
                        )}{' '}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
              noOptionsText="Carregando..."
              value={selectedTopic}
              inputValue={topicInputValue}
              onInputChange={handleChangeTopicInput}
              onChange={handleChangeTopicValue}
            />

            <DescriptionContainer>
              <DescriptionTextField
                value={description}
                disabled={selectedHourIndex === -1}
                onChange={handleChangeDescription}
                minRows={shouldExpandDescriptionLines ? 10 : 4}
              />
              <FormHelperText sx={{ textAlign: 'right', paddingRight: '10px' }}>
                {selectedHourIndex !== -1 && `${description.length} / 500`}
              </FormHelperText>
            </DescriptionContainer>
            <ButtonsContainer>
              <StyledButton variant="text">Cancelar</StyledButton>

              <StyledButton
                onClick={handleShowConfirmation}
                width="230px"
                disabled={confirmDisable}
              >
                Concluir registro
              </StyledButton>
            </ButtonsContainer>
          </InputContainer>
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default ExternalMonitoring;
