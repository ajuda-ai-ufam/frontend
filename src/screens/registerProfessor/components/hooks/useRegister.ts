import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../../utils/screens';
import useRegisterProfessorRequest from '../../../../service/requests/useRegisterProfessorRequest';
import { TRegisterProfessorHook } from './types';

const useRegisterProfessor = (): TRegisterProfessorHook => {
  const navigate = useNavigate();
  const { error, isLoading, isSuccess, register } =
    useRegisterProfessorRequest();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [confPasswordError, setConfPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLoginClick = () => {
    navigate(SCREENS.HOME);
  };

  const handleContinueClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setPasswordError('');
    setEmailError('');

    if (!name) {
      return setNameError('Informe o nome');
    }

    if (name.indexOf('') === -1) {
      return setNameError('Nome inválido');
    }

    if (!email || email.indexOf('@') === -1) {
      return setEmailError('Informe um e-mail válido');
    }

    if (email.indexOf('@icomp.ufam.edu.br') === -1) {
      return setEmailError('Este e-mail não pertence ao domínio do icomp');
    }

    if (email.split('@')[0].length < 3 || email.split('@')[0].length > 20) {
      return setEmailError('Informe um e-mail válido');
    }

    if (!password) {
      return setPasswordError('Informe uma senha');
    }

    if (password.length < 3 || password.length > 18) {
      return setPasswordError(
        'Sua senha deve ter no mínimo 3 e no máximo 18 caracteres'
      );
    }

    if (!confPassword) {
      return setConfPasswordError('Repita sua senha');
    }

    if (confPassword !== password) {
      return setConfPasswordError('Deve ser idêntico a senha');
    }

    void register(name, email, password, confPassword);
  };

  return {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfPasswordChange,
    handleLoginClick,
    handleContinueClick,
    name,
    email,
    password,
    confPassword,
    error,
    isLoading,
    isSuccess,
    nameError,
    emailError,
    passwordError,
    confPasswordError,
  };
};

export default useRegisterProfessor;
