import { useMemo } from 'react';
import Modal from '../../../../components/modal';
import { TSchedules } from '../../../../service/requests/useGetSchedulesRequest/types';
import { ScheduleDetailsModalType } from '../../hooks/types';
import ConfirmedScheduleModalContent from '../ConfirmedScheduleModalContent';
import PendingScheduleModalContent from '../PendingScheduleModalContent';

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
      name: student.user.name,
      course: student.course.name,
    };
  }, [schedule]);

  return (
    <Modal
      width={modalType === ScheduleDetailsModalType.PENDING ? '480px' : '364px'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {/* TODO - Add loading and denied variations */}
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
      {modalType === ScheduleDetailsModalType.PENDING ? (
        <PendingScheduleModalContent
          name={userData.name}
          course={userData.course}
          subject={schedule.monitor.subject.name}
          start={schedule.start}
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
