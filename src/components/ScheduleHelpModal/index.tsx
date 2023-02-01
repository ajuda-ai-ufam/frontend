import { SelectChangeEvent } from '@mui/material';
import moment from 'moment';
import { TMonitorAvailableTime } from '../../service/requests/useGetMonitorAvailableTimesRequest/types';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../service/requests/useGetSubject/types';
import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import ConfirmedScheduleModalContent from './components/ConfirmedScheduleModalContent';
import ConfirmScheduleModalContent from './components/ConfirmScheduleModalContent';
import FormScheduleModalContent from './components/FormScheduleModalContent';
import { FeedbackContainer } from './styles';

type Props = {
  availableHours: string[];
  availableMonitors: TSubjectMonitor[];
  isLoadingMonitorAvailableTimes: boolean;
  isScheduleLoading: boolean;
  isScheduleSuccess: boolean;
  isOpen: boolean;
  monitorAvailableTimes?: TMonitorAvailableTime[];
  selectedDate: moment.Moment | null;
  selectedHourIndex: number;
  selectedProfessorId: number;
  selectedMonitorId: number;
  showConfirmation: boolean;
  subject?: TCompleteSubject;
  handleClose(): void;
  handleChangeDate(value: moment.Moment | null): void;
  handleChangeHour(event: SelectChangeEvent<string[]>): void;
  handleChangeMonitor(event: SelectChangeEvent<string[]>): void;
  handleChangeProfessor(event: SelectChangeEvent<string[]>): void;
  handleConfirmSchedule(): void;
  handleEditData(): void;
  handleShowConfirmation(): void;
};

const ScheduleHelpModal = ({
  availableHours,
  availableMonitors,
  isLoadingMonitorAvailableTimes,
  isScheduleLoading,
  isScheduleSuccess,
  isOpen,
  monitorAvailableTimes,
  selectedDate,
  selectedHourIndex,
  selectedMonitorId,
  selectedProfessorId,
  subject,
  showConfirmation,
  handleChangeDate,
  handleChangeHour,
  handleChangeMonitor,
  handleChangeProfessor,
  handleClose,
  handleConfirmSchedule,
  handleEditData,
  handleShowConfirmation,
}: Props) => {
  if (!subject) return <></>;

  const renderContent = () => {
    if (isScheduleLoading) {
      return (
        <FeedbackContainer>
          <LoadingAnimation />
        </FeedbackContainer>
      );
    }

    if (isScheduleSuccess) {
      return <ConfirmedScheduleModalContent handleClose={handleClose} />;
    }

    if (showConfirmation) {
      return (
        <ConfirmScheduleModalContent
          selectedDate={selectedDate}
          availableHours={availableHours}
          availableMonitors={availableMonitors}
          selectedHourIndex={selectedHourIndex}
          selectedMonitorId={selectedMonitorId}
          selectedProfessorId={selectedProfessorId}
          handleEditData={handleEditData}
          subject={subject}
          handleConfirmSchedule={handleConfirmSchedule}
        />
      );
    }

    return (
      <FormScheduleModalContent
        availableHours={availableHours}
        availableMonitors={availableMonitors}
        isLoadingMonitorAvailableTimes={isLoadingMonitorAvailableTimes}
        monitorAvailableTimes={monitorAvailableTimes}
        selectedDate={selectedDate}
        selectedHourIndex={selectedHourIndex}
        selectedMonitorId={selectedMonitorId}
        selectedProfessorId={selectedProfessorId}
        handleChangeHour={handleChangeHour}
        handleChangeDate={handleChangeDate}
        handleChangeMonitor={handleChangeMonitor}
        handleChangeProfessor={handleChangeProfessor}
        handleShowConfirmation={handleShowConfirmation}
        subject={subject}
        handleClose={handleClose}
      />
    );
  };

  return (
    <Modal
      width={showConfirmation ? '500px' : '752px'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {renderContent()}
    </Modal>
  );
};

export default ScheduleHelpModal;
