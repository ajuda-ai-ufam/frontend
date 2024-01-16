import {
  Autocomplete,
  CircularProgress,
  FormHelperText,
  MenuItem,
  Select,
  TextField as TextFieldMUI,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import theme from '../../../../utils/theme';
import { TextField } from '../../../textField';
import { ButtonsContainer, StyledButton } from '../../styles';
import { TUseSchedulesHook } from '../../types';
import {
  DateFieldsContainer,
  DateTextField,
  DescriptionContainer,
  DescriptionTextField,
  Placeholder,
} from './styles';

const FormScheduleModalContent = ({
  availableHours,
  availableMonitors,
  description,
  isLoadingMonitorAvailableTimes,
  monitorAvailableTimes,
  selectedDate,
  selectedHourIndex,
  selectedMonitorId,
  selectedProfessorId,
  subject,
  options,
  selectedTopic,
  topicInputValue,
  isLoadingTopics,
  handleChangeTopicInput,
  handleChangeTopicValue,
  handleChangeDate,
  handleChangeDescription,
  handleChangeHour,
  handleChangeMonitor,
  handleChangeProfessor,
  handleClose,
  handleShowConfirmation,
}: TUseSchedulesHook) => {
  const shouldExpandDescriptionLines = useMediaQuery(
    theme.breakpoints.down('sm')
  );

  return (
    <>
      <Typography variant="h4">Novo agendamento</Typography>
      <Typography variant="body1">
        Complete as informações abaixo para agendar a monitoria na disciplina{' '}
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
                (prof) => prof.professor.user.id === Number(selected[0])
              )?.professor.user.name || ''}
            </Typography>
          )
        }
      >
        {[
          <MenuItem key={-1} value={-1}>
            Selecionar Professor(a)
          </MenuItem>,
          ...subject.responsables.map((professor) => (
            <MenuItem
              key={professor.professor.user.id}
              value={professor.professor.user.id}
            >
              {professor.professor.user.name}
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
            !monitorAvailableTimes?.find(
              (time) => time.week_day === day.isoWeekday() - 1
            )
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
              Selecionar horário
            </MenuItem>,
            ...availableHours.map((hour, index) => (
              <MenuItem key={index} value={index}>
                {hour}
              </MenuItem>
            )),
          ]}
        </Select>
      </DateFieldsContainer>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        disabled={selectedHourIndex === -1}
        renderInput={(params) => (
          <TextFieldMUI
            {...params}
            placeholder="Buscar assunto"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoadingTopics && (
                    <CircularProgress color="primary" size={20} />
                  )}{' '}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        noOptionsText="Carregando..."
        value={selectedTopic}
        inputValue={topicInputValue}
        onInputChange={handleChangeTopicInput}
        onChange={handleChangeTopicValue}
      />

      <DescriptionContainer>
        <DescriptionTextField
          value={description}
          disabled={selectedHourIndex === -1}
          onChange={handleChangeDescription}
          minRows={shouldExpandDescriptionLines ? 10 : 4}
        />
        <FormHelperText sx={{ textAlign: 'right', paddingRight: '10px' }}>
          {selectedHourIndex !== -1 && `${description.length} / 500`}
        </FormHelperText>
      </DescriptionContainer>

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
};

export default FormScheduleModalContent;
