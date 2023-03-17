import {
  DoneTypography,
  NotDoneTypography,
  ScheduleContainer,
  ElementContainer,
  ConfirmationButtonContainer,
  ConfirmationButton,
  NegationButton,
} from '../styles';
import { Typography } from '@mui/material';
import { TScheduleEnding } from '../../../service/requests/useGetSchedulesEndingRequest/types';
import { CheckCircleRounded, CancelRounded } from '@mui/icons-material';
import { SchedulesStatus } from '../../../utils/constants';
import { CircularProgress } from '@mui/material';

type Props = {
  schedule: TScheduleEnding;
  handleClickDone(schedule: TScheduleEnding): void;
  handleClickNotDone(schedule: TScheduleEnding): void;
  isLoadingUpdate: boolean;
  selectedSchedule?: TScheduleEnding;
};

const ScheduleElement = ({
  schedule,
  isLoadingUpdate,
  selectedSchedule,
  handleClickDone,
  handleClickNotDone,
}: Props) => {
  return (
    <ScheduleContainer>
      <ElementContainer>
        <Typography variant="caption">Aluno</Typography>
        <Typography variant="subtitle1">{schedule.name}</Typography>
      </ElementContainer>
      <ElementContainer>
        <Typography variant="caption">Data</Typography>
        <Typography variant="subtitle1">{schedule.date}</Typography>
      </ElementContainer>
      <ElementContainer>
        <Typography variant="caption">Horário</Typography>
        <Typography variant="subtitle1">{`${schedule.startHour} até ${schedule.endHour}`}</Typography>
      </ElementContainer>
      <ConfirmationButtonContainer>
        {schedule.status === SchedulesStatus.CONFIRMED ? (
          <>
            {selectedSchedule?.id === schedule.id && isLoadingUpdate ? (
              <CircularProgress />
            ) : (
              <>
                <NegationButton
                  disabled={isLoadingUpdate}
                  onClick={() => handleClickNotDone(schedule)}
                  sx={{
                    '&.Mui-disabled': {
                      background: '#DC333366',
                      color: '#fff',
                    },
                  }}
                >
                  Não realizada
                </NegationButton>
                <ConfirmationButton
                  disabled={isLoadingUpdate}
                  onClick={() => handleClickDone(schedule)}
                >
                  Realizada
                </ConfirmationButton>
              </>
            )}
          </>
        ) : schedule.status === SchedulesStatus.REALIZED ? (
          <>
            <CheckCircleRounded color="primary" />
            <DoneTypography>Realizada</DoneTypography>
          </>
        ) : (
          <>
            <CancelRounded color="error" />
            <NotDoneTypography>Não realizada</NotDoneTypography>
          </>
        )}
      </ConfirmationButtonContainer>
    </ScheduleContainer>
  );
};

export default ScheduleElement;
