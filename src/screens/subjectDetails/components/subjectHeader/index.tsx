import { AddRounded, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AssignProfessorsModal from '../../../../components/assignProfessorsModal';
import useAssignProfessorsModal from '../../../../components/assignProfessorsModal/hooks/useAssignProfessorsModal';
import { Button } from '../../../../components/button';
import { TSubject } from '../../../../service/requests/useListSubjectsRequest/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { Container } from './styles';

type Props = {
  subject?: TSubject;
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

  const renderButton = () => {
    if (!subject) return <></>;

    if (userType === TypeUserEnum.STUDENT) {
      return <Button color="secondary">Quero ser monitor</Button>;
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
      <IconButton onClick={handleGoBackClick}>
        <ArrowBack />
      </IconButton>

      {renderButton()}
    </Container>
  );
};

export default SubjectHeader;
