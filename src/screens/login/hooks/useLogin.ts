import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginRequest from '../../../service/requests/login';

const useLogin = () => {
  const navigate = useNavigate();
  const { error, isLoading, isSuccess, login } = useLoginRequest();

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Entrar';
  }, []);

  useEffect(() => {
    if (isSuccess) alert('Parabéns! Você está logado.');
  }, [isSuccess]);

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
    navigate('/register');
  };

  const handleLoginClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (!email || email.indexOf('@') === -1) {
      return setIsInvalidEmail(true);
    }
    setIsInvalidEmail(false);

    if (!password) {
      return setIsInvalidPassword(true);
    }
    setIsInvalidPassword(false);

    void login(email, password);
  };

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
    isInvalidEmail,
    isInvalidPassword,
  };
};

export default useLogin;
