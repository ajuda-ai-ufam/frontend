import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import SubjectsList from './components/subjectsList';
import useProfessorHome from './hooks/useProfessorHome';
import { Card, Container } from './styles';
import useAcceptMonitorModal from '../../components/acceptMonitorModal/hooks/useAcceptMonitorModal';
import useDenyMonitorModal from '../../components/denyMonitorModal/hooks/useDenyMonitorModal';
import AcceptMonitorModal from '../../components/acceptMonitorModal';
import DenyMonitorModal from '../../components/denyMonitorModal';
import useRemoveMonitorModal from '../../components/removeMonitorModal/hooks/useRemoveMonitorModal';
import RemoveMonitorModal from '../../components/removeMonitorModal';

const ProfessorHome = () => {
  const {
    isLoading,
    filteredSubjects,
    handleSearchMonitorRequest,
    handleAccessSubject,
    handleSeeHistoric,
  } = useProfessorHome();

  const {
    currentMonitor: currentMonitorAccept,
    isSuccess: isSuccessAccept,
    isOpen: isOpenAccept,
    isLoading: isLoadingAccept,
    handleAcceptMonitorClick: handleAcceptMonitorClickAccept,
    handleCloseModal: handleCloseModalAccept,
    handleOpenAcceptModal: handleOpenAcceptModal,
  } = useAcceptMonitorModal();

  const {
    currentMonitor: currentMonitorDeny,
    isSuccess: isSuccessDeny,
    isOpen: isOpenDeny,
    isLoading: isLoadingDeny,
    handleDenyMonitorClick: handleDenyMonitorClickDeny,
    handleCloseModal: handleCloseModalDeny,
    handleOpenDenyModal: handleOpenDenyModal,
  } = useDenyMonitorModal();

  const {
    isOpen: isOpenRemoveMonitor,
    selectedMonitor: selectedMonitorRemove,
    handleOpenRemoveMonitorModal,
    handleClose: handleCloseRemoveMonitorModal,
    handleRemoveMonitorClick,
    isSuccess: isSuccessRemoveMonitor,
    isLoading: isLoadingRemoveMonitor,
    handleEndingMonitoringClick,
    isMyMonitor,
  } = useRemoveMonitorModal();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.PROFESSOR_HOME}>
      <AcceptMonitorModal
        monitor={currentMonitorAccept}
        handleAcceptMonitorClick={handleAcceptMonitorClickAccept}
        handleClose={handleCloseModalAccept}
        isLoading={isLoadingAccept}
        isOpen={isOpenAccept}
        isSuccess={isSuccessAccept}
      />
      <DenyMonitorModal
        monitor={currentMonitorDeny}
        handleDenyMonitorClick={handleDenyMonitorClickDeny}
        handleClose={handleCloseModalDeny}
        isLoading={isLoadingDeny}
        isOpen={isOpenDeny}
        isSuccess={isSuccessDeny}
      />
      <RemoveMonitorModal
        isOpen={isOpenRemoveMonitor}
        selectedMonitorRemove={selectedMonitorRemove}
        handleClose={handleCloseRemoveMonitorModal}
        showMonitorData={false}
        handleRemoveMonitorClick={handleRemoveMonitorClick}
        isLoading={isLoadingRemoveMonitor}
        isSuccess={isSuccessRemoveMonitor}
        handleEndingMonitoringClick={handleEndingMonitoringClick}
        isMyMonitor={isMyMonitor}
      />

      <Container>
        <Card>
          <Typography variant="h3">Início</Typography>
          <Typography style={{ marginTop: '8px' }} variant="body1">
            Aqui estão listadas as disciplinas pelas quais você é responsável e
            seus respectivos monitores.
          </Typography>
          <SubjectsList
            handleOpenAcceptModal={handleOpenAcceptModal}
            handleOpenDenyModal={handleOpenDenyModal}
            handleSearchMonitorRequest={handleSearchMonitorRequest}
            handleOpenRemoveMonitorModal={handleOpenRemoveMonitorModal}
            handleAccessSubject={handleAccessSubject}
            handleSeeHistoric={handleSeeHistoric}
            isLoading={isLoading}
            filteredSubjects={filteredSubjects}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default ProfessorHome;
