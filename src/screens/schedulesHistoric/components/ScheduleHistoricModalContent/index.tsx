import { Typography } from '@mui/material';
import { Button } from '../../../../components/button';
import {
  ButtonContainer,
  DataContainer,
  Label,
} from '../ScheduleDetailsModal/styles';

type Props = {
  student: string;
  course: string;
  subject: string;
  topic?: string;
  description: string;
  monitor: string;
  professor: string;
  date: string;
  schedule: string;
  handleClose(): void;
};

const ScheduleHistoricModal = ({
  course,
  date,
  monitor,
  topic,
  description,
  professor,
  schedule,
  student,
  subject,
  handleClose,
}: Props) => (
  <>
    <Typography variant="h4">Detalhes do Agendamento</Typography>
    <Typography variant="body1">
      Aqui você poderá visualizar mais informações sobre a monitoria realizada
    </Typography>

    <DataContainer>
      <Label>Aluno(a)</Label>
      <Typography variant="body2">{student}</Typography>
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
      <Label>Monitor(a)</Label>
      <Typography variant="body2">{monitor}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Professora(a)</Label>
      <Typography variant="body2">{professor}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Data</Label>
      <Typography variant="body2">{date}</Typography>
    </DataContainer>

    <DataContainer>
      <Label>Horário</Label>
      <Typography variant="body2">{schedule}</Typography>
    </DataContainer>

    <ButtonContainer>
      <Button variant="text" color="primary" onClick={handleClose}>
        Fechar
      </Button>
    </ButtonContainer>
  </>
);

export default ScheduleHistoricModal;
