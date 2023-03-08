import { TSchedules } from '../../../../service/requests/useGetSchedulesHistoricRequest/types';
import useGetLoggedUser from '../../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../../utils/constants';
import {
  Container,
  DataField,
  EventDataContainer,
  Label,
  Value,
} from './styles';

type Props = {
  schedule: TSchedules;
  handleEventClick(schedule: TSchedules): void;
};

const EventItem = ({ schedule, handleEventClick }: Props) => {
  const user = useGetLoggedUser();

  const startTime = schedule.startDate.toTimeString().substring(0, 5);
  const endTime = schedule.endDate.toTimeString().substring(0, 5);

  return (
    <Container onClick={() => handleEventClick(schedule)}>
      <EventDataContainer>
        <DataField>
          <Label>Monitor(a)</Label>
          <Value>{`${schedule.monitor.enrollment} - ${schedule.monitor.name}`}</Value>
        </DataField>

        <DataField>
          <Label>Aluno(a)</Label>
          <Value>{`${schedule.student.enrollment} - ${schedule.student.name}`}</Value>
        </DataField>

        <DataField>
          <Label>Horário</Label>
          <Value>
            {startTime} até {endTime}
          </Value>
        </DataField>

        <DataField>
          {user?.type_user_id === TypeUserEnum.COORDINATOR ? (
            <Label>Professor(a) Responsável</Label>
          ) : (
            <Label>Disciplina</Label>
          )}
          {user?.type_user_id === TypeUserEnum.COORDINATOR ? (
            <Value>{schedule.responsibleProfessor.name}</Value>
          ) : (
            <Value>{schedule.subject.name}</Value>
          )}
        </DataField>
      </EventDataContainer>
    </Container>
  );
};

export default EventItem;
