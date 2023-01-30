import { useMemo } from 'react';
import Modal from '../../../../components/modal';
import { TSchedules } from '../../../../service/requests/useGetSchedulesRequest/types';
import { ScheduleDetailsModalType } from '../../hooks/types';
import ConfirmedScheduleModalContent from '../ConfirmedScheduleModalContent';

type Props = {
  modalType: ScheduleDetailsModalType;
  schedule?: TSchedules;
  isOpen: boolean;
  handleClose(): void;
};

const ScheduleDetailsModal = ({
  modalType,
  schedule,
  isOpen,
  handleClose,
}: Props) => {
  if (!schedule || modalType === ScheduleDetailsModalType.DEFAULT) return <></>;

  const userData = useMemo(() => {
    let student = schedule.student;
    if (!schedule.is_monitoring) {
      student = schedule.monitor.student;
    }

    return {
      email: student.contact_email,
      linkedin: student.linkedin,
      whatsapp: student.whatsapp,
    };
  }, [schedule]);

  return (
    <Modal width="364px" isOpen={isOpen} handleClose={handleClose}>
      {/* TODO - Add modal variations */}
      {modalType === ScheduleDetailsModalType.CONFIRMED ? (
        <ConfirmedScheduleModalContent
          email={userData.email}
          linkedin={userData.linkedin}
          whatsapp={userData.whatsapp}
          isMonitor={schedule.is_monitoring}
          handleClose={handleClose}
        />
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default ScheduleDetailsModal;
