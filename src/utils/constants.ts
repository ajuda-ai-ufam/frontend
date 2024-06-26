import { TEventType } from '../service/requests/useGetSchedulesRequest/types';

export const TOKEN_KEY = '@super-monitoria-token';

export enum CodeTypeEnum {
  EMAIL = 1,
  RESET_PASSWORD = 2,
}

export enum SidebarItemEnum {
  EDIT_PROFILE = 'edit-profile',
  HOME = 'home',
  SUBJECTS = 'subjects',
  EDIT_MONITORING = 'edit-monitoring',
  EXTERNAL_MONITORING = 'external-monitoring',
  SCHEDULES = 'schedules',
  MONITOR_REQUESTS = 'monitor-requests',
  LOGOUT = 'logout',
  SCHEDULES_HISTORIC = 'schedules-historic',
  PROFESSOR_HOME = 'professor-home',
}

export enum TypeUserEnum {
  STUDENT = 1,
  PROFESSOR = 2,
  COORDINATOR = 3,
}

export const UserRole = {
  [TypeUserEnum.STUDENT]: 'Aluno(a)',
  [TypeUserEnum.PROFESSOR]: 'Professor(a)',
  [TypeUserEnum.COORDINATOR]: 'Coordenador(a)',
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
export const TypeMonitoringStatusTranslate = {
  [TypeMonitoringStatus.PENDING]: 'Aguardando aprovação',
  [TypeMonitoringStatus.APPROVED]: 'Aceito',
  [TypeMonitoringStatus.AVAILABLE]: 'Disponível',
  [TypeMonitoringStatus.FINISHED]: 'Finalizada',
  [TypeMonitoringStatus.REJECTED]: 'Rejeitada',
};

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
  RECEIVE_HELP = 'Serei ajudado(a)',
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
