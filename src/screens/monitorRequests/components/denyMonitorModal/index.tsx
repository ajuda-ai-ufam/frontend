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
              Removemos a solicitação que o(a) aluno(a) fez para ser monitor(a)
              desta disciplina
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
          Tem certeza que deseja recusar
          <strong>{' ' + monitor.student.user.name + ' '}</strong>
          como monitor(a) da disciplina
          <strong>{' ' + monitor.subject.name}</strong>?
        </StyledTypography>

        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={handleClose}>
            Não, quero voltar
          </Button>
          <ConfirmButton color="primary" onClick={handleDenyMonitorClick}>
            Sim, recusar
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

export default DenyMonitorModal;
