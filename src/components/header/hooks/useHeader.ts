import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { SCREENS } from '../../../utils/screens';

const useHeader = () => {
  const user = useGetLoggedUser();

  const handleLogoClick = () => {
    if (user) return SCREENS.HOME;

    return SCREENS.LOGIN;
  };

  return {
    handleLogoClick,
  };
};

export default useHeader;
