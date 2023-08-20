import { Typography } from '@mui/material';
import {
  ActionButton,
  ButtonsContainer,
  DataContainer,
  Label,
} from '../ScheduleDetailsModal/styles';
import PreferentialPlaceAlert from '../PreferentialPlaceAlert';
import { TPreferentialPlaceProperties } from '../../hooks/types';

type Props = {
  email: string;
  topic?: string;
  description: string;
  linkedin?: string;
  whatsapp?: string;
  isMonitor: boolean;
  handleClose(): void;
  handleOpenCancelModal(): void;
  preferentialPlaceProperties?: TPreferentialPlaceProperties;
};

const ConfirmedScheduleModalContent = ({
  email,
  topic,
  description,
  linkedin,
  whatsapp,
  isMonitor,
  handleClose,
  handleOpenCancelModal,
  preferentialPlaceProperties,
}: Props) => (
  <>
    <Typography variant="h4">Horário agendado</Typography>
    <Typography variant="body1">
      Entre em contato com o(a) {isMonitor ? 'aluno' : 'monitor'}
      (a) para definirem a plataforma onde será feita a ajuda.
    </Typography>

    <PreferentialPlaceAlert
      isWarning={preferentialPlaceProperties?.isWarning}
      message={preferentialPlaceProperties?.message}
      preferentialPlace={preferentialPlaceProperties?.preferentialPlace}
    />

    <DataContainer>
      <Label>Assunto</Label>
      <Typography variant="body2">{topic || '-'}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Descrição</Label>
      <Typography variant="body2">{description || '-'}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>E-mail</Label>
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
      <ActionButton
        variant="text"
        color="primary"
        onClick={handleOpenCancelModal}
      >
        Desmarcar
      </ActionButton>
      <ActionButton color="primary" onClick={handleClose}>
        Fechar
      </ActionButton>
    </ButtonsContainer>
  </>
);

export default ConfirmedScheduleModalContent;
