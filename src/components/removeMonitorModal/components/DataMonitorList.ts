import { TSubjectMonitor } from '../../../service/requests/useGetSubject/types';

const dataMonitorList = (selectedMonitor: TSubjectMonitor) => {
  const dataList = {
    data: [
      { label: 'Curso', value: selectedMonitor.course.name },
      { label: 'Monitor(a)', value: selectedMonitor.name },
      { label: 'Professor(a)', value: selectedMonitor.responsable.name },
      { label: 'E-mail', value: selectedMonitor.email },
      { label: 'Linkedin', value: selectedMonitor.linkedin || '-' },
      { label: 'Whatsapp', value: selectedMonitor.whatsapp || '-' },
    ],
  };
  return dataList;
};

export type TMonitorDataList = {
  data: { label: string; value: string }[];
};

export default dataMonitorList;
