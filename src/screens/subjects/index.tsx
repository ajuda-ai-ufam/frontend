import { Typography } from '@mui/material';
import ScheduleConfirmationModal from '../../components/ScheduleConfirmationModal';
import ScheduleHelpModal from '../../components/ScheduleHelpModal';
import useScheduleHelpModal from '../../components/ScheduleHelpModal/hooks/useScheduleHelpModal';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import EditProfessorsModal from '../../components/editProfessorsModal';
import useEditProfessorsModal from '../../components/editProfessorsModal/hooks/useEditProfessorsModal';
import SearchField from '../../components/searchField';
import { SidebarItemEnum, TypeUserEnum } from '../../utils/constants';
import SubjectsList from './components/SubjectsList';
import useSubjects from './hooks/useSubjects';
import { Card, Container } from './styles';

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
    refetchSubjects,
  } = useSubjects();

  const {
    isLoadingAssignProfessor,
    isSuccessAssignProfessor,
    isOpen: isAssignProfessorsModalOpen,
    professors,
    selectedProfessorsIds,
    selectedSubject,
    subjectReponsibles,
    handleAssignProfessorsClick,
    handleChangeProfessors,
    handleCloseModal: handleCloseAssignProfessorsModal,
    handleOpenModal: handleOpenAssignProfessorsModal,
    handleClickRemoveProfessor,
    handleCloseRemoveProfessorModal,
    isRemoveProfessorModalOpen,
    selectedProfessorRemove,
    isLoadingEndResponsability,
    handleEndResponsabilityClick,
  } = useEditProfessorsModal({
    refetchSubject: refetchSubjects,
  });

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

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <EditProfessorsModal
        handleEndResponsabilityClick={handleEndResponsabilityClick}
        isLoadingEndResponsability={isLoadingEndResponsability}
        subjectReponsibles={subjectReponsibles}
        selectedProfessorRemove={selectedProfessorRemove}
        isLoading={isLoadingAssignProfessor}
        isSuccess={isSuccessAssignProfessor}
        isOpen={isAssignProfessorsModalOpen}
        professors={professors}
        selectedProfessorsIds={selectedProfessorsIds}
        subject={selectedSubject}
        handleAssignProfessorsClick={handleAssignProfessorsClick}
        handleChangeProfessors={handleChangeProfessors}
        handleClose={handleCloseAssignProfessorsModal}
        handleClickRemoveProfessor={handleClickRemoveProfessor}
        handleCloseRemoveProfessorModal={handleCloseRemoveProfessorModal}
        isRemoveProfessorModalOpen={isRemoveProfessorModalOpen}
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

      {userTypeId === TypeUserEnum.STUDENT ? (
        <ScheduleConfirmationModal />
      ) : (
        <></>
      )}

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
