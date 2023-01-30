import { Typography } from '@mui/material';
import { Button } from '../../../../components/button';
import {
  ButtonContainer,
  ButtonsContainer,
  DataContainer,
  Label,
} from '../ScheduleDetailsModal/styles';

type Props = {
  name: string;
  course: string;
  subject: string;
  start: Date;
  isMonitor: boolean;
  handleClose(): void;
};

const PendingScheduleModalContent = ({
  name,
  course,
  subject,
  start,
  isMonitor,
  handleClose,
}: Props) => (
  <>
    <Typography variant="h4">Requisição de agendamento</Typography>
    <Typography variant="body1">
      {isMonitor
        ? 'Este agendamento encontra-se no status "Pendente". Ao aceitá-lo, o aluno receberá um e-mail informando que o agendamento está confirmado.'
        : 'Este agendamento encontra-se no status "Aguardando confirmação". Quando o monitor aceitá-lo você receberá um e-mail informando que o agendamento está confirmado'}
    </Typography>

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
      <Label>Data</Label>
      <Typography variant="body2">{start.toLocaleDateString()}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Horário</Label>
      <Typography variant="body2">{start.toLocaleTimeString()}</Typography>
    </DataContainer>

    {/* TODO - Add handles para fazer requisições */}
    {isMonitor ? (
      <ButtonsContainer>
        <Button variant="text" color="primary" onClick={handleClose}>
          Recusar
        </Button>
        <Button color="primary" onClick={handleClose}>
          Aceitar
        </Button>
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
