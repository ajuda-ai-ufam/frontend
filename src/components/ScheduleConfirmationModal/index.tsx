import Modal from '../modal';
import {
  HeaderTypography,
  SubTypography,
  Card,
  ButtonContainer,
  FinalButton,
  SchedulesOpen,
} from './styles';
import { TScheduleEnding } from '../../service/requests/useGetSchedulesEndingRequest/types';
import ScheduleElement from './components/scheduleElement';

type Props = {
  isOpen: boolean;
  scheduleState?: TScheduleEnding[];
  isSuccess: boolean;
  isLoadingUpdate: boolean;
  errorUpdate?: string;
  numberScheduleOpens: number;
  selectedSchedule?: TScheduleEnding;
  handleClickDone(schedule: TScheduleEnding): void;
  handleClickNotDone(schedule: TScheduleEnding): void;
  handleClose(): void;
};

const ScheduleConfirmationModal = ({
  isOpen,
  scheduleState,
  handleClose,
  handleClickDone,
  handleClickNotDone,
  isLoadingUpdate,
  numberScheduleOpens,
  selectedSchedule,
}: Props) => {
  return (
    <Modal width="991px" isOpen={isOpen} handleClose={handleClose}>
      <Card>
        <HeaderTypography>Confirme sua monitoria</HeaderTypography>
        <SubTypography>
          Abaixo estarão listados os eventos que já ocorreram de acordo com sua
          agenda, confirme se a monitoria foi realizada ou não clicando no botão
          ao lado.
        </SubTypography>
        <SchedulesOpen>
          {scheduleState?.map((schedule) => (
            <ScheduleElement
              schedule={schedule}
              handleClickDone={handleClickDone}
              handleClickNotDone={handleClickNotDone}
              isLoadingUpdate={isLoadingUpdate}
              selectedSchedule={selectedSchedule}
            />
          ))}
        </SchedulesOpen>
        <ButtonContainer>
          <FinalButton disabled={!!numberScheduleOpens} onClick={handleClose}>
            Finalizar Confirmações
          </FinalButton>
        </ButtonContainer>
      </Card>
    </Modal>
  );
};

export default ScheduleConfirmationModal;
