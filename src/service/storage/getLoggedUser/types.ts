import { TypeUserEnum } from '../../../utils/constants';

type TTypeUser = 'Student' | 'Teacher' | 'Coordinator';

export type TStorageUser = {
  username: string;
  sub: string;
  type_user: TTypeUser;
  type_user_id: TypeUserEnum;
};
