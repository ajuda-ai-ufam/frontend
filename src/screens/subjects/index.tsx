import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';

const Subjects = () => {
  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <Typography variant="h3">Disciplinas</Typography>
    </ContainerWithSidebar>
  );
};

export default Subjects;
