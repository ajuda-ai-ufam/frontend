import { TEventType } from '../service/requests/useGetSchedulesRequest/types';

export const TOKEN_KEY = '@super-monitoria-token';

export enum CodeTypeEnum {
  EMAIL = 1,
  RESET_PASSWORD = 2,
}

export enum SidebarItemEnum {
  SUBJECTS = 'subjects',
  SCHEDULES = 'schedules',
  MONITOR_REQUESTS = 'monitor-requests',
  LOGOUT = 'logout',
  SCHEDULES_HISTORIC = 'schedules-historic',
}

export enum TypeUserEnum {
  STUDENT = 1,
  PROFESSOR = 2,
  COORDINATOR = 3,
}

export const UserRole = {
  [TypeUserEnum.STUDENT]: 'Aluno',
  [TypeUserEnum.PROFESSOR]: 'Professor',
  [TypeUserEnum.COORDINATOR]: 'Coordenador',
};

export enum TypeMonitoringStatus {
  PENDING = 'Pendente',
  APPROVED = 'Aprovada',
  AVAILABLE = 'Disponível',
  FINISHED = 'Finalizada',
  REJECTED = 'Rejeitada',
}

export enum SchedulesStatus {
  PENDING = 1,
  CONFIRMED = 2,
  CANCELED = 3,
  REALIZED = 4,
  NOT_REALIZED = 5,
}

export enum ReponsabilityProfessorStatus {
  PENDING = 'Pendente',
  APPROVED = 'Aprovado',
  ENDED = 'Finalizada',
}

export enum TypeMonitorStatus {
  PENDING = 1,
  APPROVED = 2,
  AVAILABLE = 3,
  FINISHED = 4,
  REJECTED = 5,
}

export const ScheduleStatusTranslate = {
  [SchedulesStatus.PENDING]: 'Pendente',
  [SchedulesStatus.CONFIRMED]: 'Confirmado',
  [SchedulesStatus.CANCELED]: 'Cancelado',
  [SchedulesStatus.REALIZED]: 'Realizada',
  [SchedulesStatus.NOT_REALIZED]: 'Não realizada',
};

export enum SchedulesFilters {
  NEXT_EVENTS = 'Próximos eventos',
  PENDING = 'Pendentes',
  CONFIRMED = 'Confirmados',
  CANCELED = 'Cancelados',
  WAITING_APPROVAL = 'Aguardando confirmação',
  WILL_HELP = 'Vou ajudar',
  RECEIVE_HELP = 'Serei ajudado',
}

export const schedulesFiltersParamConverter = {
  [SchedulesFilters.NEXT_EVENTS]: undefined,
  [SchedulesFilters.PENDING]: SchedulesStatus.PENDING,
  [SchedulesFilters.CONFIRMED]: SchedulesStatus.CONFIRMED,
  [SchedulesFilters.CANCELED]: SchedulesStatus.CANCELED,
  [SchedulesFilters.WAITING_APPROVAL]: SchedulesStatus.PENDING,
  [SchedulesFilters.WILL_HELP]: TEventType.MONITOR,
  [SchedulesFilters.RECEIVE_HELP]: TEventType.STUDENT,
};
