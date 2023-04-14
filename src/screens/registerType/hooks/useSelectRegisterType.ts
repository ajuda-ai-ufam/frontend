import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../utils/screens';

const useSelectRegisterType = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Cadastre-se';
  }, []);

  const handleClickLogin = () => {
    navigate(SCREENS.LOGIN);
  };

  const handleClickProfessor = () => {
    navigate(SCREENS.CREATE_PROFESSOR);
  };

  const handleClickStudent = () => {
    navigate(SCREENS.CREATE_STUDENT);
  };

  return {
    handleClickLogin,
    handleClickProfessor,
    handleClickStudent,
  };
};

export default useSelectRegisterType;
