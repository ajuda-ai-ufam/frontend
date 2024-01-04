import { SelectChangeEvent } from '@mui/material';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../service/requests/useGetSubject/types';
import { TAvailability } from '../../service/requests/useGetMonitorRequest/types';

export type TTopicValue = {
  id?: number;
  isNew: boolean;
  inputValue: string;
  label: string;
};

export type TUseSchedulesHook = {
  availableHours: string[];
  availableMonitors: TSubjectMonitor[];
  description: string;
  isLoadingMonitorAvailableTimes: boolean;
  monitorAvailableTimes?: TAvailability[];
  selectedDate: moment.Moment | null;
  selectedHourIndex: number;
  selectedProfessorId: number;
  selectedMonitorId: number;
  subject: TCompleteSubject;
  options: TTopicValue[];
  selectedTopic: TTopicValue | null;
  topicInputValue: string;
  isLoadingTopics: boolean;
  handleChangeTopicInput(
    event: React.SyntheticEvent<Element, Event>,
    newTopicInputValue: string
  ): void;
  handleChangeTopicValue(
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: TTopicValue | null
  ): void;
  handleClose(): void;
  handleChangeDate(value: moment.Moment | null): void;
  handleChangeDescription(e: React.ChangeEvent<HTMLInputElement>): void;
  handleChangeHour(event: SelectChangeEvent<string[]>): void;
  handleChangeMonitor(event: SelectChangeEvent<string[]>): void;
  handleChangeProfessor(event: SelectChangeEvent<string[]>): void;
  handleShowConfirmation(): void;
};

export type TScheduleHelpModalProps = {
  subject?: TCompleteSubject;
  isScheduleLoading: boolean;
  isScheduleSuccess: boolean;
  isOpen: boolean;
  showConfirmation: boolean;
  handleConfirmSchedule(): void;
  handleEditData(): void;
} & Omit<TUseSchedulesHook, `subject`>;
