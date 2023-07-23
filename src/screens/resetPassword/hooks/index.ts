import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import jwt from 'jwt-decode';
import { TResetPasswordToken } from './types';
import useResetPasswordRequest from '../../../service/requests/useResetPasswordRequest';
import {
  validatePassword,
  validateConfirmPassword,
} from '../../../utils/validateFields';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import useQuery from '../../../utils/useQuery';

const useResetPassword = () => {
  const query = useQuery();
  const queryToken = query.get('token');

  const { showErrorSnackBar } = useSnackBar();

  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { isLoading, isSuccess, error, resetPassword } =
    useResetPasswordRequest();

  const navigate = useNavigate();

  const decodedToken = useMemo(() => {
    if (token) {
      return jwt(token) as TResetPasswordToken;
    }

    return {} as TResetPasswordToken;
  }, [token]);

  const isValidaToken = useMemo(() => {
    if (token) {
      const expiration = new Date(decodedToken.expiresAt);
      const date = new Date();
      return expiration.getTime() > date.getTime();
    }
  }, [decodedToken]);

  const handleToLoginClick = () => {
    navigate(SCREENS.LOGIN);
  };

  const handleToResetPasswordClick = () => {
    navigate(SCREENS.RESET_PASSWORD_EMAIL);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    if (token) {
      const currentPasswordError = validatePassword(
        decodedToken.userName,
        password
      );

      const currentConfirmPasswordError = validateConfirmPassword(
        password,
        confirmPassword
      );

      if (currentPasswordError) {
        setPasswordError(currentPasswordError);
        return;
      }

      if (currentConfirmPasswordError) {
        setConfirmPasswordError(currentConfirmPasswordError);
        return;
      }

      resetPassword(password, token);
    }
  };

  useEffect(() => {
    if (queryToken) {
      setToken(queryToken);
    }
  }, [queryToken]);

  useEffect(() => {
    navigate('');
    document.title = 'Recuperação de senha';
  }, [token]);

  useEffect(() => {
    if (error) {
      showErrorSnackBar(`Erro ao redefinir a sua senha. Erro: ${error}`);
    }
  }, [error]);

  return {
    token,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    passwordError,
    confirmPasswordError,
    isValidaToken,
    isLoading,
    isSuccess,
    error,
    decodedToken,
    resetPassword,
    setPasswordError,
    setConfirmPasswordError,
    handleShowPasswordClick,
    handleShowConfirmPasswordClick,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleResetPassword,
    handleToLoginClick,
    handleToResetPasswordClick,
  };
};

export default useResetPassword;
