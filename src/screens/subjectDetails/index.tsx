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
    isLoadingMonitorAvailableTimes,
    isScheduleLoading,
    isScheduleSuccess,
    isOpen: isScheduleModalOpen,
    monitorAvailableTimes,
    selectedDate,
    selectedMonitorId,
    selectedProfessorId: selectedScheduleProfessorId,
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
  } = useScheduleHelpModal();

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
            ? 'Clique em um monitor para iniciar um agendamento.'
            : 'Aqui estão listados todos os professores e monitores desta disciplina'}
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
                ? ' Tente adicionar um novo professor.'
                : ' Tente entrar em contato com o coordenador.'}
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
          placeholder="Buscar aluno"
          handleSearch={handleSearch}
        />

        <MonitorsList
          monitors={monitors}
          selectedProfessorId={selectedProfessorId}
          subject={subject}
          handleMonitorClick={getMonitorClickHandler(handleOpenScheduleModal)}
          handleProfessorFilterClick={handleProfessorFilterClick}
        />
      </>
    );
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
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
      <Container>
        <Card>{renderCardContent()}</Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default SubjectDetails;
