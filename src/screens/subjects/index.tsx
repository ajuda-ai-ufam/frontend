import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import AssignProfessorsModal from '../../components/assignProfessorsModal';
import SubjectsList from './components/SubjectsList';
import useAssignProfessorsModal from '../../components/assignProfessorsModal/hooks/useAssignProfessorsModal';
import useSubjects from './hooks/useSubjects';
import { Card, Container } from './styles';
import SearchField from '../../components/searchField';

const Subjects = () => {
  const {
    page,
    subjects,
    totalPages,
    isLoadingSubjects,
    searchFieldElement,
    userTypeId,
    handleChangePage,
    handleScheduleHelp,
    handleSearch,
    handleSubjectClick,
  } = useSubjects();

  const {
    isLoading: isLoadingAssignProfessors,
    isSuccess,
    isOpen: isAssignProfessorsModalOpen,
    professors,
    selectedProfessorsIds,
    selectedSubject,
    handleAssignProfessorsClick,
    handleChangeProfessors,
    handleCloseModal: handleCloseAssignProfessorsModal,
    handleOpenModal: handleOpenAssignProfessorsModal,
  } = useAssignProfessorsModal();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <AssignProfessorsModal
        isLoading={isLoadingAssignProfessors}
        isSuccess={isSuccess}
        isOpen={isAssignProfessorsModalOpen}
        professors={professors}
        selectedProfessorsIds={selectedProfessorsIds}
        subject={selectedSubject}
        handleAssignProfessorsClick={handleAssignProfessorsClick}
        handleChangeProfessors={handleChangeProfessors}
        handleClose={handleCloseAssignProfessorsModal}
      />
      <Container>
        <Card>
          <Typography variant="h3">Disciplinas</Typography>
          <Typography style={{ marginTop: '8px' }} variant="body1">
            Clique na disciplina para exibir mais detalhes
          </Typography>

          <SearchField
            inputRef={searchFieldElement}
            placeholder="Buscar disciplina"
            handleSearch={handleSearch}
          />

          <SubjectsList
            page={page}
            totalPages={totalPages}
            subjects={subjects}
            userTypeId={userTypeId}
            isLoading={isLoadingSubjects}
            handleAssignProfessors={handleOpenAssignProfessorsModal}
            handleChangePage={handleChangePage}
            handleScheduleHelp={handleScheduleHelp}
            handleSubjectClick={handleSubjectClick}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default Subjects;
