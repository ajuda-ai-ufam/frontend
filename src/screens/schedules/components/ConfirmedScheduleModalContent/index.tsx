import { Typography } from '@mui/material';
import {
  ActionButton,
  ButtonsContainer,
  DataContainer,
  Label,
} from '../ScheduleDetailsModal/styles';

type Props = {
  email: string;
  linkedin?: string;
  whatsapp?: string;
  isMonitor: boolean;
  handleClose(): void;
  handleOpenCancelModal(): void;
};

const ConfirmedScheduleModalContent = ({
  email,
  linkedin,
  whatsapp,
  isMonitor,
  handleClose,
  handleOpenCancelModal,
}: Props) => (
  <>
    <Typography variant="h4">Horário agendado</Typography>
    <Typography variant="body1">
      Entre em contato com o {isMonitor ? 'aluno' : 'monitor'}
      (a) para definirem a plataforma onde será feita a ajuda.
    </Typography>

    <DataContainer>
      <Label>E-mail:</Label>
      <Typography variant="body2">{email}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>LinkedIn</Label>
      <Typography variant="body2">{linkedin || '-'}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Whatsapp</Label>
      <Typography variant="body2">{whatsapp || '-'}</Typography>
    </DataContainer>

    <ButtonsContainer>
      <ActionButton variant="text" color="primary" onClick={handleClose}>
        Fechar
      </ActionButton>
      <ActionButton color="primary" onClick={handleOpenCancelModal}>
        Desmarcar
      </ActionButton>
    </ButtonsContainer>
  </>
);

export default ConfirmedScheduleModalContent;
