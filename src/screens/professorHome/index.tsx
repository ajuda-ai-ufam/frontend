import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import SubjectsList from './components/subjectsList';
import useProfessorHome from './hooks/useProfessorHome';
import { Card, Container } from './styles';

const ProfessorHome = () => {
  const { isLoading, filteredSubjects } = useProfessorHome();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.PROFESSOR_HOME}>
      <Container>
        <Card>
          <Typography variant="h3">Início</Typography>
          <Typography style={{ marginTop: '8px' }} variant="body1">
            Aqui estão listadas as disciplinas pelas quais você é responsável e
            seus respectivos monitores.
          </Typography>
          <SubjectsList
            isLoading={isLoading}
            filteredSubjects={filteredSubjects}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default ProfessorHome;
