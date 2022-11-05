import { TOKEN_KEY } from '../../../utils/constants';

const useGetToken = () => localStorage.getItem(TOKEN_KEY);

export default useGetToken;
