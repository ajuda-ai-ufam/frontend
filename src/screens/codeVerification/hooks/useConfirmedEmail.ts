import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../utils/screens';

const useConfirmedEmail = () => {
  const navigate = useNavigate();

  const handleGoToLoginClick = () => {
    navigate(SCREENS.LOGIN);
  };

  return { handleGoToLoginClick };
};

export default useConfirmedEmail;
