import { ErrorOutlineSharp } from '@mui/icons-material';
import { CircularProgress, Typography } from '@mui/material';
import Breadcrumbs from '../../components/breadcrumbs';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import ScheduleHelpModal from '../../components/ScheduleHelpModal';
import useScheduleHelpModal from '../../components/ScheduleHelpModal/hooks/useScheduleHelpModal';
import SearchField from '../../components/searchField';
import { SidebarItemEnum, TypeUserEnum } from '../../utils/constants';
import { SCREENS } from '../../utils/screens';
import MonitorsList from './components/monitorsList';
import SubjectHeader from './components/subjectHeader';
import useSubjectDetails from './hooks/useSubjectDetails';
import {
  Card,
  Container,
  FallbackTypography,
  LegendTypography,
  ProgressContainer,
} from './styles';
import useRemoveMonitorModal from '../../components/removeMonitorModal/hooks/useRemoveMonitorModal';
import RemoveMonitorModal from '../../components/removeMonitorModal';

const SubjectDetails = () => {
  const {
    error,
    isLoading,
    monitors,
    subject,
    search,
    selectedProfessorId,
    userType,
    handleGoBackClick,
    getMonitorClickHandler,
    handleProfessorFilterClick,
    handleSearch,
    handleSearchChange,
    refetchSubject,
  } = useSubjectDetails();

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
    selectedProfessorId: selectedScheduleProfessorId,
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
    handleOpenWithMonitor: handleOpenScheduleModal,
    handleConfirmSchedule,
    handleEditData,
    handleShowConfirmation,
    topicInputValue,
    handleChangeTopicInput,
  } = useScheduleHelpModal();

  const {
    isOpen: isOpenRemoveMonitor,
    selectedMonitor: selectedMonitorRemove,
    handleOpenRemoveMonitorModal,
    handleClose: handleCloseRemoveMonitorModal,
    showMonitorData: showRemoveMonitorData,
    handleRemoveMonitorClick,
    isSuccess: isSuccessRemoveMonitor,
    isLoading: isLoadingRemoveMonitor,
    handleEndingMonitoringClick,
    isMyMonitor,
  } = useRemoveMonitorModal();

  const renderPageTop = () => {
    if (!subject) return <></>;

    return (
      <>
        <SubjectHeader
          refetchSubject={refetchSubject}
          subject={subject}
          userType={userType}
          handleGoBackClick={handleGoBackClick}
        />

        <Breadcrumbs
          previousPages={[{ name: 'Disciplinas', route: SCREENS.SUBJECTS }]}
          currentPage={subject.name}
        />

        <Typography variant="h3">{subject.name}</Typography>

        <LegendTypography>
          {userType === TypeUserEnum.STUDENT
            ? 'Clique em um(a) monitor(a) para iniciar um agendamento.'
            : 'Aqui estão listados(as) todos(as) os(as) professores(as) e monitores(as) desta disciplina'}
        </LegendTypography>
      </>
    );
  };

  const renderCardContent = () => {
    if (error) {
      return (
        <>
          <SubjectHeader
            refetchSubject={refetchSubject}
            subject={subject}
            userType={userType}
            handleGoBackClick={handleGoBackClick}
          />

          <ProgressContainer>
            <ErrorOutlineSharp style={{ fontSize: '56px' }} />
            <Typography textAlign={'center'} variant="h3">
              Desculpe, essa disciplina não existe.
            </Typography>
            <FallbackTypography>
              Não encontramos a página que você tentou acessar, tente uma
              disciplina diferente ou volte ao menu principal.
            </FallbackTypography>
          </ProgressContainer>
        </>
      );
    }

    if (isLoading || !subject) {
      return (
        <ProgressContainer>
          <CircularProgress color="primary" />
        </ProgressContainer>
      );
    }

    if (!subject?.responsables.length) {
      return (
        <>
          {renderPageTop()}

          <ProgressContainer>
            <FallbackTypography>
              Ops... Parece que não há nada por aqui.
              {userType === TypeUserEnum.COORDINATOR
                ? ' Tente adicionar um novo(a) professor(a).'
                : ' Tente entrar em contato com o(a) coordenador(a).'}
            </FallbackTypography>
          </ProgressContainer>
        </>
      );
    }

    return (
      <>
        {renderPageTop()}

        <SearchField
          search={search}
          handleSearchChange={handleSearchChange}
          placeholder="Buscar aluno(a)"
          handleSearch={handleSearch}
        />

        <MonitorsList
          monitors={monitors}
          selectedProfessorId={selectedProfessorId}
          subject={subject}
          handleMonitorClick={getMonitorClickHandler(
            handleOpenScheduleModal,
            handleOpenRemoveMonitorModal
          )}
          handleProfessorFilterClick={handleProfessorFilterClick}
        />
      </>
    );
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
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
        handleChangeDescription={handleChangeDescription}
        selectedHourIndex={selectedHourIndex}
        selectedMonitorId={selectedMonitorId}
        selectedProfessorId={selectedScheduleProfessorId}
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

      <RemoveMonitorModal
        isOpen={isOpenRemoveMonitor}
        selectedMonitorRemove={selectedMonitorRemove}
        handleClose={handleCloseRemoveMonitorModal}
        showMonitorData={showRemoveMonitorData}
        handleRemoveMonitorClick={handleRemoveMonitorClick}
        isLoading={isLoadingRemoveMonitor}
        isSuccess={isSuccessRemoveMonitor}
        handleEndingMonitoringClick={handleEndingMonitoringClick}
        isMyMonitor={isMyMonitor}
      />
      <Container>
        <Card>{renderCardContent()}</Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default SubjectDetails;
