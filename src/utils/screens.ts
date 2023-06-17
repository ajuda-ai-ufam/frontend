export const SCREENS = {
  SCHEDULES: '/schedules',
  SCHEDULES_HISTORIC: '/schedules-historic',
  CODE_VERIFICATION: '/code-verification',
  HOME: '/subjects',
  LOGIN: '/login',
  REGISTER: '/register',
  CREATE_STUDENT: '/register/student',
  CREATE_PROFESSOR: '/register/professor',
  SUBJECTS: '/subjects',
  SUBJECT_DETAILS: '/subjects/:id',
  MONITOR_REQUESTS: '/monitor-requests',
  LANDING_PAGE: '/',
  RESET_PASSWORD_EMAIL: '/reset-password/email',
  RESET_PASSWORD: '/reset-password',
};

export const NOT_LOGGED_SCREENS = [
  '/code-verification',
  '/',
  '/login',
  '/register',
  '/register/student',
  '/register/professor',
  '/about',
  '/reset-password/email',
  '/reset-password',
];
