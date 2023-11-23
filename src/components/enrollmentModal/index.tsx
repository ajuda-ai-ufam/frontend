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
  handleConfirmEnrollmentClick(): void;
  handleReturnEnrollModal(): void;
};

const EnrollmentModal = ({
  handleCloseModal,
  handleConfirmEnrollmentClick,
  handleReturnEnrollModal,
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
              Você está matriculado(a) nesta disciplina.
            </Typography>
          </SuccessTypography>
          <CloseButton onClick={handleReturnEnrollModal}>Voltar</CloseButton>
        </SuccessCard>
      );
    }

    return (
      <Card>
        <HeaderTypography>Matricular</HeaderTypography>
        <BodyTypography>
          Ao se matricular nessa disciplina, você poderá agendar horário com
          os(as) monitores(as) disponíveis. Além disso, ela será adicionada à
          sua tela de início. Deseja continuar?
        </BodyTypography>
        <ButtonContainer>
          <CancelButton onClick={handleCloseModal}>Não, cancelar</CancelButton>
          <ConfirmButton onClick={() => handleConfirmEnrollmentClick()}>
            Sim, quero me matricular
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

export default EnrollmentModal;
