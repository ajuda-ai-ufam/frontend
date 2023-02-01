import { Typography } from '@mui/material';
import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';

import { Button } from '../../../../components/button';
import CheckedAnimation from '../../../../components/checkedAnimation';
import LoadingAnimation from '../../../../components/loadingAnimation';
import Modal from '../../../../components/modal';
import {
  ButtonsContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  ConfirmButton,
  LoadingContainer,
  StyledTypography,
} from './styles';

type Props = {
  monitor?: TMonitorRequest;
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  handleAcceptMonitorClick(): void;
  handleClose(): void;
};

const AcceptMonitorModal = ({
  monitor,
  isLoading,
  isSuccess,
  isOpen,
  handleAcceptMonitorClick,
  handleClose,
}: Props) => {
  if (!monitor) return <></>;

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      );
    }

    if (isSuccess) {
      return (
        <ConfirmationContainer>
          <CheckedAnimation />

          <ConfirmationTextContainer>
            <Typography variant="h4">Tudo certo!</Typography>
            <Typography variant="body1" textAlign={'center'}>
              Um novo monitor foi adicionado à disciplina
            </Typography>
          </ConfirmationTextContainer>

          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
        </ConfirmationContainer>
      );
    }

    return (
      <>
        <StyledTypography variant="h4">
          Solicitação de Monitoria
        </StyledTypography>

        <StyledTypography variant="body1">
          Você deseja aceitar
          <strong>{' ' + monitor.student.user.name + ' '}</strong>
          como monitor da disciplina
          <strong>{' ' + monitor.subject.name}</strong>?
        </StyledTypography>

        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <ConfirmButton color="primary" onClick={handleAcceptMonitorClick}>
            Aceito
          </ConfirmButton>
        </ButtonsContainer>
      </>
    );
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {renderContent()}
    </Modal>
  );
};

export default AcceptMonitorModal;
