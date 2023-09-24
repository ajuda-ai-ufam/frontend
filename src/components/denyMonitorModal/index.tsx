import { Typography } from '@mui/material';
import {
  ButtonsContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  ConfirmCloseButton,
  ConfirmRemoveButton,
  LoadingContainer,
  StyledTypography,
} from './styles';
import { TMonitorRequest } from '../../service/requests/useGetAllMonitorRequests/types';
import LoadingAnimation from '../loadingAnimation';
import CheckedAnimation from '../checkedAnimation';
import { Button } from '../button';
import Modal from '../modal';

type Props = {
  monitor?: TMonitorRequest;
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  handleDenyMonitorClick(): void;
  handleClose(): void;
};

const DenyMonitorModal = ({
  monitor,
  isLoading,
  isSuccess,
  isOpen,
  handleDenyMonitorClick,
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
              Removemos esta solicitação de monitoria
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
        <StyledTypography variant="h4">Recusar monitor(a)</StyledTypography>

        <StyledTypography variant="body1">
          Você tem certeza que deseja recusar
          <strong>{` ${monitor.student.user.name} `}</strong>
          como monitor(a) da disciplina
          <strong>{`${monitor.subject.code} - ${monitor.subject.name}`}</strong>
          ?
        </StyledTypography>

        <ButtonsContainer>
          <ConfirmCloseButton onClick={handleClose}>
            Não, desejo sair
          </ConfirmCloseButton>
          <ConfirmRemoveButton onClick={handleDenyMonitorClick}>
            Sim, recusar
          </ConfirmRemoveButton>
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

export default DenyMonitorModal;
