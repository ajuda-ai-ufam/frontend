import {
  TSchedule,
  TScheduleEnding,
  TSchedulesEndingResponse,
} from '../../../service/requests/useGetSchedulesEndingRequest/types';

const useScheduleEndingFormat = (schedules: TSchedulesEndingResponse) => {
  const schedulesEndingFormated: TScheduleEnding[] = [];

  schedules.data.map((schedule: TSchedule) => {
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

    schedulesEndingFormated.push(scheduleEnding);
  });

  return schedulesEndingFormated;
};

export default useScheduleEndingFormat;
