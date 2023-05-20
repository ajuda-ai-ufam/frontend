import { Chip, SelectChangeEvent, Typography } from '@mui/material';
import { TCompleteSubject } from '../../service/requests/useGetSubject/types';
import { Button } from '../button';
import CheckedAnimation from '../checkedAnimation';
import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import HourSelect from './components/HourSelect';
import { TWeekDayAvailabilityState } from './hooks/types';
import {
  AvailabilityContainer,
  ButtonCancel,
  ButtonContainer,
  ButtonSave,
  CardContainer,
  ChipContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  DaysContainer,
  HoursContainer,
  LoadingContainer,
  SelectContainer,
  StyledSwitch,
  SwitchContainer,
  TypographyContainer,
  WeekDayContainer,
} from './styles';

type Props = {
  subject?: TCompleteSubject;
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  sameAvailability: TWeekDayAvailabilityState;
  weekDayAvailability: TWeekDayAvailabilityState[];
  dayIsSelected: boolean;
  hoursIsSelected: boolean;
  handleCloseModal(): void;
  handleFromHourChange(event: SelectChangeEvent<string>): void;
  handleFromSameHourChange(event: SelectChangeEvent<string>): void;
  handleToHourChange(event: SelectChangeEvent<string>): void;
  handleToSameHourChange(event: SelectChangeEvent<string>): void;
  handleWeekDaySelect(event: React.MouseEvent<HTMLDivElement>): void;
  handleOpenModal(): void;
  handleSwitchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSaveAvailability(): void;
};

const MonitorAvailabilityModal = ({
  subject,
  isLoading,
  isSuccess,
  isOpen,
  sameAvailability,
  weekDayAvailability,
  dayIsSelected,
  hoursIsSelected,
  handleCloseModal,
  handleFromHourChange,
  handleFromSameHourChange,
  handleToHourChange,
  handleToSameHourChange,
  handleWeekDaySelect,
  handleSwitchChange,
  handleSaveAvailability,
}: Props) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      );
    }

    if (isSuccess) {
      return (
        <ConfirmationContainer>
          <CheckedAnimation />

          <ConfirmationTextContainer>
            <Typography variant="h4">Tudo certo!</Typography>
            <Typography variant="body1" textAlign={'center'}>
              Os horários foram registrados
            </Typography>
          </ConfirmationTextContainer>

          <Button onClick={handleCloseModal} color="primary">
            Voltar
          </Button>
        </ConfirmationContainer>
      );
    }

    return (
      <CardContainer>
        <TypographyContainer>
          <Typography variant="h4">Gerenciar disponibilidade</Typography>
          <Typography variant="body1">
            Selecione abaixo o período que você está disponível na disciplina
            <strong> {subject?.name}</strong>, assim os demais usuários poderão
            agendar um horário com você.
          </Typography>
        </TypographyContainer>

        <WeekDayContainer>
          <Typography variant="subtitle1">Dias da semana</Typography>
          <DaysContainer>
            <ChipContainer>
              {weekDayAvailability.map((availability) => (
                <Chip
                  key={availability.weekDay}
                  id={availability.weekDay.toString()}
                  label={availability.label}
                  onClick={handleWeekDaySelect}
                  color={availability.isSelected ? 'primary' : 'secondary'}
                  variant={availability.isSelected ? 'filled' : 'outlined'}
                />
              ))}
            </ChipContainer>
          </DaysContainer>
        </WeekDayContainer>

        <HoursContainer>
          <Typography variant="subtitle1">Horário disponível</Typography>
          <AvailabilityContainer>
            <SwitchContainer>
              <Typography variant="body1">
                Manter mesmo horário para todos os dias
              </Typography>
              <StyledSwitch
                checked={sameAvailability.isSelected}
                onChange={handleSwitchChange}
              />
            </SwitchContainer>

            {sameAvailability.isSelected && dayIsSelected ? (
              <SelectContainer isSelected={sameAvailability.isSelected}>
                <HourSelect
                  name={sameAvailability.name}
                  fromHourIndex={sameAvailability.fromHourIndex}
                  handleFromHourChange={handleFromSameHourChange}
                  toHourIndex={sameAvailability.toHourIndex}
                  handleToHourChange={handleToSameHourChange}
                  weekDay={sameAvailability.weekDay}
                />
              </SelectContainer>
            ) : (
              <>
                {weekDayAvailability.map((availability) => (
                  <SelectContainer isSelected={availability.isSelected}>
                    <HourSelect
                      name={availability.name}
                      fromHourIndex={availability.fromHourIndex}
                      handleFromHourChange={handleFromHourChange}
                      toHourIndex={availability.toHourIndex}
                      handleToHourChange={handleToHourChange}
                      weekDay={availability.weekDay}
                    />
                  </SelectContainer>
                ))}
              </>
            )}
          </AvailabilityContainer>
        </HoursContainer>

        <ButtonContainer>
          <ButtonCancel onClick={handleCloseModal}>Cancelar</ButtonCancel>
          <ButtonSave
            disabled={!(dayIsSelected && hoursIsSelected)}
            onClick={handleSaveAvailability}
          >
            Salvar
          </ButtonSave>
        </ButtonContainer>
      </CardContainer>
    );
  };

  return (
    <Modal width="492px" isOpen={isOpen} handleClose={handleCloseModal}>
      {renderContent()}
    </Modal>
  );
};

export default MonitorAvailabilityModal;
