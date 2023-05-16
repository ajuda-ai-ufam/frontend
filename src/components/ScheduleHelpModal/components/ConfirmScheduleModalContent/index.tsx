import { Typography } from '@mui/material';
import { useMemo } from 'react';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../../service/requests/useGetSubject/types';
import { ButtonsContainer, StyledButton } from '../../styles';
import { DataContainer, Label } from './styles';

type Props = {
  availableHours: string[];
  availableMonitors: TSubjectMonitor[];
  description: string;
  selectedDate: moment.Moment | null;
  selectedHourIndex: number;
  selectedProfessorId: number;
  selectedMonitorId: number;
  subject: TCompleteSubject;
  handleConfirmSchedule(): void;
  handleEditData(): void;
};

const ConfirmScheduleModalContent = ({
  availableHours,
  availableMonitors,
  description,
  selectedDate,
  selectedHourIndex,
  selectedMonitorId,
  selectedProfessorId,
  subject,
  handleConfirmSchedule,
  handleEditData,
}: Props) => {
  const confirmData = useMemo(() => {
    const data = [
      {
        label: 'Disciplina',
        value: subject.name,
      },
    ];

    if (selectedProfessorId !== -1) {
      data.push({
        label: 'Professor(a)',
        value:
          subject.responsables.find(
            (subjectResponsible) =>
              subjectResponsible.professor.user.id === selectedProfessorId
          )?.professor.user.name || '',
      });
    }

    if (selectedMonitorId !== -1) {
      data.push({
        label: 'Monitor(a)',
        value:
          availableMonitors.find((monitor) => monitor.id === selectedMonitorId)
            ?.name || '',
      });
    }

    if (selectedDate) {
      data.push({
        label: 'Data',
        value: selectedDate.format('DD/MM/YYYY'),
      });
    }

    if (selectedHourIndex !== -1) {
      data.push({
        label: 'Horário',
        value: availableHours[selectedHourIndex],
      });
    }

    data.push({
      label: 'Descrição',
      value: description || '-',
    });

    return data;
  }, [selectedProfessorId, selectedMonitorId, selectedDate, selectedHourIndex]);

  return (
    <>
      <Typography variant="h4">Novo agendamento</Typography>
      <Typography variant="body1">Você confirma este agendamento?</Typography>

      {confirmData.map((data) => (
        <DataContainer key={data.label}>
          <Label>{data.label}</Label>
          <Typography variant="body2">{data.value}</Typography>
        </DataContainer>
      ))}

      <ButtonsContainer>
        <StyledButton variant="text" onClick={handleEditData}>
          Não, voltar e corrigir
        </StyledButton>

        <StyledButton onClick={handleConfirmSchedule} width="230px">
          Sim, confirmo
        </StyledButton>
      </ButtonsContainer>
    </>
  );
};

export default ConfirmScheduleModalContent;
