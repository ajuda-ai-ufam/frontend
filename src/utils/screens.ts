export const SCREENS = {
  SCHEDULES: '/schedules',
  SCHEDULES_HISTORIC: '/schedules-historic',
  CODE_VERIFICATION: '/code-verification',
  HOME: '/subjects',
  LOGIN: '/',
  REGISTER: '/register',
  CREATE_STUDENT: '/register/student',
  CREATE_PROFESSOR: '/register/professor',
  SUBJECTS: '/subjects',
  SUBJECT_DETAILS: '/subjects/:id',
  MONITOR_REQUESTS: '/monitor-requests',
};

export const NOT_LOGGED_SCREENS = [
  '/code-verification',
  '/',
  '/register',
  '/register/student',
  '/register/professor',
];
