import { TypeUserEnum } from '../../../utils/constants';

type TTypeUser = 'Student' | 'Teacher' | 'Coordinator';

export type TStorageUser = {
  username: string;
  sub: string;
  type_user: TTypeUser;
  type_user_id: TypeUserEnum;
  monitor?: TTokenMonitor;
};

export type TTokenMonitor = {
  id: number;
  id_status: number;
  end_date: string;
  responsible_professor_id: 2;
  student_id: number;
  subject_id: number;
};
