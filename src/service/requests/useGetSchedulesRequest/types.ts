import { SchedulesStatus } from '../../../utils/constants';
import { TUser } from '../useGetAllMonitorRequests/types';

export type TCourse = {
  id: number;
  name: string;
  code: string;
};

export type TStudent = {
  user_id: number;
  description: string;
  enrollment: string;
  course_id: number;
  contact_email: string;
  whatsapp?: string;
  linkedin?: string;
  course: TCourse;
  user: TUser;
};

export type TSubject = {
  id: number;
  name: string;
  code: string;
  course_id: number;
};

export type TMonitor = {
  id: number;
  id_status: number;
  responsible_professor_id: number;
  student_id: number;
  subject_id: number;
  student: TStudent;
  subject: TSubject;
};

export type TSchedules = {
  id: number;
  start: Date;
  end: Date;
  description: string;
  id_status: number;
  student_id: number;
  monitor_id: number;
  monitor: TMonitor;
  student: TStudent;
  is_monitoring: boolean;
  schedule_topic_id: number;
  ScheduleTopics: TScheduleTopic;
};

export type TScheduleTopic = {
  id: number;
  name: string;
};

export type TGetSchedulesRequestResponse = {
  data: TSchedules[];
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
};

export type TGetSchedulesRequestErrorResponse = {
  statusCode: number;
  message: string;
};

export enum TEventType {
  MONITOR = 'monitor',
  STUDENT = 'student',
}

export type TGetScheduleRequestParams = {
  page?: number;
  status?: SchedulesStatus[];
  eventType?: TEventType;
};
