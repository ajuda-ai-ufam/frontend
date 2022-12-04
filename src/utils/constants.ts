export const TOKEN_KEY = '@super-monitoria-token';

export enum CodeTypeEnum {
  EMAIL = 1,
  RESET_PASSWORD = 2,
}

export enum SidebarItemEnum {
  SUBJECTS = 'subjects',
  CALENDAR = 'calendar',
  MONITOR_REQUESTS = 'monitor-requests',
  LOGOUT = 'logout',
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
