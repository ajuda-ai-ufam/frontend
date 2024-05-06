import { DesktopDatePicker } from '@mui/x-date-pickers';
import {
  DateFieldsContainer,
  DateTextField,
} from '../../../../components/ScheduleHelpModal/components/FormScheduleModalContent/styles';
import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { TextField } from '../../../../components/textField';
import { Placeholder } from '../../styles';
import { HOURS_OPTIONS } from '../../hooks/constants';

type Props = {
  selectedDate: moment.Moment | null;
  handleChangeDate(value: moment.Moment | null): void;
  selectedHourIndex: number;
  handleChangeHour(event: SelectChangeEvent<string[]>): void;
  disable: boolean;
};

const DateInput = ({
  selectedDate,
  handleChangeDate,
  handleChangeHour,
  selectedHourIndex,
  disable,
}: Props) => {
  return (
    <DateFieldsContainer>
      <DesktopDatePicker
        disableFuture
        disabled={disable}
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
      />
      <Select
        disabled={disable}
        sx={{ width: '100%' }}
        value={[selectedHourIndex.toFixed()]}
        onChange={handleChangeHour}
        input={<TextField />}
        renderValue={(selected: string[]) =>
          Number(selected) === -1 ? (
            <Placeholder>Selecionar horário</Placeholder>
          ) : (
            <Typography>{HOURS_OPTIONS[selectedHourIndex] || ''}</Typography>
          )
        }
      >
        {[
          <MenuItem key={-1} value={-1}>
            Selecionar horário
          </MenuItem>,
          HOURS_OPTIONS.map((hour, index) => (
            <MenuItem key={index} value={index}>
              {hour}
            </MenuItem>
          )),
        ]}
      </Select>
    </DateFieldsContainer>
  );
};

export default DateInput;
