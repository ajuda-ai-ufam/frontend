import { AddRounded, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddMonitorModal from '../../../../components/addMonitorModal';
import useAddMonitorModal from '../../../../components/addMonitorModal/hooks/useAddMonitorModal';
import AssignProfessorsModal from '../../../../components/assignProfessorsModal';
import useAssignProfessorsModal from '../../../../components/assignProfessorsModal/hooks/useAssignProfessorsModal';
import useMonitorAvailabilityModal from '../../../../components/monitorAvailabilityModal/hooks/useMonitorAvailabilityModal';
import { Button } from '../../../../components/button';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { Container } from './styles';
import MonitorAvailabilityModal from '../../../../components/monitorAvailabilityModal';

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

  const monitorAvailabilityModal = useMonitorAvailabilityModal();

  const renderButton = () => {
    if (!subject) return <></>;
    if (userType === TypeUserEnum.STUDENT && subject.responsables.length) {
      if (
        !subject.monitors.find(
          (monitor) => monitor.studentId === Number(userId)
        )
      ) {
        return (
          <Button
            onClick={() => handleOpenAddMonitorModal(subject)}
            color="secondary"
          >
            Quero ser monitor
          </Button>
        );
      } else {
        return (
          <Button
            onClick={() => monitorAvailabilityModal.handleOpenModal()}
            color="secondary"
            width="auto"
          >
            Gerenciar Disponibilidade
          </Button>
        );
      }
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
      <MonitorAvailabilityModal
        subject={subject}
        {...monitorAvailabilityModal}
      />
      <IconButton onClick={handleGoBackClick}>
        <ArrowBack />
      </IconButton>

      {renderButton()}
    </Container>
  );
};

export default SubjectHeader;
