import { useState, useEffect } from 'react';
import useResetPasswordEmailRequest from '../../../service/requests/useResetPasswordEmailRequest';
import { validateEmail } from '../../../utils/validateFields';
import { SCREENS } from '../../../utils/screens';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useResetPasswordEmail = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();
  const { showErrorSnackBar } = useSnackBar();

  const { isLoading, isSuccess, resetPasswordEmail, error } =
    useResetPasswordEmailRequest();

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
      return;
    }

    resetPasswordEmail(email);
  };

  useEffect(() => {
    if (error == 'Usuário não encontrado!') {
      setEmailError('Este E-mail não está cadastrado.');
      return;
    }

    if (error == 'Você já possui um token de resetar a senha válido!') {
      setEmailError(
        'Você deve aguardar 30 minutos antes de solicitar o e-mail novamente.'
      );
      return;
    }

    if (error && !emailError) {
      showErrorSnackBar(`Erro ao solicitar o e-mail de recuperação de senha.`);
    }
  }, [error]);

  useEffect(() => {
    document.title = 'Recuperação de senha';
  });

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

export default useResetPasswordEmail;
