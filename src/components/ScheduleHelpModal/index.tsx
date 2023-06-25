import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import ConfirmScheduleModalContent from './components/ConfirmScheduleModalContent';
import ConfirmedScheduleModalContent from './components/ConfirmedScheduleModalContent';
import FormScheduleModalContent from './components/FormScheduleModalContent';
import { FeedbackContainer } from './styles';
import { TScheduleHelpModalProps } from './types';

const ScheduleHelpModal = ({
  availableHours,
  availableMonitors,
  description,
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
  options,
  selectedTopic,
  topicInputValue,
  isLoadingTopics,
  handleChangeTopicInput,
  handleChangeTopicValue,
  handleChangeDate,
  handleChangeDescription,
  handleChangeHour,
  handleChangeMonitor,
  handleChangeProfessor,
  handleClose,
  handleConfirmSchedule,
  handleEditData,
  handleShowConfirmation,
}: TScheduleHelpModalProps) => {
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
          description={description}
          selectedHourIndex={selectedHourIndex}
          selectedMonitorId={selectedMonitorId}
          selectedProfessorId={selectedProfessorId}
          handleEditData={handleEditData}
          topic={selectedTopic}
          subject={subject}
          handleConfirmSchedule={handleConfirmSchedule}
        />
      );
    }

    return (
      <FormScheduleModalContent
        isLoadingTopics={isLoadingTopics}
        topicInputValue={topicInputValue}
        handleChangeTopicInput={handleChangeTopicInput}
        selectedTopic={selectedTopic}
        handleChangeTopicValue={handleChangeTopicValue}
        options={options}
        availableHours={availableHours}
        availableMonitors={availableMonitors}
        description={description}
        isLoadingMonitorAvailableTimes={isLoadingMonitorAvailableTimes}
        monitorAvailableTimes={monitorAvailableTimes}
        selectedDate={selectedDate}
        selectedHourIndex={selectedHourIndex}
        selectedMonitorId={selectedMonitorId}
        selectedProfessorId={selectedProfessorId}
        handleChangeDescription={handleChangeDescription}
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
