import { TSubjectMonitor } from '../../../service/requests/useGetSubject/types';
import {
  RemoveMonitorCard,
  TypographyTitle,
  TypographySubTitle,
  RemoveButtonContainer,
  ConfirmCloseButton,
  ConfirmRemoveButton,
} from '../styles';

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
      <TypographyTitle>Remover Monitor</TypographyTitle>
      <TypographySubTitle>
        Caso você remova este monitor, não será possível que outros alunos o
        encontre para agendar horários. Deseja Continuar?
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
