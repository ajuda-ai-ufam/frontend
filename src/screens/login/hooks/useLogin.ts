import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Entrar';
  }, []);

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

  return {
    handlePasswordChange,
    handleEmailChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleRegisterClick,
    email,
    password,
    showPassword,
  };
};

export default useLogin;
