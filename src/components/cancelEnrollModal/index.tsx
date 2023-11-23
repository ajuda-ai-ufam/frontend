import Modal from '../modal';
import LoadingAnimation from '../loadingAnimation';
import CheckedAnimation from '../checkedAnimation';
import {
  Card,
  BodyTypography,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  HeaderTypography,
  SuccessCard,
  SuccessTypography,
  CloseButton,
  LoadingContainer,
} from './styles';
import { Typography } from '@mui/material';

type props = {
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  handleCloseModal(): void;
  handleConfirmCancelEnrollmentClick(): void;
  handleReturnCancelEnrollModal(): void;
};

const CancelEnrollmentModal = ({
  handleCloseModal,
  handleConfirmCancelEnrollmentClick,
  handleReturnCancelEnrollModal,
  isLoading,
  isOpen,
  isSuccess,
}: props) => {
  const CardContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      );
    }
    if (isSuccess) {
      return (
        <SuccessCard>
          <CheckedAnimation />
          <SuccessTypography>
            <Typography variant="h4">Tudo certo!</Typography>
            <Typography variant="body1">
              Você se desmatriculou desta disciplina.
            </Typography>
          </SuccessTypography>
          <CloseButton onClick={handleReturnCancelEnrollModal}>
            Voltar
          </CloseButton>
        </SuccessCard>
      );
    }

    return (
      <Card>
        <HeaderTypography>Desmatricular</HeaderTypography>
        <BodyTypography>
          Ao se desmatricular dessa disciplina, você não poderá mais agendar
          horário com os(as) monitores(as). Seus agendamentos pendentes, no
          entanto permanecerão disponíveis. Deseja continuar?
        </BodyTypography>
        <ButtonContainer>
          <CancelButton onClick={handleCloseModal}>Não, cancelar</CancelButton>
          <ConfirmButton onClick={() => handleConfirmCancelEnrollmentClick()}>
            Sim, desmatricular
          </ConfirmButton>
        </ButtonContainer>
      </Card>
    );
  };
  return (
    <Modal isOpen={isOpen} handleClose={handleCloseModal} width="704px">
      {CardContent()}
    </Modal>
  );
};

export default CancelEnrollmentModal;
