import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../utils/screens';
import { TConfirmedEmailHook } from './types';

const useConfirmedEmail = (): TConfirmedEmailHook => {
  const navigate = useNavigate();

  const handleGoToLoginClick = () => {
    navigate(SCREENS.LOGIN);
  };

  return { handleGoToLoginClick };
};

export default useConfirmedEmail;
