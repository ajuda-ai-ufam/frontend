import { Typography } from '@mui/material';
import React from 'react';
import { Button } from '../../../../components/button';
import CheckedAnimation from '../../../../components/checkedAnimation';
import testId from '../../../../utils/testId';
import useConfirmedEmail from '../../hooks/useConfirmedEmail';

const ConfirmedEmail = () => {
  const { handleGoToLoginClick } = useConfirmedEmail();

  return (
    <>
      <CheckedAnimation />
      <Typography sx={{ margin: '24px 0 16px 0' }} variant={'h3'}>
        Muito bem!
      </Typography>

      <Typography textAlign={'center'} variant={'body1'}>
        Agora que seu cadastro foi concluído você poderá aproveitar para
        solicitar ajuda dos monitores sempre que precisar.
      </Typography>

      <Button
        sx={{ marginTop: '32px', width: '100%' }}
        color="primary"
        onClick={handleGoToLoginClick}
        id={testId.codeVerification.loginButton}
      >
        Voltar ao login
      </Button>
    </>
  );
};

export default ConfirmedEmail;
