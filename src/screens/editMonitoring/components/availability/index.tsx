import { TWeekDayAvailabilityState } from '../../hooks/types';
import { WEEK_DAY_AVAILABILITY_INITIAL_STATE } from '../../hooks/contants';
import { Typography, SelectChangeEvent } from '@mui/material';
import HourSelect from '../hourSelect';
import {
  AvailabilityContainer,
  AvailabilityHeader,
  AvailabilityManageContainer,
  TypographyNoSetting,
  ShowAvailabilityContainer,
  ShowDay,
  ShowHourContainer,
  DayNameContainer,
  HoursContainer,
} from '../../styles';
import { TAvailability } from '../../../../service/requests/useGetMonitorRequest/types';

type Props = {
  hasAvailability: boolean;
  weekDayAvailability: TWeekDayAvailabilityState[];
  editMode: boolean;
  monitorAvailabilitySaved?: TAvailability[];
  handleSwitchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSelectStartChange(event: SelectChangeEvent<unknown>): void;
  handleSelectEndChange(event: SelectChangeEvent<unknown>): void;
  handleReplicate(event: React.MouseEvent<HTMLButtonElement>): void;
  handleClose(): void;
  isOpen: boolean;
};

const Availability = ({
  hasAvailability,
  weekDayAvailability,
  editMode,
  monitorAvailabilitySaved,
  handleSwitchChange,
  handleSelectStartChange,
  handleSelectEndChange,
  handleReplicate,
}: Props) => {
  return (
    <AvailabilityContainer>
      <AvailabilityHeader>
        <Typography variant="h4">Sua disponibilidade</Typography>
        <Typography variant="body1">
          {editMode
            ? 'Selecione o período que você está disponível na disciplina de acordo com o dia da semana, assim os demais usuários poderão agendar um horário com você.'
            : 'Abaixo estão listados os dias em que você está disponível para realizar os atendimentos.'}
        </Typography>
      </AvailabilityHeader>
      {editMode ? (
        <AvailabilityManageContainer>
          {weekDayAvailability.map((weekDay) => (
            <HourSelect
              weekDay={weekDay}
              handleSwitchChange={handleSwitchChange}
              handleSelectStartChange={handleSelectStartChange}
              handleSelectEndChange={handleSelectEndChange}
              handleReplicate={handleReplicate}
            />
          ))}
        </AvailabilityManageContainer>
      ) : (
        <>
          {hasAvailability ? (
            <ShowAvailabilityContainer>
              {monitorAvailabilitySaved?.map((day) => (
                <ShowDay>
                  <DayNameContainer>
                    <Typography sx={{ width: '112px' }} variant="subtitle1">
                      {WEEK_DAY_AVAILABILITY_INITIAL_STATE[day.week_day].name}
                    </Typography>
                  </DayNameContainer>
                  <HoursContainer>
                    <Typography variant="subtitle1">de</Typography>
                    <ShowHourContainer>
                      <Typography variant="subtitle1">{day.start}</Typography>
                    </ShowHourContainer>
                    <Typography variant="subtitle1">até</Typography>
                    <ShowHourContainer>
                      <Typography variant="subtitle1">{day.end}</Typography>
                    </ShowHourContainer>
                  </HoursContainer>
                </ShowDay>
              ))}
            </ShowAvailabilityContainer>
          ) : (
            <TypographyNoSetting>
              Não há nenhum horário disponível cadastrado, para alterar isso
              você pode clicar em Editar.
            </TypographyNoSetting>
          )}
        </>
      )}
    </AvailabilityContainer>
  );
};

export default Availability;
