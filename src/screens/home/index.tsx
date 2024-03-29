import useGetLoggedUser from '../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../utils/constants';
import ProfessorHome from '../professorHome';
import StudentHome from '../studentHome';
import Subjects from '../subjects';

const Home = () => {
  const user = useGetLoggedUser();

  if (user) {
    if (user.type_user_id === TypeUserEnum.PROFESSOR) {
      return <ProfessorHome />;
    }

    if (user.type_user_id === TypeUserEnum.COORDINATOR) {
      return <Subjects />;
    }

    return <StudentHome />;
  }

  return <></>;
};

export default Home;
