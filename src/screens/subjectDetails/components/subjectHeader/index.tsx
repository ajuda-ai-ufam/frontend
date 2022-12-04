import { AddRounded, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddMonitorModal from '../../../../components/addMonitorModal';
import useAddMonitorModal from '../../../../components/addMonitorModal/hooks/useAddMonitorModal';
import AssignProfessorsModal from '../../../../components/assignProfessorsModal';
import useAssignProfessorsModal from '../../../../components/assignProfessorsModal/hooks/useAssignProfessorsModal';
import { Button } from '../../../../components/button';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { Container } from './styles';

type Props = {
  subject?: TCompleteSubject;
  userType: TypeUserEnum;
  handleGoBackClick(): void;
};

const SubjectHeader = ({ subject, userType, handleGoBackClick }: Props) => {
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
  const {
    isLoading: isLoadingAddMonitor,
    isSuccess: isSuccessAddMonitor,
    isOpen: isAddMonitorModalOpen,
    professors: addMonitorProfessors,
    selectedProfessorId,
    selectedSubject: selectedMonitorSubject,
    userId,
    handleAddMonitorClick,
    handleChangeProfessor,
    handleCloseModal: handleCloseAddMonitorModal,
    handleOpenModal: handleOpenAddMonitorModal,
  } = useAddMonitorModal();

  const renderButton = () => {
    if (!subject) return <></>;

    if (
      userType === TypeUserEnum.STUDENT &&
      subject.responsables.length &&
      !subject.monitors.find((monitor) => monitor.id === Number(userId))
    ) {
      return (
        <Button
          onClick={() => handleOpenAddMonitorModal(subject)}
          color="secondary"
        >
          Quero ser monitor
        </Button>
      );
    }

    if (userType === TypeUserEnum.COORDINATOR) {
      return (
        <Button
          width="204px"
          color="primary"
          onClick={() => handleOpenAssignProfessorsModal(subject)}
        >
          <AddRounded /> Adicionar professor
        </Button>
      );
    }

    return <></>;
  };

  return (
    <Container>
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
      <AddMonitorModal
        isLoading={isLoadingAddMonitor}
        isSuccess={isSuccessAddMonitor}
        isOpen={isAddMonitorModalOpen}
        professors={addMonitorProfessors}
        selectedProfessorId={selectedProfessorId}
        subject={selectedMonitorSubject}
        handleAddMonitorClick={handleAddMonitorClick}
        handleChangeProfessor={handleChangeProfessor}
        handleClose={handleCloseAddMonitorModal}
      />
      <IconButton onClick={handleGoBackClick}>
        <ArrowBack />
      </IconButton>

      {renderButton()}
    </Container>
  );
};

export default SubjectHeader;
