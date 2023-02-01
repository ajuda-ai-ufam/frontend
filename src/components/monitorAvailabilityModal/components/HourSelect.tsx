import { Typography, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { TextField } from '../../textField';
import { HOUR_OPTIONS } from '../hooks/types';
import { Placeholder, Container } from '../styles';

type Props = {
  name: string;
  fromHourIndex: number;
  toHourIndex: number;
  weekDay: number;
  handleFromHourChange(event: SelectChangeEvent<string>): void;
  handleToHourChange(event: SelectChangeEvent<string>): void;
};

const HourSelect = ({
  name,
  fromHourIndex,
  toHourIndex,
  weekDay,
  handleFromHourChange,
  handleToHourChange,
}: Props) => {
  return (
    <>
      <Typography variant="body1">{name}</Typography>

      <Container>
        <Select
          name={weekDay.toString()}
          displayEmpty
          sx={{ minWidth: '124px', maxWidth: '154px' }}
          value={fromHourIndex.toString()}
          onChange={handleFromHourChange}
          input={<TextField />}
          renderValue={(selected: string) =>
            Number(selected) === -1 ? (
              <Placeholder>de</Placeholder>
            ) : (
              <Typography variant="body1">
                {HOUR_OPTIONS[Number(selected)]}
              </Typography>
            )
          }
        >
          {[
            <MenuItem key={-1} value={'-1'}>
              de
            </MenuItem>,
            ...HOUR_OPTIONS.map((h, index) => (
              <MenuItem key={index} value={index}>
                {h}
              </MenuItem>
            )),
          ]}
        </Select>

        <Select
          name={weekDay.toString()}
          displayEmpty
          sx={{ minWidth: '124px', maxWidth: '154px' }}
          value={toHourIndex.toString()}
          onChange={handleToHourChange}
          input={<TextField />}
          renderValue={(selected: string) =>
            Number(selected) === -1 ? (
              <Placeholder>até</Placeholder>
            ) : (
              <Typography variant="body1">
                {HOUR_OPTIONS[Number(selected)]}
              </Typography>
            )
          }
        >
          {[
            <MenuItem key={-1} value={'-1'}>
              até
            </MenuItem>,
            ...HOUR_OPTIONS.map((h, index) => (
              <MenuItem key={index} value={index}>
                {h}
              </MenuItem>
            )),
          ]}
        </Select>
      </Container>
    </>
  );
};

export default HourSelect;
