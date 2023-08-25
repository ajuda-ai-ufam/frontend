import { Button } from '../../../../components/button';
import Modal from '../../../../components/modal';
import { Typography } from '@mui/material';
import { ModalContent, ModalButtonContainer } from './styles';

type Props = {
  isOpen: boolean;
  handleClose(): void;
  handleCloseConfirm(): void;
};

const CancelModal = ({ isOpen, handleClose, handleCloseConfirm }: Props) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalContent>
        <Typography variant="h4">Cancelar alterações</Typography>
        <Typography variant="body1">
          Ao cancelar você voltará para a tela anterior e as suas alterações
          serão descartadas. Deseja continuar?
        </Typography>
        <ModalButtonContainer>
          <Button onClick={handleClose} variant="text" color="secondary">
            Não, desejo voltar
          </Button>
          <Button
            onClick={handleCloseConfirm}
            variant="contained"
            color="error"
          >
            Sim, continuar
          </Button>
        </ModalButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export default CancelModal;
