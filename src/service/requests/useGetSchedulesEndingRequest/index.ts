import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TGetSchedulesErrorResponse,
  TSchedule,
  TScheduleEnding,
  TSchedulesEndingResponse,
} from './types';

const useGetSchedulesEndingRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TScheduleEnding[]>();

  const getSchedulesEnding = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/schedules/ending`);
      const data = response.data as TSchedulesEndingResponse;
      const schedules: TScheduleEnding[] = [];
      data.data.map((schedule: TSchedule) => {
        const dateStart = new Date(schedule.startDate);
        const dateEnd = new Date(schedule.endDate);
        const scheduleEnding = {
          name: schedule.student.name,
          date: dateStart.toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
          startHour: `${dateStart.getUTCHours()}:${
            dateStart.getUTCMinutes() > 10
              ? dateStart.getUTCMinutes()
              : '0' + dateStart.getUTCMinutes()
          }`,
          endHour: `${dateEnd.getUTCHours()}:${
            dateEnd.getUTCMinutes() > 10
              ? dateEnd.getUTCMinutes()
              : '0' + dateEnd.getUTCMinutes()
          }`,
          status: schedule.status,
          id: schedule.id,
        };
        schedules.push(scheduleEnding);
      });

      setData(schedules);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetSchedulesErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during get subject. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getSchedulesEnding,
  };
};

export default useGetSchedulesEndingRequest;
