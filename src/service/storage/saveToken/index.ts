import { TOKEN_KEY } from '../../../utils/constants';

const useSaveToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export default useSaveToken;
