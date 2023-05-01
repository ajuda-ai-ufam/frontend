import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { TMonitorAvailableTime } from '../../../../service/requests/useGetMonitorAvailableTimesRequest/types';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../../service/requests/useGetSubject/types';
import { TextField } from '../../../textField';
import { ButtonsContainer, StyledButton } from '../../styles';
import { DateFieldsContainer, DateTextField, Placeholder } from './styles';

type Props = {
  availableHours: string[];
  availableMonitors: TSubjectMonitor[];
  isLoadingMonitorAvailableTimes: boolean;
  monitorAvailableTimes?: TMonitorAvailableTime[];
  selectedDate: moment.Moment | null;
  selectedHourIndex: number;
  selectedProfessorId: number;
  selectedMonitorId: number;
  subject: TCompleteSubject;
  handleClose(): void;
  handleChangeDate(value: moment.Moment | null): void;
  handleChangeHour(event: SelectChangeEvent<string[]>): void;
  handleChangeMonitor(event: SelectChangeEvent<string[]>): void;
  handleChangeProfessor(event: SelectChangeEvent<string[]>): void;
  handleShowConfirmation(): void;
};

const FormScheduleModalContent = ({
  availableHours,
  availableMonitors,
  isLoadingMonitorAvailableTimes,
  monitorAvailableTimes,
  selectedDate,
  selectedHourIndex,
  selectedMonitorId,
  selectedProfessorId,
  subject,
  handleChangeDate,
  handleChangeHour,
  handleChangeMonitor,
  handleChangeProfessor,
  handleClose,
  handleShowConfirmation,
}: Props) => (
  <>
    <Typography variant="h4">Novo agendamento</Typography>
    <Typography variant="body1">
      Complete as informações abaixo para o agendar a monitoria na disciplina{' '}
      <strong>{subject.name}</strong>
    </Typography>

    <Select
      disabled={!subject.responsables.length}
      displayEmpty
      value={[selectedProfessorId.toFixed()]}
      onChange={handleChangeProfessor}
      input={<TextField />}
      renderValue={(selected: string[]) =>
        Number(selected) === -1 ? (
          <Placeholder>Selecionar Professor(a)</Placeholder>
        ) : (
          <Typography>
            {subject.responsables.find(
              (prof) => prof.id === Number(selected[0])
            )?.professor.user.name || ''}
          </Typography>
        )
      }
    >
      {[
        <MenuItem key={-1} value={-1}>
          Selecionar Professor(a)
        </MenuItem>,
        ...subject.responsables.map((subjectResponsible) => (
          <MenuItem
            key={subjectResponsible.professor.user.id}
            value={subjectResponsible.professor.user.id}
          >
            {subjectResponsible.professor.user.name}
          </MenuItem>
        )),
      ]}
    </Select>

    <Select
      disabled={selectedProfessorId === -1}
      displayEmpty
      value={[selectedMonitorId.toFixed()]}
      onChange={handleChangeMonitor}
      input={<TextField />}
      renderValue={(selected: string[]) =>
        Number(selected) === -1 ? (
          <Placeholder>Selecionar Monitor(a)</Placeholder>
        ) : (
          <Typography>
            {availableMonitors.find(
              (monitor) => monitor.id === Number(selected[0])
            )?.name || ''}
          </Typography>
        )
      }
    >
      {[
        <MenuItem key={-1} value={-1}>
          Selecionar Monitor(a)
        </MenuItem>,
        ...availableMonitors.map((monitor) => (
          <MenuItem key={monitor.id} value={monitor.id}>
            {monitor.name}
          </MenuItem>
        )),
      ]}
    </Select>

    <DateFieldsContainer>
      <DesktopDatePicker
        disabled={selectedMonitorId === -1}
        disablePast
        inputFormat="DD/MM/YYYY"
        value={selectedDate}
        onChange={handleChangeDate}
        renderInput={(params) => (
          <DateTextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: 'Selecione a data',
            }}
          />
        )}
        loading={isLoadingMonitorAvailableTimes}
        shouldDisableDate={(day) =>
          !monitorAvailableTimes?.find((time) => time.week_day === day.day())
        }
      />

      <Select
        sx={{ width: '100%' }}
        disabled={selectedDate === null}
        displayEmpty
        value={[selectedHourIndex.toFixed()]}
        onChange={handleChangeHour}
        input={<TextField />}
        renderValue={(selected: string[]) =>
          Number(selected) === -1 ? (
            <Placeholder>Selecionar horário</Placeholder>
          ) : (
            <Typography>{availableHours[selectedHourIndex] || ''}</Typography>
          )
        }
      >
        {[
          <MenuItem key={-1} value={-1}>
            Selecionar Monitor
          </MenuItem>,
          ...availableHours.map((hour, index) => (
            <MenuItem key={index} value={index}>
              {hour}
            </MenuItem>
          )),
        ]}
      </Select>
    </DateFieldsContainer>

    <ButtonsContainer>
      <StyledButton variant="text" onClick={handleClose}>
        Cancelar
      </StyledButton>

      <StyledButton
        onClick={handleShowConfirmation}
        disabled={selectedHourIndex === -1}
        width="230px"
      >
        Concluir agendamento
      </StyledButton>
    </ButtonsContainer>
  </>
);

export default FormScheduleModalContent;
