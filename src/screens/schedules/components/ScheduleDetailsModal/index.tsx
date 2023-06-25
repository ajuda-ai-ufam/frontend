import { Box } from '@mui/material';
import { useMemo } from 'react';
import LoadingAnimation from '../../../../components/loadingAnimation';
import Modal from '../../../../components/modal';
import { TSchedules } from '../../../../service/requests/useGetSchedulesRequest/types';
import { ScheduleDetailsModalType } from '../../hooks/types';
import CancelScheduleModalContent from '../CancelScheduleModalContent';
import ConfirmedScheduleModalContent from '../ConfirmedScheduleModalContent';
import PendingScheduleModalContent from '../PendingScheduleModalContent';
import RefusedScheduleModalContent from '../RefusedScheduleModalContent';

type Props = {
  modalType: ScheduleDetailsModalType;
  schedule?: TSchedules;
  isOpen: boolean;
  isCancelSuccess: boolean;
  handleAccept(): void;
  handleOpenCancelModal(): void;
  handleCloseCancelModal(): void;
  handleCancelSchedule(): void;
  handleClose(): void;
  handleRefuse(): void;
};

const ScheduleDetailsModal = ({
  modalType,
  schedule,
  isOpen,
  isCancelSuccess,
  handleOpenCancelModal,
  handleCloseCancelModal,
  handleCancelSchedule,
  handleAccept,
  handleClose,
  handleRefuse,
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
      {modalType === ScheduleDetailsModalType.CANCELED ? (
        <CancelScheduleModalContent
          handleClose={handleClose}
          isCancelSuccess={isCancelSuccess}
          handleCancelSchedule={handleCancelSchedule}
          isMonitor={schedule.is_monitoring}
          handleCloseCancelModal={handleCloseCancelModal}
        />
      ) : (
        <></>
      )}
      {modalType === ScheduleDetailsModalType.CONFIRMED ? (
        <ConfirmedScheduleModalContent
          topic={schedule.ScheduleTopics?.name}
          email={userData.email}
          description={schedule.description}
          linkedin={userData.linkedin}
          whatsapp={userData.whatsapp}
          isMonitor={schedule.is_monitoring}
          handleClose={handleClose}
          handleOpenCancelModal={handleOpenCancelModal}
        />
      ) : (
        <></>
      )}
      {modalType === ScheduleDetailsModalType.PENDING ? (
        <PendingScheduleModalContent
          name={userData.name}
          description={schedule.description}
          course={userData.course}
          subject={schedule.monitor.subject.name}
          start={schedule.start}
          end={schedule.end}
          isMonitor={schedule.is_monitoring}
          topic={schedule.ScheduleTopics?.name}
          handleAccept={handleAccept}
          handleClose={handleClose}
          handleRefuse={handleRefuse}
        />
      ) : (
        <></>
      )}
      {modalType === ScheduleDetailsModalType.REFUSED ? (
        <RefusedScheduleModalContent handleClose={handleClose} />
      ) : (
        <></>
      )}
      {modalType === ScheduleDetailsModalType.LOADING ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoadingAnimation />
        </Box>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default ScheduleDetailsModal;
