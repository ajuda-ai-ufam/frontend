export type TWeekDayAvailabilityState = {
  weekDay: number;
  label: string;
  name: string;
  isSelected: boolean;
  fromHourIndex: number;
  toHourIndex: number;
};

export const SAME_AVAILABILITY_INITIAL_STATE: TWeekDayAvailabilityState = {
  weekDay: -1,
  label: 'Selecionados',
  name: 'Disponível',
  isSelected: false,
  fromHourIndex: -1,
  toHourIndex: -1,
};

export const WEEK_DAY_AVAILABILITY_INITIAL_STATE: TWeekDayAvailabilityState[] =
  [
    {
      weekDay: 0,
      label: 'D',
      name: 'Domingo',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 1,
      label: 'S',
      name: 'Segunda',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 2,
      label: 'T',
      name: 'Terça',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 3,
      label: 'Q',
      name: 'Quarta',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 4,
      label: 'Q',
      name: 'Quinta',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 5,
      label: 'S',
      name: 'Sexta',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
    {
      weekDay: 6,
      label: 'S',
      name: 'Sábado',
      isSelected: false,
      fromHourIndex: -1,
      toHourIndex: -1,
    },
  ];

export const HOUR_OPTIONS = [
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
