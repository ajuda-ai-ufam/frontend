import { useMemo } from 'react';
import {
  TSchedules,
  TGetSchedulesHistoricRequestResponse,
} from '../../../service/requests/useGetSchedulesHistoricRequest/types';

import { TFormatedSchedules } from './types';

const useFormatSchedules = (
  response?: TGetSchedulesHistoricRequestResponse
) => {
  const formatDateType = (schedule: TSchedules) => ({
    ...schedule,
    startDate: new Date(schedule.startDate),
    endDate: new Date(schedule.endDate),
  });

  const groupSchedulesByDate = (
    groups: Map<string, TSchedules[]>,
    schedule: TSchedules
  ) => {
    const scheduleGroup = schedule.startDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    const groupsSchedules = [...(groups.get(scheduleGroup) || []), schedule];
    groups.set(scheduleGroup, groupsSchedules);
    return groups;
  };

  const capitalize = (word?: string) =>
    word ? word.charAt(0).toUpperCase() + word.slice(1) : '';

  const schedules: TFormatedSchedules[] = useMemo(() => {
    if (!response?.data?.length) return [];

    const data = response.data.map(formatDateType);

    const schedulesGroupMap = data.reduce(
      groupSchedulesByDate,
      new Map<string, TSchedules[]>()
    );

    const formatedSchedules: TFormatedSchedules[] = [];
    schedulesGroupMap.forEach((value, key) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [weekDay, day, prep, month, prep2, year] = key.split(' ');

      formatedSchedules.push({
        year: capitalize(year),
        day: Number(day),
        weekDay: capitalize(weekDay.split('-')[0].split(',')[0]),
        month: capitalize(month),
        events: value,
      });
    });

    return formatedSchedules;
  }, [response]);

  return {
    schedules,
  };
};

export default useFormatSchedules;
