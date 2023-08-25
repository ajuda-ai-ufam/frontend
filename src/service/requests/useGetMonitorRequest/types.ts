export type TGetMonitorErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};

export type TMonitor = {
  id: number;
  status: string;
  endDate?: string;
  student: {
    id: number;
    name: string;
    email: string;
    contactEmail: string;
    description: string;
    enrollment: string;
    whatsapp: string;
    linkedin: string;
    courId: number;
    course: {
      id: number;
      name: string;
    };
  };
  subject: {
    id: number;
    code: string;
    name: string;
    course: {
      id: number;
      code: string;
      name: string;
    };
  };
  responsible: {
    id: number;
    name: string;
    email: string;
  };
  monitorSettings: {
    id: number;
    preferentialPlace: string;
    isActive: boolean;
  };
  availability: TAvailability[];
};

export type TAvailability = {
  id: number;
  week_day: number;
  start: string;
  end: string;
};
