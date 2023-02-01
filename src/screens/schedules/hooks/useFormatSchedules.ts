import { useMemo } from 'react';
import {
  TGetSchedulesRequestResponse,
  TSchedules,
} from '../../../service/requests/useGetSchedulesRequest/types';
import { TFormatedSchedules } from './types';

const useFormatSchedules = (response?: TGetSchedulesRequestResponse) => {
  const formatDateType = (schedule: TSchedules) => ({
    ...schedule,
    start: new Date(schedule.start),
    end: new Date(schedule.end),
  });

  const groupSchedulesByDate = (
    groups: Map<string, TSchedules[]>,
    schedule: TSchedules
  ) => {
    const scheduleGroup = schedule.start.toLocaleDateString('pt-BR', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    const groupsSchedules = [...(groups.get(scheduleGroup) || []), schedule];
    groups.set(scheduleGroup, groupsSchedules);
    return groups;
  };

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

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
      const [weekDay, day, prep, month] = key.split(' ');

      formatedSchedules.push({
        day: Number(day),
        weekDay: capitalize(weekDay.split('-')[0]),
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
