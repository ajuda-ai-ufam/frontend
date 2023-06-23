import Modal from '../../../../components/modal';
import { TSchedules } from '../../../../service/requests/useGetSchedulesHistoricRequest/types';
import ScheduleHistoricModal from '../ScheduleHistoricModalContent';

type Props = {
  schedule?: TSchedules;
  isOpen: boolean;
  handleClose(): void;
};

const ScheduleDetailsModal = ({ schedule, isOpen, handleClose }: Props) => {
  if (!schedule) return <></>;
  const startTime = schedule.startDate.toTimeString().substring(0, 5);
  const endTime = schedule.endDate.toTimeString().substring(0, 5);
  const date = schedule.startDate.toLocaleDateString('pt-br');

  return (
    <Modal width="550px" isOpen={isOpen} handleClose={handleClose}>
      <ScheduleHistoricModal
        student={`${schedule.student.enrollment} - ${schedule.student.name}`}
        course={schedule.subject.course.name}
        subject={schedule.subject.name}
        topic={schedule.topic.name}
        description={schedule.description}
        monitor={`${schedule.monitor.enrollment} - ${schedule.monitor.name}`}
        professor={schedule.responsibleProfessor.name}
        date={date}
        schedule={`${startTime} até ${endTime}`}
        handleClose={handleClose}
      />
    </Modal>
  );
};

export default ScheduleDetailsModal;
