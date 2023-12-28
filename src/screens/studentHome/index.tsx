import { Typography } from '@mui/material';
import ScheduleConfirmationModal from '../../components/ScheduleConfirmationModal';
import ScheduleHelpModal from '../../components/ScheduleHelpModal';
import useScheduleHelpModal from '../../components/ScheduleHelpModal/hooks/useScheduleHelpModal';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum, TypeUserEnum } from '../../utils/constants';
import useStudentSubjects from './hooks/useStudentSubjects';
import {
  Card,
  Container,
  EditButton,
  HeaderContainer,
  SubHeaderLeftContainer,
} from './styles';
import EnrollmentModal from '../../components/enrollmentModal';
import useEnrollmentModal from '../../components/enrollmentModal/hooks/useEnrollmentModal';
import StudentSubjectsList from './components/StudentSubjectsList';
import { SchoolRounded } from '@mui/icons-material';

const StudentHome = () => {
  const {
    subjects,
    isLoadingSubjects,
    userTypeId,
    monitorSubject,
    handleSubjectClick,
    handleManageMonitoringClick,
    navigateToSujects,
    isPhone,
  } = useStudentSubjects();

  const {
    availableHours,
    availableMonitors,
    description,
    isLoadingMonitorAvailableTimes,
    isScheduleLoading,
    isScheduleSuccess,
    isOpen: isScheduleModalOpen,
    monitorAvailableTimes,
    selectedDate,
    selectedMonitorId,
    selectedProfessorId,
    options,
    selectedTopic,
    isLoadingTopics,
    handleChangeTopicValue,
    handleChangeDescription,
    handleChangeHour,
    handleChangeProfessor,
    handleChangeMonitor,
    selectedHourIndex,
    selectedSubject: selectedScheduleSubject,
    showConfirmation,
    handleChangeDate,
    handleClose: handleCloseScheduleModal,
    handleOpen: handleOpenScheduleModal,
    handleConfirmSchedule,
    handleEditData,
    handleShowConfirmation,
    topicInputValue,
    handleChangeTopicInput,
  } = useScheduleHelpModal();

  const {
    isLoading: isLoadingEnrollModal,
    isOpen: isOpenEnrollModal,
    isSuccess: isSuccessEnrollModal,
    handleConfirmEnrollmentClick,
    handleCloseModal: handleCloseEnrollModal,
    handleOpenModal: handleOpenEnrollModal,
    handleReturnEnrollModal,
  } = useEnrollmentModal();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.HOME}>
      <ScheduleHelpModal
        isLoadingTopics={isLoadingTopics}
        selectedTopic={selectedTopic}
        topicInputValue={topicInputValue}
        handleChangeTopicInput={handleChangeTopicInput}
        handleChangeTopicValue={handleChangeTopicValue}
        options={options}
        availableHours={availableHours}
        availableMonitors={availableMonitors}
        description={description}
        isLoadingMonitorAvailableTimes={isLoadingMonitorAvailableTimes}
        isScheduleLoading={isScheduleLoading}
        isScheduleSuccess={isScheduleSuccess}
        monitorAvailableTimes={monitorAvailableTimes}
        selectedDate={selectedDate}
        selectedHourIndex={selectedHourIndex}
        selectedMonitorId={selectedMonitorId}
        selectedProfessorId={selectedProfessorId}
        showConfirmation={showConfirmation}
        handleChangeHour={handleChangeHour}
        handleChangeDate={handleChangeDate}
        handleChangeDescription={handleChangeDescription}
        handleChangeMonitor={handleChangeMonitor}
        handleChangeProfessor={handleChangeProfessor}
        handleEditData={handleEditData}
        handleShowConfirmation={handleShowConfirmation}
        subject={selectedScheduleSubject}
        isOpen={isScheduleModalOpen}
        handleClose={handleCloseScheduleModal}
        handleConfirmSchedule={handleConfirmSchedule}
      />

      <EnrollmentModal
        isOpen={isOpenEnrollModal}
        handleCloseModal={handleCloseEnrollModal}
        isLoading={isLoadingEnrollModal}
        isSuccess={isSuccessEnrollModal}
        handleConfirmEnrollmentClick={handleConfirmEnrollmentClick}
        handleReturnEnrollModal={handleReturnEnrollModal}
      />

      {userTypeId === TypeUserEnum.STUDENT ? (
        <ScheduleConfirmationModal />
      ) : (
        <></>
      )}

      <Container>
        <Card>
          <HeaderContainer>
            <SubHeaderLeftContainer>
              <Typography variant="h3">Início</Typography>

              <EditButton
                startIcon={<SchoolRounded />}
                onClick={navigateToSujects}
              >
                {isPhone ? <></> : 'Todas as disciplinas'}
              </EditButton>

              <Typography style={{ marginTop: '8px' }} variant="body1">
                Abaixo estão listadas as disciplinas que você se matriculou.
              </Typography>
            </SubHeaderLeftContainer>
          </HeaderContainer>

          <StudentSubjectsList
            subjects={subjects}
            userTypeId={userTypeId}
            monitorSubject={monitorSubject}
            isLoading={isLoadingSubjects}
            handleConfirmSchedule={handleOpenScheduleModal}
            handleSubjectClick={handleSubjectClick}
            handleManageMonitoringClick={handleManageMonitoringClick}
            handleOpenEnrollModal={handleOpenEnrollModal}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default StudentHome;
