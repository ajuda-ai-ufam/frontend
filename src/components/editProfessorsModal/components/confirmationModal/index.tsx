import { Typography } from '@mui/material';
import { TSubjectResponsible } from '../../../../service/requests/useGetSubject/types';
import Modal from '../../../modal';
import { BackButton, ButtonsContainer, ContinueButton } from './styles';

type Props = {
  isOpen: boolean;
  isLoadingEndResponsability: boolean;
  handleClose(): void;
  handleContinue(id?: number): void;
  responsible?: TSubjectResponsible;
  subject: string;
};

const ConfirmationModal = ({
  isOpen,
  handleClose,
  handleContinue,
  responsible,
  subject,
  isLoadingEndResponsability,
}: Props) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Typography variant="h4">Remover Responsável</Typography>
      <Typography variant="body1">
        Para realizar essa ação o(a) professor(a){' '}
        <strong>{responsible?.professor.user.name}</strong> da disciplina{' '}
        <strong>{subject}</strong> não deve possuir nenhum(a) monitor(a)
        associado(a) ou pendente na sua disciplina. Deseja continuar?
      </Typography>
      <ButtonsContainer>
        <BackButton onClick={handleClose}>Não, desejo sair</BackButton>
        <ContinueButton
          onClick={() => handleContinue(responsible?.id)}
          loading={isLoadingEndResponsability}
        >
          Sim, continuar
        </ContinueButton>
      </ButtonsContainer>
    </Modal>
  );
};

export default ConfirmationModal;
