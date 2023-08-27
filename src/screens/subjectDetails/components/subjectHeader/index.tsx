import { EditRounded, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddMonitorModal from '../../../../components/addMonitorModal';
import useAddMonitorModal from '../../../../components/addMonitorModal/hooks/useAddMonitorModal';
import useAssignProfessorsModal from '../../../../components/editProfessorsModal/hooks/useEditProfessorsModal';
import { Button } from '../../../../components/button';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { Container } from './styles';
import EditProfessorsModal from '../../../../components/editProfessorsModal';
import { ManageHistoryRounded } from '@mui/icons-material';

type Props = {
  subject?: TCompleteSubject;
  userType: TypeUserEnum;
  handleGoBackClick(): void;
  refetchSubject(): void;
  handleManageMonitoringClick(): void;
};

const SubjectHeader = ({
  subject,
  userType,
  handleGoBackClick,
  refetchSubject,
  handleManageMonitoringClick,
}: Props) => {
  const {
    isLoadingAssignProfessor,
    isLoadingEndResponsability,
    isSuccessAssignProfessor,
    isOpen: isAssignProfessorsModalOpen,
    professors,
    selectedProfessorRemove,
    selectedProfessorsIds,
    selectedSubject,
    handleAssignProfessorsClick,
    handleChangeProfessors,
    handleCloseModal: handleCloseAssignProfessorsModal,
    handleOpenModal: handleOpenAssignProfessorsModal,
    handleCloseRemoveProfessorModal,
    isRemoveProfessorModalOpen,
    handleClickRemoveProfessor,
    handleEndResponsabilityClick,
    subjectReponsibles,
  } = useAssignProfessorsModal({ refetchSubject });
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
            Quero ser monitor(a)
          </Button>
        );
      } else {
        return (
          <Button
            startIcon={<ManageHistoryRounded />}
            onClick={handleManageMonitoringClick}
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
          width="auto"
          color="primary"
          startIcon={<EditRounded />}
          onClick={() => handleOpenAssignProfessorsModal(subject)}
        >
          Editar professores
        </Button>
      );
    }

    return <></>;
  };

  return (
    <Container>
      <EditProfessorsModal
        handleEndResponsabilityClick={handleEndResponsabilityClick}
        isLoadingEndResponsability={isLoadingEndResponsability}
        subjectReponsibles={subjectReponsibles}
        isLoading={isLoadingAssignProfessor}
        selectedProfessorRemove={selectedProfessorRemove}
        isSuccess={isSuccessAssignProfessor}
        isOpen={isAssignProfessorsModalOpen}
        professors={professors}
        selectedProfessorsIds={selectedProfessorsIds}
        subject={selectedSubject}
        handleAssignProfessorsClick={handleAssignProfessorsClick}
        handleChangeProfessors={handleChangeProfessors}
        handleClose={handleCloseAssignProfessorsModal}
        handleClickRemoveProfessor={handleClickRemoveProfessor}
        handleCloseRemoveProfessorModal={handleCloseRemoveProfessorModal}
        isRemoveProfessorModalOpen={isRemoveProfessorModalOpen}
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
