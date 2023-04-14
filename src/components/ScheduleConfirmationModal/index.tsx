import Modal from '../modal';
import {
  HeaderTypography,
  SubTypography,
  Card,
  ButtonContainer,
  FinalButton,
  SchedulesOpen,
} from './styles';
import ScheduleElement from './components/scheduleElement';
import useScheduleConfirmation from './hooks/useScheduleConfirmation';

const ScheduleConfirmationModal = () => {
  const {
    isOpen,
    scheduleState,
    isLoadingUpdate,
    numberScheduleOpens,
    selectedSchedule,
    handleClickDone,
    handleClickNotDone,
    handleCloseModal,
  } = useScheduleConfirmation();
  return (
    <Modal width="991px" isOpen={isOpen} handleClose={handleCloseModal}>
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
          <FinalButton
            disabled={!!numberScheduleOpens}
            onClick={handleCloseModal}
          >
            Finalizar Confirmações
          </FinalButton>
        </ButtonContainer>
      </Card>
    </Modal>
  );
};

export default ScheduleConfirmationModal;
