import { EditRounded, ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddMonitorModal from '../../../../components/addMonitorModal';
import useAddMonitorModal from '../../../../components/addMonitorModal/hooks/useAddMonitorModal';
import useAssignProfessorsModal from '../../../../components/editProfessorsModal/hooks/useEditProfessorsModal';
import { Button } from '../../../../components/button';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { Container, HeaderButtonContainer } from './styles';
import EditProfessorsModal from '../../../../components/editProfessorsModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  ManageHistoryRounded,
  CancelOutlined,
  PostAddRounded,
  SwitchAccessShortcutOutlined,
} from '@mui/icons-material';
import theme from '../../../../utils/theme';

type Props = {
  subject?: TCompleteSubject;
  userType: TypeUserEnum;
  handleGoBackClick(): void;
  refetchSubject(): void;
  handleManageMonitoringClick(): void;
  handleCancelEnrollClick(id: number): void;
  handleEnrollmentModal(id: number): void;
};

const SubjectHeader = ({
  subject,
  userType,
  handleGoBackClick,
  refetchSubject,
  handleManageMonitoringClick,
  handleCancelEnrollClick,
  handleEnrollmentModal,
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
    if (userType === TypeUserEnum.STUDENT) {
      const notMobile = useMediaQuery(theme.breakpoints.up('sm'));

      if (subject.isStudentEnrolled === true) {
        return (
          <Button
            startIcon={notMobile ? <CancelOutlined /> : null}
            onClick={() => handleCancelEnrollClick(subject.id)}
            color="primary"
            width="auto"
            variant="outlined"
          >
            {notMobile ? 'Desmatricular' : <CancelOutlined />}
          </Button>
        );
      } else {
        if (subject.responsables.length) {
          if (
            !subject.monitors.find(
              (monitor) => monitor.studentId === Number(userId)
            )
          ) {
            return (
              <>
                <Button
                  startIcon={notMobile ? <PostAddRounded /> : null}
                  onClick={() => handleEnrollmentModal(subject.id)}
                  color="primary"
                  variant="outlined"
                  width="auto"
                >
                  {notMobile ? 'Matricular' : <PostAddRounded />}
                </Button>
                <Button
                  startIcon={
                    notMobile ? <SwitchAccessShortcutOutlined /> : null
                  }
                  onClick={() => handleOpenAddMonitorModal(subject)}
                  color="secondary"
                  width="auto"
                >
                  {notMobile ? (
                    'Quero ser monitor(a)'
                  ) : (
                    <SwitchAccessShortcutOutlined />
                  )}
                </Button>
              </>
            );
          } else {
            return (
              <Button
                startIcon={notMobile ? <ManageHistoryRounded /> : null}
                onClick={handleManageMonitoringClick}
                color="secondary"
                width="auto"
              >
                {notMobile ? 'Editar Monitoria' : <ManageHistoryRounded />}
              </Button>
            );
          }
        } else {
          return (
            <Button
              startIcon={notMobile ? <PostAddRounded /> : null}
              onClick={() => handleEnrollmentModal(subject.id)}
              color="primary"
              variant="outlined"
              width="auto"
            >
              {notMobile ? 'Matricular' : <PostAddRounded />}
            </Button>
          );
        }
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

      <HeaderButtonContainer>{renderButton()}</HeaderButtonContainer>
    </Container>
  );
};

export default SubjectHeader;
