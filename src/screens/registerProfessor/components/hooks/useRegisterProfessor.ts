import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRegisterProfessorRequest from '../../../../service/requests/useRegisterProfessorRequest';
import { useSnackBar } from '../../../../utils/renderSnackBar';
import { SCREENS } from '../../../../utils/screens';
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../../../utils/validateFields';

const useRegisterProfessor = () => {
  const navigate = useNavigate();
  const { showErrorSnackBar } = useSnackBar();

  const { isLoading, isSuccess, register, error } =
    useRegisterProfessorRequest();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [confPasswordError, setConfPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleCancelClick = () => {
    navigate(SCREENS.LOGIN);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleContinueClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setPasswordError('');
    setEmailError('');
    setNameError('');
    setConfPasswordError('');

    const currentErrorName = validateName(name);
    if (currentErrorName) {
      setNameError(currentErrorName);
    }

    const currentErrorEmail = validateEmail(email);
    if (currentErrorEmail) {
      setEmailError(currentErrorEmail);
    }

    const currentErrorPassword = validatePassword(name, password);
    if (currentErrorPassword) {
      setPasswordError(currentErrorPassword);
    }

    const currentErrorConfirmPassword = validateConfirmPassword(
      password,
      confPassword
    );
    if (currentErrorConfirmPassword) {
      setConfPasswordError(currentErrorConfirmPassword);
    }

    if (
      !currentErrorName &&
      !currentErrorEmail &&
      !currentErrorPassword &&
      !currentErrorConfirmPassword
    ) {
      void register(name, email, password, confPassword);
    }
  };

  useEffect(() => {
    if (error) {
      if (error == 'Email já cadastrado.') {
        setEmailError('E-mail já cadastrado!');
        return;
      }

      showErrorSnackBar(
        `Erro desconhecido, atualize a página ou tente novamente mais tarde. Erro: ${
          error || ''
        }`
      );
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      navigate(SCREENS.CODE_VERIFICATION, { state: { email } });
    }
  }, [isSuccess]);

  return {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfPasswordChange,
    handleCancelClick,
    handleContinueClick,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    handleMouseDownPassword,
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
    showPassword,
    showConfirmPassword,
    setNameError,
    setEmailError,
    setPasswordError,
    setConfPasswordError,
  };
};

export default useRegisterProfessor;
