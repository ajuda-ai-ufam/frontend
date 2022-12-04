import useGetToken from '../getToken';
import jwt from 'jwt-decode';
import { TStorageUser } from './types';

const useGetLoggedUser = () => {
  const token = useGetToken();

  if (!token) return undefined;

  const user = jwt(token);

  return user as TStorageUser;
};

export default useGetLoggedUser;
