import { Typography } from '@mui/material';
import { SidebarItemEnum } from '../../utils/constants';
import ContainerWithSidebar from '../../components/containerWithSidebar';

const MonitorRequests = () => {
  return (
    <ContainerWithSidebar
      selectedSidebarItem={SidebarItemEnum.MONITOR_REQUESTS}
    >
      <Typography variant="h3">Solicitações</Typography>
    </ContainerWithSidebar>
  );
};

export default MonitorRequests;
