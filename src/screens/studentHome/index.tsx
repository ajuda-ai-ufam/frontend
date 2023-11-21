import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import { Card, Container, EditButton, InfoContainer } from './styles';

import { SchoolRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../utils/screens';

const StudentHome = () => {
  const navigate = useNavigate();
  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.HOME}>
      <Container>
        <Card>
          <InfoContainer>
            <Typography variant="h3">Início</Typography>
            <EditButton
              color="primary"
              startIcon={<SchoolRounded />}
              onClick={() => navigate(SCREENS.SUBJECTS)}
            >
              Todas as disciplinas
            </EditButton>
          </InfoContainer>

          <Typography style={{ marginTop: '8px' }} variant="body1">
            Abaixo estão listadas as disciplinas que você se matriculou.
          </Typography>
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default StudentHome;
