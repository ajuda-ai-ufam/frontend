import { TMonitorRequest } from '../../service/requests/useGetAllMonitorRequests/types';

import { Button } from '../button';
import { ConfirmedActionContent } from '../confirmedActionContent';
import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import {
  ButtonsContainer,
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
        <ConfirmedActionContent
          confirmationText="Monitor(a) adicionado(a)"
          handleClose={handleClose}
        />
      );
    }

    return (
      <>
        <StyledTypography variant="h4">Aprovar monitor(a)</StyledTypography>

        <StyledTypography variant="body1">
          Você deseja aceitar
          <strong>{` ${monitor.student.user.name} `}</strong>
          como monitor(a) da disciplina
          <strong>{` ${monitor.subject.code} - ${monitor.subject.name}`}</strong>
          ?
        </StyledTypography>

        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={handleClose}>
            Não, cancelar
          </Button>
          <ConfirmButton color="primary" onClick={handleAcceptMonitorClick}>
            Sim, aceitar
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
