import { Typography } from '@mui/material';
import { Button } from '../../../../components/button';
import {
  ButtonContainer,
  ButtonsContainer,
  DataContainer,
  Label,
} from '../ScheduleDetailsModal/styles';
import { ChangeStatusButton } from './styles';
import PreferentialPlaceAlert from '../PreferentialPlaceAlert';
import { TPreferentialPlaceProperties } from '../../hooks/types';

type Props = {
  name: string;
  course: string;
  subject: string;
  start: Date;
  end: Date;
  description: string;
  isMonitor: boolean;
  topic?: string;
  handleAccept(): void;
  handleClose(): void;
  handleRefuse(): void;
  preferentialPlaceProperties?: TPreferentialPlaceProperties;
};

const PendingScheduleModalContent = ({
  name,
  course,
  subject,
  start,
  end,
  isMonitor,
  description,
  topic,
  handleAccept,
  handleClose,
  handleRefuse,
  preferentialPlaceProperties,
}: Props) => (
  <>
    <Typography variant="h4">Requisição de agendamento</Typography>
    <Typography variant="body1">
      {isMonitor
        ? 'Este agendamento encontra-se no status "Pendente". Ao aceitá-lo, o(a) aluno(a) receberá um e-mail informando que o agendamento está confirmado.'
        : 'Este agendamento encontra-se no status "Aguardando confirmação". Quando o(a) monitor(a) aceitá-lo você receberá um e-mail informando que o agendamento está confirmado.'}
    </Typography>

    <PreferentialPlaceAlert
      isWarning={preferentialPlaceProperties?.isWarning}
      message={preferentialPlaceProperties?.message}
      preferentialPlace={preferentialPlaceProperties?.preferentialPlace}
    />

    <DataContainer>
      <Label>{isMonitor ? 'Aluno' : 'Monitor'}(a)</Label>
      <Typography variant="body2">{name}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Curso</Label>
      <Typography variant="body2">{course}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Disciplina</Label>
      <Typography variant="body2">{subject}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Assunto</Label>
      <Typography variant="body2">{topic || '-'}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Descrição</Label>
      <Typography variant="body2">{description || '-'}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Data</Label>
      <Typography variant="body2">{start.toLocaleDateString()}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Horário</Label>
      <Typography variant="body2">{`${start.toLocaleTimeString()} até ${end.toLocaleTimeString()}`}</Typography>
    </DataContainer>

    {isMonitor ? (
      <ButtonsContainer>
        <ChangeStatusButton variant="text" onClick={handleRefuse}>
          Recusar
        </ChangeStatusButton>
        <ChangeStatusButton onClick={handleAccept}>Aceitar</ChangeStatusButton>
      </ButtonsContainer>
    ) : (
      <ButtonContainer>
        <Button variant="text" color="primary" onClick={handleClose}>
          Fechar
        </Button>
      </ButtonContainer>
    )}
  </>
);

export default PendingScheduleModalContent;
