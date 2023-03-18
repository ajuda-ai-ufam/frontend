import { Typography } from '@mui/material';
import { Button } from '../button';
import CheckedAnimation from '../checkedAnimation';
import { ConfirmationContainer, ConfirmationTextContainer } from './styles';

type Props = {
  handleClose(): void;
  confirmationText: string;
};

export const ConfirmedActionContent = ({
  confirmationText,
  handleClose,
}: Props) => (
  <ConfirmationContainer>
    <CheckedAnimation />

    <ConfirmationTextContainer>
      <Typography variant="h4">Tudo certo!</Typography>
      <Typography variant="body1" textAlign={'center'}>
        {confirmationText}
      </Typography>
    </ConfirmationTextContainer>

    <Button onClick={handleClose} color="primary">
      Voltar
    </Button>
  </ConfirmationContainer>
);
