import { Typography } from '@mui/material';
import { ConfirmedActionContent } from '../../../../components/confirmedActionContent';
import { ActionButton, ButtonsContainer } from '../ScheduleDetailsModal/styles';

type Props = {
  isMonitor: boolean;
  isCancelSuccess: boolean;
  handleCloseCancelModal(): void;
  handleCancelSchedule(): void;
  handleClose(): void;
};

const CancelScheduleModalContent = ({
  isMonitor,
  isCancelSuccess,
  handleCloseCancelModal,
  handleClose,
  handleCancelSchedule,
}: Props) => {
  if (isCancelSuccess) {
    return (
      <ConfirmedActionContent
        confirmationText="O horário foi desmarcado"
        handleClose={handleClose}
      />
    );
  }

  return (
    <>
      <Typography variant="h4">Desmarcar horário</Typography>
      <Typography variant="body1">
        Caso você cancele o horário agendado, você não o verá mais na lista de
        agendamentos. Ao desmarcar o {isMonitor ? 'aluno' : 'monitor'} receberá
        um e-mail informando a ação. Deseja continuar?
      </Typography>
      <ButtonsContainer>
        <ActionButton
          variant="outlined"
          color="secondary"
          borderColor="#2D2D2C29"
          hoverBackGroundColor="#2D2D2C14"
          hoverBorderColor="#2D2D2C29"
          onClick={handleCloseCancelModal}
        >
          Não, desejo sair
        </ActionButton>
        <ActionButton
          color="error"
          variant="contained"
          hoverBackGroundColor="#F55858"
          onClick={handleCancelSchedule}
        >
          Sim, continuar
        </ActionButton>
      </ButtonsContainer>
    </>
  );
};

export default CancelScheduleModalContent;
