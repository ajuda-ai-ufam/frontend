import { Typography } from '@mui/material';
import AssignProfessorsModal from '../../components/assignProfessorsModal';
import useAssignProfessorsModal from '../../components/assignProfessorsModal/hooks/useAssignProfessorsModal';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import useScheduleConfirmation from '../../components/ScheduleConfirmationModal/hooks/useScheduleConfirmation';
import ScheduleHelpModal from '../../components/ScheduleHelpModal';
import useScheduleHelpModal from '../../components/ScheduleHelpModal/hooks/useScheduleHelpModal';
import SearchField from '../../components/searchField';
import { SidebarItemEnum } from '../../utils/constants';
import SubjectsList from './components/SubjectsList';
import useSubjects from './hooks/useSubjects';
import { Card, Container } from './styles';
import ScheduleConfirmationModal from '../../components/ScheduleConfirmationModal';

const Subjects = () => {
  const {
    page,
    subjects,
    totalPages,
    isLoadingSubjects,
    searchFieldElement,
    userTypeId,
    handleChangePage,
    handleSearch,
    handleSubjectClick,
  } = useSubjects();

  const {
    isLoading: isLoadingAssignProfessors,
    isSuccess,
    isOpen: isAssignProfessorsModalOpen,
    professors,
    selectedProfessorsIds,
    selectedSubject,
    handleAssignProfessorsClick,
    handleChangeProfessors,
    handleCloseModal: handleCloseAssignProfessorsModal,
    handleOpenModal: handleOpenAssignProfessorsModal,
  } = useAssignProfessorsModal();

  const {
    availableHours,
    availableMonitors,
    isLoadingMonitorAvailableTimes,
    isScheduleLoading,
    isScheduleSuccess,
    isOpen: isScheduleModalOpen,
    monitorAvailableTimes,
    selectedDate,
    selectedMonitorId,
    selectedProfessorId,
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
  } = useScheduleHelpModal();

  const {
    isOpen: isOpenScheduleConfirmationModal,
    scheduleState,
    isSuccess: isSuccessUpdate,
    isLoadingUpdate: isLoadingUpdate,
    errorUpdate: errorUpdate,
    numberScheduleOpens: numberScheduleOpens,
    handleCloseModal: handleCloseScheduleConfirmation,
    handleClickDone: handleClickDone,
    handleClickNotDone: handleClickNotDone,
  } = useScheduleConfirmation();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <AssignProfessorsModal
        isLoading={isLoadingAssignProfessors}
        isSuccess={isSuccess}
        isOpen={isAssignProfessorsModalOpen}
        professors={professors}
        selectedProfessorsIds={selectedProfessorsIds}
        subject={selectedSubject}
        handleAssignProfessorsClick={handleAssignProfessorsClick}
        handleChangeProfessors={handleChangeProfessors}
        handleClose={handleCloseAssignProfessorsModal}
      />
      <ScheduleHelpModal
        availableHours={availableHours}
        availableMonitors={availableMonitors}
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
        handleChangeMonitor={handleChangeMonitor}
        handleChangeProfessor={handleChangeProfessor}
        handleEditData={handleEditData}
        handleShowConfirmation={handleShowConfirmation}
        subject={selectedScheduleSubject}
        isOpen={isScheduleModalOpen}
        handleClose={handleCloseScheduleModal}
        handleConfirmSchedule={handleConfirmSchedule}
      />

      <ScheduleConfirmationModal
        isOpen={isOpenScheduleConfirmationModal}
        scheduleState={scheduleState}
        handleClose={handleCloseScheduleConfirmation}
        handleClickDone={handleClickDone}
        handleClickNotDone={handleClickNotDone}
        isSuccess={isSuccessUpdate}
        isLoadingUpdate={isLoadingUpdate}
        errorUpdate={errorUpdate}
        numberScheduleOpens={numberScheduleOpens}
      />
      <Container>
        <Card>
          <Typography variant="h3">Disciplinas</Typography>
          <Typography style={{ marginTop: '8px' }} variant="body1">
            Clique na disciplina para exibir mais detalhes
          </Typography>

          <SearchField
            inputRef={searchFieldElement}
            placeholder="Buscar disciplina"
            handleSearch={handleSearch}
          />

          <SubjectsList
            page={page}
            totalPages={totalPages}
            subjects={subjects}
            userTypeId={userTypeId}
            isLoading={isLoadingSubjects}
            handleAssignProfessors={handleOpenAssignProfessorsModal}
            handleChangePage={handleChangePage}
            handleConfirmSchedule={handleOpenScheduleModal}
            handleSubjectClick={handleSubjectClick}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default Subjects;
