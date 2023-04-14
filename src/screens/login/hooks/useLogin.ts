import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginRequest from '../../../service/requests/useLoginRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { SCREENS } from '../../../utils/screens';
import { TLoginHook } from './types';

const useLogin = (): TLoginHook => {
  const navigate = useNavigate();
  const { error, isLoading, isSuccess, login, resetError } = useLoginRequest();
  const user = useGetLoggedUser();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleRegisterClick = () => {
    navigate(SCREENS.REGISTER);
  };

  const handleLoginClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setPasswordError('');
    setEmailError('');
    resetError();

    if (!email) {
      return setEmailError('Informe um e-mail.');
    }

    if (email.indexOf('@') === -1) {
      return setEmailError('E-mail inválido.');
    }

    if (!password) {
      return setPasswordError('Informe uma senha.');
    }

    void login(email, password);
  };

  useEffect(() => {
    if (error) {
      if (error === 'Usuário não verificado.') {
        navigate(SCREENS.CODE_VERIFICATION, { state: { email } });
        return;
      }

      setPasswordError('E-mail ou senha incorreto. Tente novamente.');
    }
  }, [error]);

  useEffect(() => {
    if (user) navigate(SCREENS.SUBJECTS);

    document.title = 'Entrar';
  }, []);

  useEffect(() => {
    if (isSuccess) navigate(SCREENS.HOME);
  }, [isSuccess]);

  return {
    handlePasswordChange,
    handleEmailChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleRegisterClick,
    handleLoginClick,
    email,
    password,
    showPassword,
    error,
    isLoading,
    emailError,
    passwordError,
  };
};

export default useLogin;
