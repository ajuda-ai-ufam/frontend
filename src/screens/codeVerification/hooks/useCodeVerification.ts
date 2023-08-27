import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useGenerateCodeRequest from '../../../service/requests/useGenerateCodeRequest';
import useVerifyCodeRequest from '../../../service/requests/useVerifyCodeRequest';
import { CodeTypeEnum } from '../../../utils/constants';
import { TCodeVerificationHook } from './types';

const useCodeVerification = (): TCodeVerificationHook => {
  const {
    isLoading: isVerifyCodeLoading,
    error: verifyCodeError,
    isSuccess,
    verifyCode,
  } = useVerifyCodeRequest();
  const {
    isLoading: isGenerateCodeLoading,
    error: generateCodeError,
    generateCode,
  } = useGenerateCodeRequest();

  const { state } = useLocation();
  const email = state?.email || '';

  const [code, setCode] = useState('');
  const [timeToResendCode, setTimeToResendCode] = useState(60);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.length || email.indexOf('@') === -1) {
      setErrorMessage('E-mail inválido. Volte ao login e refaça o processo.');
      return;
    }

    if (code.length === 0) {
      setErrorMessage('Informe um código.');
      return;
    }

    void verifyCode(code, email, CodeTypeEnum.EMAIL);
  };

  const handleResendCodeClick = () => {
    setTimeToResendCode(60);
    setErrorMessage('');
    void generateCode(email, CodeTypeEnum.EMAIL);
  };

  useEffect(() => {
    document.title = 'Verificar código';
    void generateCode(email, CodeTypeEnum.EMAIL);

    const interval = setInterval(
      () => setTimeToResendCode((prev) => (prev > 1 ? prev - 1 : 0)),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (verifyCodeError) setErrorMessage('Código inválido');
  }, [verifyCodeError]);

  useEffect(() => {
    if (generateCodeError && generateCodeError.statusCode !== 400)
      setErrorMessage(
        'Falha ao enviar o código. Volte ao login e tente novamente.'
      );
  }, [generateCodeError]);

  return {
    code,
    errorMessage,
    isVerifyCodeLoading,
    isGenerateCodeLoading,
    isSuccess,
    timeToResendCode,
    handleCodeChange,
    handleResendCodeClick,
    handleSubmit,
  };
};

export default useCodeVerification;
