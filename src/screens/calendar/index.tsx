import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';

const Calendar = () => {
  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.CALENDAR}>
      <Typography variant="h3">Calendário</Typography>
    </ContainerWithSidebar>
  );
};

export default Calendar;
