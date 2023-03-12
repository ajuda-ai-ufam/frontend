export type TGetSchedulesErrorResponse = {
  statusCode: number;
  message: string;
};
export type TSchedulesEndingResponse = {
  data: TSchedule[];
};

export type TSchedule = {
  id: number;
  endDate: Date;
  startDate: Date;
  status: number;
  monitor: TMonitor;
  responsibleProfessor: TResponsibleProfessor;
  student: TStudent;
  subject: TSubject;
};

export type TScheduleEnding = {
  name: string;
  date: string;
  startHour: string;
  endHour: string;
  status: number
  id: number;
};

export type TMonitor = {
  id: number;
  userId: number;
  enrollment: string;
  name: string;
  email: string;
};

export type TResponsibleProfessor = {
  id: number;
  name: string;
  email: string;
};

export type TStudent = {
  id: number;
  enrollment: string;
  name: string;
  email: string;
};

export type TSubject = {
  id: number;
  name: string;
  course: {
    id: number;
    name: string;
  };
};
