import { Typography } from '@mui/material';
import { SidebarItemEnum } from '../../utils/constants';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { useParams } from 'react-router-dom';

const SubjectDetails = () => {
  const { id } = useParams();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <Typography variant="h3">[WIP] Detalhes da disciplina {id}</Typography>
    </ContainerWithSidebar>
  );
};

export default SubjectDetails;
