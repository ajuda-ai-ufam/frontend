import { TSchedules } from '../../../../service/requests/useGetSchedulesRequest/types';
import {
  SchedulesStatus,
  ScheduleStatusTranslate,
} from '../../../../utils/constants';
import {
  Container,
  DataField,
  EventDataContainer,
  EventTypeContainer,
  Label,
  StatusIcon,
  StatusValue,
  Value,
} from './styles';

type Props = {
  schedule: TSchedules;
  handleEventClick(schedule: TSchedules): void;
};

const EventItem = ({ schedule, handleEventClick }: Props) => {
  const isMonitor = schedule.is_monitoring;

  const name = isMonitor
    ? schedule.student.user.name
    : schedule.monitor.student.user.name;
  const nameField = isMonitor ? 'Aluno(a)' : 'Monitor(a)';

  const participation = isMonitor ? 'Vou ajudar' : 'Serei ajudado(a)';

  const status =
    !isMonitor && schedule.id_status === SchedulesStatus.PENDING
      ? 'Aguardando confirmação'
      : ScheduleStatusTranslate[schedule.id_status as SchedulesStatus];

  const startTime = schedule.start.toTimeString().substring(0, 5);
  const endTime = schedule.end.toTimeString().substring(0, 5);

  return (
    <Container onClick={() => handleEventClick(schedule)}>
      <EventTypeContainer monitor={isMonitor}>
        <DataField>
          <DataField>
            <Label>Participação</Label>
            <Value>{participation}</Value>
          </DataField>
        </DataField>
      </EventTypeContainer>

      <EventDataContainer>
        <DataField>
          <Label>{nameField}</Label>
          <Value>{name}</Value>
        </DataField>

        <DataField>
          <Label>Horário</Label>
          <Value>
            {startTime} até {endTime}
          </Value>
        </DataField>

        <DataField>
          <Label>Status</Label>
          <StatusValue>
            <StatusIcon status={schedule.id_status} monitor={isMonitor} />
            <Value>{status}</Value>
          </StatusValue>
        </DataField>
      </EventDataContainer>
    </Container>
  );
};

export default EventItem;
