import { useState, useEffect } from 'react';
import useResetPasswordTokenRequest from '../../../service/requests/useResetPasswordTokenRequest';
import { validateEmail } from '../../../utils/validateFields';
import { SCREENS } from '../../../utils/screens';
import { useNavigate } from 'react-router-dom';

const useResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const { isLoading, isSuccess, resetPasswordToken, error } =
    useResetPasswordTokenRequest();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLoginClick = () => {
    navigate(SCREENS.LOGIN);
  };

  const handleConfirmEmailClick = () => {
    setEmailError('');

    const currentEmailError = validateEmail(email);
    if (currentEmailError) {
      setEmailError(currentEmailError);
    }

    if (!currentEmailError) {
      resetPasswordToken(email);
    }
  };

  useEffect(() => {
    if (error == 'Usuário não encontrado!') {
      setEmailError('Este E-mail não está cadastrado');
      return;
    }

    if (error == 'Você já possui um token de resetar a senha válido!') {
      setEmailError(
        'Você deve aguardar 30 minutos antes de solicitar o e-mail novamente.'
      );
    }
  }, [error]);

  return {
    email,
    emailError,
    isLoading,
    isSuccess,
    setEmailError,
    handleEmailChange,
    handleConfirmEmailClick,
    handleLoginClick,
  };
};

export default useResetPassword;
