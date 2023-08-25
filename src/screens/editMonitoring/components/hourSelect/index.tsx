import { Typography, MenuItem, SelectChangeEvent } from '@mui/material';
import {
  DayContainer,
  SwitchContainer,
  HoursContainer,
  ReplicateButton,
  ReplicateButtonContainer,
  DisableContainer,
  StyledSelect,
  SwitchTypography,
  StyledSwitch,
} from './styles';
import { START_HOURS_OPTIONS, END_HOURS_OPTIONS } from '../../hooks/contants';
import { TWeekDayAvailabilityState } from '../../hooks/types';
import { TextField } from '../../../../components/textField';

type Props = {
  weekDay: TWeekDayAvailabilityState;
  handleSwitchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSelectStartChange(event: SelectChangeEvent<unknown>): void;
  handleSelectEndChange(event: SelectChangeEvent<unknown>): void;
  handleReplicate(event: React.MouseEvent<HTMLButtonElement>): void;
};

const HourSelect = ({
  weekDay,
  handleSwitchChange,
  handleSelectStartChange,
  handleSelectEndChange,
  handleReplicate,
}: Props) => {
  return (
    <>
      <DayContainer>
        <SwitchContainer>
          <SwitchTypography>{weekDay.name}</SwitchTypography>
          <StyledSwitch
            id={String(weekDay.weekDay)}
            checked={weekDay.isSelected}
            onChange={handleSwitchChange}
          />
        </SwitchContainer>

        <HoursContainer>
          <DisableContainer disable={!weekDay.isSelected}>
            <Typography variant="body1" sx={{ width: '25px' }}>
              de
            </Typography>

            <StyledSelect
              name={weekDay.weekDay.toString()}
              displayEmpty
              value={weekDay.fromHourIndex.toString()}
              onChange={handleSelectStartChange}
              input={<TextField />}
              renderValue={(selected) =>
                Number(selected) === -1 ? (
                  <Typography variant="body1">Não atenderei</Typography>
                ) : (
                  <Typography variant="body1">
                    {START_HOURS_OPTIONS[Number(selected)]}
                  </Typography>
                )
              }
            >
              {weekDay.isSelected ? (
                [
                  ...START_HOURS_OPTIONS.map((h, index) => (
                    <MenuItem key={index} value={index}>
                      {h}
                    </MenuItem>
                  )),
                ]
              ) : (
                <></>
              )}
            </StyledSelect>
          </DisableContainer>
          <DisableContainer disable={weekDay.fromHourIndex < 0}>
            <Typography sx={{ width: '25px' }} variant="body1">
              até
            </Typography>
            <StyledSelect
              name={weekDay.weekDay.toString()}
              displayEmpty
              value={weekDay.toHourIndex.toString()}
              onChange={handleSelectEndChange}
              input={<TextField />}
              renderValue={(selected) =>
                Number(selected) === -1 ? (
                  <Typography variant="body1">Não atenderei</Typography>
                ) : (
                  <Typography variant="body1">
                    {END_HOURS_OPTIONS[Number(selected)]}
                  </Typography>
                )
              }
            >
              {[
                ...END_HOURS_OPTIONS.map((h, index) =>
                  index > weekDay.fromHourIndex ? (
                    <MenuItem key={index} value={index}>
                      {h}
                    </MenuItem>
                  ) : (
                    <></>
                  )
                ),
              ]}
            </StyledSelect>
          </DisableContainer>
          <ReplicateButtonContainer>
            <ReplicateButton
              disable={weekDay.toHourIndex < 0}
              id={String(weekDay.weekDay)}
              onClick={handleReplicate}
            >
              Replicar horário
            </ReplicateButton>
          </ReplicateButtonContainer>
        </HoursContainer>
      </DayContainer>
    </>
  );
};

export default HourSelect;
