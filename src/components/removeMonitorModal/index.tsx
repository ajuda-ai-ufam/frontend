import { TSubjectMonitor } from '../../service/requests/useGetSubject/types';
import Modal from '../modal';
import DataMonitorModal from './components/DataMonitorModal';
import RemoveConfirmationModal from './components/RemoveConfirmationModal';

type Props = {
  isOpen: boolean;
  selectedMonitorRemove?: TSubjectMonitor;
  modalState: number;
  handleClose(): void;
  handleRemoveMonitorClick(): void;
};

const RemoveMonitorModal = ({
  isOpen,
  selectedMonitorRemove,
  modalState,
  handleClose,
  handleRemoveMonitorClick,
}: Props) => {
  return (
    <Modal
      width={modalState === 0 ? '462px' : '368px'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {modalState === 0 ? (
        <DataMonitorModal
          selectedMonitorRemove={selectedMonitorRemove}
          handleClose={handleClose}
          handleRemoveMonitorClick={handleRemoveMonitorClick}
        />
      ) : (
        <RemoveConfirmationModal
          selectedMonitorRemove={selectedMonitorRemove}
          handleClose={handleClose}
        />
      )}
    </Modal>
  );
};

export default RemoveMonitorModal;
