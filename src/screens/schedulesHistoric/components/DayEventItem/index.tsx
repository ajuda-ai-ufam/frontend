import { Typography } from '@mui/material';
import { TSchedules } from '../../../../service/requests/useGetSchedulesHistoricRequest/types';
import theme from '../../../../utils/theme';
import { TFormatedSchedules } from '../../hooks/types';
import EventItem from '../EventItem';
import {
  Container,
  DateContainer,
  EventsContainer,
  DateDayContainer,
} from './styles';

type Props = {
  dayEvent: TFormatedSchedules;
  handleEventClick(schedule: TSchedules): void;
  typeMonitoring: string;
};

const DayEventItem = ({
  dayEvent,
  handleEventClick,
  typeMonitoring,
}: Props) => {
  const { day, weekDay, month, year, events } = dayEvent;

  return (
    <Container>
      <DateContainer>
        <Typography variant="subtitle1">{`${month} ${year}`}</Typography>
        <DateDayContainer>
          <Typography variant="h2">{day}</Typography>
          <Typography variant="body2" color={theme.palette.grey[500]}>
            {weekDay}
          </Typography>
        </DateDayContainer>
      </DateContainer>

      <EventsContainer>
        {events.map((eventItem) => (
          <EventItem
            key={eventItem.id}
            schedule={eventItem}
            handleEventClick={handleEventClick}
            typeMonitoring={typeMonitoring}
          />
        ))}
      </EventsContainer>
    </Container>
  );
};

export default DayEventItem;
