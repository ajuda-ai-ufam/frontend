import { Typography } from '@mui/material';
import AcceptMonitorModal from './components/acceptMonitorModal';
import useAcceptMonitorModal from './hooks/useAcceptMonitorModal';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import SearchField from '../../components/searchField';
import { SidebarItemEnum, TypeUserEnum } from '../../utils/constants';
import MonitorsRequestList from './components/MonitorsRequestList';
import useMonitorRequests from './hooks/useMonitorRequests';
import { Card, Container, LegendTypography } from './styles';
import useDenyMonitorModal from './hooks/useDenyMonitorModal';
import DenyMonitorModal from './components/denyMonitorModal';

const MonitorRequests = () => {
  const {
    handleChangePage,
    handleSearch,
    isLoadingRequests,
    page,
    requests,
    searchFieldElement,
    totalPages,
    userTypeId,
  } = useMonitorRequests();

  const {
    currentMonitor: currentMonitorAccept,
    isSuccess: isSuccessAccept,
    isOpen: isOpenAccept,
    isLoading: isLoadingAccept,
    handleAcceptMonitorClick: handleAcceptMonitorClickAccept,
    handleCloseModal: handleCloseModalAccept,
    handleOpenAcceptModal: handleOpenAcceptModalAccept,
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

  return (
    <ContainerWithSidebar
      selectedSidebarItem={SidebarItemEnum.MONITOR_REQUESTS}
    >
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
      <Container>
        <Card>
          <Typography variant="h3">Solicitações</Typography>
          <LegendTypography>
            Aqui estão listados os pedidos de alunos que querem ser monitores
          </LegendTypography>
          <SearchField
            inputRef={searchFieldElement}
            placeholder={
              userTypeId === TypeUserEnum.COORDINATOR
                ? 'Buscar aluno ou professor'
                : 'Buscar aluno'
            }
            handleSearch={handleSearch}
          />
          <MonitorsRequestList
            searchFieldElement={searchFieldElement.current?.value}
            page={page}
            totalPages={totalPages}
            requests={requests}
            userTypeId={userTypeId}
            isLoading={isLoadingRequests}
            handleChangePage={handleChangePage}
            handleOpenAcceptModal={handleOpenAcceptModalAccept}
            handleOpenDenyModal={handleOpenDenyModal}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default MonitorRequests;
