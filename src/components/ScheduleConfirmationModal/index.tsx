import Modal from '../modal';
import {
  HeaderTypography,
  SubTypography,
  DoneTypography,
  NotDoneTypography,
  Card,
  ScheduleContainer,
  ButtonContainer,
  ElementContainer,
  ConfirmationButtonContainer,
  ConfirmationButton,
  NegationButton,
  FinalButton,
  SchedulesOpen,
} from './styles';
import { Typography } from '@mui/material';
import { TScheduleEnding } from '../../service/requests/useGetSchedulesEndingRequest/types';
import { CheckCircleRounded, CancelRounded } from '@mui/icons-material';

type Props = {
  isOpen: boolean;
  scheduleState?: TScheduleEnding[];
  isSuccess: boolean;
  isLoadingUpdate: boolean;
  errorUpdate?: string;
  numberScheduleOpens: number;
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
  isSuccess,
  isLoadingUpdate,
  errorUpdate,
  numberScheduleOpens,
}: Props) => {
  const renderContent = () => {
    return (
      <Card>
        <HeaderTypography>Confirme sua monitoria</HeaderTypography>
        <SubTypography>
          Abaixo estarão listados os eventos que já ocorreram de acordo com sua
          agenda, confirme se a monitoria foi realizada ou não clicando no botão
          ao lado.
        </SubTypography>
        <SchedulesOpen>
          {scheduleState?.map((schedule) => (
            <ScheduleContainer>
              <ElementContainer>
                <Typography variant="caption">Aluno</Typography>
                <Typography variant="subtitle1">{schedule.name}</Typography>
              </ElementContainer>
              <ElementContainer>
                <Typography variant="caption">Data</Typography>
                <Typography variant="subtitle1">{schedule.date}</Typography>
              </ElementContainer>
              <ElementContainer>
                <Typography variant="caption">Horário</Typography>
                <Typography variant="subtitle1">{`${schedule.startHour} até ${schedule.endHour}`}</Typography>
              </ElementContainer>
              <ConfirmationButtonContainer>
                {schedule.status === 2 ? (
                  <>
                    <NegationButton
                      loading={isLoadingUpdate}
                      onClick={() => handleClickNotDone(schedule)}
                    >
                      Não realizada
                    </NegationButton>
                    <ConfirmationButton
                      loading={isLoadingUpdate}
                      onClick={() => handleClickDone(schedule)}
                    >
                      Realizada
                    </ConfirmationButton>
                  </>
                ) : schedule.status === 4 ? (
                  <>
                    <CheckCircleRounded color="primary" />
                    <DoneTypography>Realizada</DoneTypography>
                  </>
                ) : (
                  <>
                    <CancelRounded color="error" />
                    <NotDoneTypography>Não realizada</NotDoneTypography>
                  </>
                )}
              </ConfirmationButtonContainer>
            </ScheduleContainer>
          ))}
        </SchedulesOpen>
        <ButtonContainer>
          {numberScheduleOpens != 0 ? (
            <FinalButton disabled>Finalizar Confirmaçõoes</FinalButton>
          ) : (
            <FinalButton onClick={handleClose}>
              Finalizar Confirmaçõoes
            </FinalButton>
          )}
        </ButtonContainer>
      </Card>
    );
  };
  return (
    <Modal width="991px" isOpen={isOpen} handleClose={handleClose}>
      {renderContent()}
    </Modal>
  );
};

export default ScheduleConfirmationModal;
