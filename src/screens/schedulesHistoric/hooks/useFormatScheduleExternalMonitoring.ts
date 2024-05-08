import { useMemo } from 'react';
import { TFormatedSchedulesExternalMonitoring } from './types';
import {
  TExternalMonitoringRequest,
  TExternalMonitorsRequestResponse,
} from '../../../service/requests/useGetExternalMonitoringRequest/types';

const useFormatScheduleExternalMonitoring = (
  response?: TExternalMonitorsRequestResponse
) => {
  const formatDateType = (schedule: TExternalMonitoringRequest) => {
    const AMT_OFFSET = -4;
    const startDate = new Date(schedule.startDate);
    startDate.setHours(startDate.getHours() - AMT_OFFSET);

    const endDate = new Date(schedule.endDate);
    endDate.setHours(endDate.getHours() - AMT_OFFSET);

    return {
      ...schedule,
      startDate,
      endDate,
    };
  };

  const groupSchedulesByDate = (
    groups: Map<string, TExternalMonitoringRequest[]>,
    schedule: TExternalMonitoringRequest
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

  const schedules: TFormatedSchedulesExternalMonitoring[] = useMemo(() => {
    if (!response?.data?.length) return [];

    const data = response.data.map(formatDateType);

    const schedulesGroupMap = data.reduce(
      groupSchedulesByDate,
      new Map<string, TExternalMonitoringRequest[]>()
    );

    const formatedSchedules: TFormatedSchedulesExternalMonitoring[] = [];
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

export default useFormatScheduleExternalMonitoring;
