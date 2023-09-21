import { TSubjectMonitor } from '../../service/requests/useGetSubject/types';
import Modal from '../modal';
import DataMonitorModal from './components/DataMonitorModal';
import RemoveConfirmationModal from './components/RemoveConfirmationModal';
import LoadingAnimation from '../loadingAnimation';
import CheckedAnimation from '../checkedAnimation';
import { Button } from '../button';
import { Typography } from '@mui/material';

import {
  ConfirmationContainer,
  ConfirmationTextContainer,
  LoadingContainer,
} from './styles';

type Props = {
  isOpen: boolean;
  selectedMonitorRemove?: TSubjectMonitor;
  showMonitorData: boolean;
  handleClose(): void;
  handleRemoveMonitorClick(): void;
  isLoading: boolean;
  isSuccess: boolean;
  handleEndingMonitoringClick(): void;
  isMyMonitor: boolean;
};

const RemoveMonitorModal = ({
  isOpen,
  selectedMonitorRemove,
  showMonitorData,
  handleClose,
  handleRemoveMonitorClick,
  isLoading,
  isSuccess,
  handleEndingMonitoringClick,
  isMyMonitor,
}: Props) => {
  const renderContent = () => {
    if (isSuccess) {
      return (
        <ConfirmationContainer>
          <CheckedAnimation />

          <ConfirmationTextContainer>
            <Typography variant="h4">Tudo certo!</Typography>
            <Typography variant="body1">Monitor(a) removido(a)</Typography>
          </ConfirmationTextContainer>

          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
        </ConfirmationContainer>
      );
    }

    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      );
    }

    return showMonitorData ? (
      <DataMonitorModal
        selectedMonitorRemove={selectedMonitorRemove}
        handleClose={handleClose}
        handleRemoveMonitorClick={handleRemoveMonitorClick}
        isMyMonitor={isMyMonitor}
      />
    ) : (
      <RemoveConfirmationModal
        selectedMonitorRemove={selectedMonitorRemove}
        handleClose={handleClose}
        handleEndingMonitoringClick={handleEndingMonitoringClick}
      />
    );
  };

  return (
    <Modal
      width={showMonitorData ? '462px' : '368px'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {renderContent()}
    </Modal>
  );
};

export default RemoveMonitorModal;
