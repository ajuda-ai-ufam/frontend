import { Pagination, Typography } from '@mui/material';
import LoadingAnimation from '../../../../components/loadingAnimation';
import { TSchedules } from '../../../../service/requests/useGetSchedulesHistoricRequest/types';
import theme from '../../../../utils/theme';
import { TFormatedSchedules } from '../../hooks/types';
import DayEventItem from '../DayEventItem';
import { Container, FallbackContainer } from './styles';

type Props = {
  schedules: TFormatedSchedules[];
  page: number;
  isLoading: boolean;
  totalPages: number;
  error?: string;
  handleEventClick(schedule: TSchedules): void;
  handleChangePage(event: React.ChangeEvent<unknown>, page: number): void;
  typeMonitoring: string;
};

const EventList = ({
  isLoading,
  schedules,
  page,
  error,
  totalPages,
  handleEventClick,
  handleChangePage,
  typeMonitoring,
}: Props) => {
  if (isLoading) {
    return (
      <FallbackContainer>
        <LoadingAnimation />
      </FallbackContainer>
    );
  }

  if (!!error) {
    return (
      <FallbackContainer>
        <Typography variant="body1" color={theme.palette.grey[500]}>
          Ops... Tivemos um problema ao carregar os agendamentos. Tente
          movamente mais tarde.
        </Typography>
      </FallbackContainer>
    );
  }

  if (!schedules.length) {
    return (
      <FallbackContainer>
        <Typography variant="body1" color={theme.palette.grey[500]}>
          Hmm... Parece que não tem nenhum agendamento.
        </Typography>
      </FallbackContainer>
    );
  }

  return (
    <Container>
      {schedules.map((dayEvents) => (
        <DayEventItem
          key={`${dayEvents.day}-${dayEvents.month}-${dayEvents.weekDay}`}
          dayEvent={dayEvents}
          handleEventClick={handleEventClick}
          typeMonitoring={typeMonitoring}
        />
      ))}
      <Pagination
        page={page}
        onChange={handleChangePage}
        count={totalPages}
        color="primary"
      />
    </Container>
  );
};

export default EventList;
