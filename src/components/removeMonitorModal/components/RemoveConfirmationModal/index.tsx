import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import {
  RemoveMonitorCard,
  TypographyTitle,
  TypographySubTitle,
  RemoveButtonContainer,
  ConfirmCloseButton,
  ConfirmRemoveButton,
} from '../../styles';

type Props = {
  selectedMonitorRemove?: TSubjectMonitor;
  handleClose(): void;
  handleEndingMonitoringClick(): void;
};

const RemoveConfirmationModal = ({
  handleClose,
  handleEndingMonitoringClick,
}: Props) => {
  return (
    <RemoveMonitorCard>
      <TypographyTitle>Remover Monitor(a)</TypographyTitle>
      <TypographySubTitle>
        Caso você remova este(a) monitor(a), não será possível que outros
        alunos(as) o(a) encontre para agendar horários. Deseja Continuar?
      </TypographySubTitle>
      <RemoveButtonContainer>
        <ConfirmCloseButton onClick={handleClose}>
          Não, desejo sair
        </ConfirmCloseButton>
        <ConfirmRemoveButton onClick={handleEndingMonitoringClick}>
          Sim, continuar
        </ConfirmRemoveButton>
      </RemoveButtonContainer>
    </RemoveMonitorCard>
  );
};

export default RemoveConfirmationModal;
