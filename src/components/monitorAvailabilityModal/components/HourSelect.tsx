import { Typography, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { TextField } from '../../textField';
import { Placeholder, Container } from '../styles';

type Props = {
  day: string;
  hourDe: string;
  hourAte: string;
  handleHourDe(event: SelectChangeEvent<string>): void;
  handleHourAte(event: SelectChangeEvent<string>): void;
};

const HourSelect = ({
  day,
  hourDe,
  hourAte,
  handleHourDe,
  handleHourAte,
}: Props) => {
  const hourOption = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];
  return (
    <>
      <Typography variant="body1">{day}</Typography>
      <Container>
        <Select
          displayEmpty
          sx={{ minWidth: '124px', maxWidth: '154px' }}
          value={hourDe}
          onChange={handleHourDe}
          input={<TextField />}
          renderValue={(selected: string) =>
            selected !== hourDe ? (
              <Placeholder>de</Placeholder>
            ) : (
              <Typography variant="body1">{selected}</Typography>
            )
          }
        >
          {[
            <MenuItem key={-1} value={'de'}>
              de
            </MenuItem>,
            ...hourOption.map((h) => (
              <MenuItem key={hourOption.indexOf(h)} value={h}>
                {h}
              </MenuItem>
            )),
          ]}
        </Select>
        <Select
          displayEmpty
          sx={{ minWidth: '124px', maxWidth: '154px' }}
          value={hourAte}
          onChange={handleHourAte}
          input={<TextField />}
          renderValue={(selected: string) =>
            selected !== hourAte ? (
              <Placeholder>até</Placeholder>
            ) : (
              <Typography variant="body1">{selected}</Typography>
            )
          }
        >
          {[
            <MenuItem key={-1} value={'ate'}>
              até
            </MenuItem>,
            ...hourOption.map((h) => (
              <MenuItem key={hourOption.indexOf(h)} value={h}>
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
