import { Typography } from '@mui/material';
import CheckedAnimation from '../checkedAnimation';
import LoadingAnimation from '../loadingAnimation';
import { Button } from '../button';
import Modal from '../modal';
import { Chip } from '@mui/material';
import HourSelect from './components/HourSelect';
import {
  LoadingContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  TypographyContainer,
  WeekDayContainer,
  DaysContainer,
  HoursContainer,
  SelectContainer,
  StyledSwitch,
  CardContainer,
  ChipContainer,
  AvailabilityContainer,
  SwitchContainer,
  ButtonContainer,
  ButtonCancel,
  ButtonSave,
} from './styles';
import useMonitorAvailabilityModal from './hooks/useMonitorAvailabilityModal';

type Props = {
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  handleClose(): void;
  handleOpen(): void;
};

const MonitorAvailabilityModal = ({
  isLoading,
  isSuccess,
  isOpen,
  handleClose,
}: Props) => {
  const {
    segundaSelected,
    tercaSelected,
    quartaSelected,
    quintaSelected,
    sextaSelected,
    sabadoSelected,
    domingoSelected,
    sameHour,
    segundaHourDe,
    tercaHourDe,
    quartaHourDe,
    quintaHourDe,
    sextaHourDe,
    sabadoHourDe,
    domingoHourDe,
    sameHourDe,
    segundaHourAte,
    tercaHourAte,
    quartaHourAte,
    quintaHourAte,
    sextaHourAte,
    sabadoHourAte,
    domingoHourAte,
    sameHourAte,
    handleDaySelect,
    handleSwitchChange,
    handleSegundaHourDe,
    handleTercaHourDe,
    handleQuartaHourDe,
    handleQuintaHourDe,
    handleSextaHourDe,
    handleSabadoHourDe,
    handleDomingoHourDe,
    handleSegundaHourAte,
    handleTercaHourAte,
    handleQuartaHourAte,
    handleQuintaHourAte,
    handleSextaHourAte,
    handleSabadoHourAte,
    handleDomingoHourAte,
    handleSameHourDe,
    handleSameHourAte,
    handleSaveAvailability,
  } = useMonitorAvailabilityModal();
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

          <Button onClick={handleClose} color="primary">
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
            Banco de Dados I, assim os demais usuários poderão agendar um
            horário com você.
          </Typography>
        </TypographyContainer>

        <WeekDayContainer>
          <Typography variant="subtitle1">Dias da semana</Typography>
          <DaysContainer>
            <ChipContainer>
              <Chip
                key={0}
                label="S"
                onClick={() => {
                  handleDaySelect(0);
                }}
                color={segundaSelected ? 'primary' : 'secondary'}
                variant={segundaSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={1}
                label="T"
                onClick={() => {
                  handleDaySelect(1);
                }}
                color={tercaSelected ? 'primary' : 'secondary'}
                variant={tercaSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={2}
                label="Q"
                onClick={() => {
                  handleDaySelect(2);
                }}
                color={quartaSelected ? 'primary' : 'secondary'}
                variant={quartaSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={3}
                label="Q"
                onClick={() => {
                  handleDaySelect(3);
                }}
                color={quintaSelected ? 'primary' : 'secondary'}
                variant={quintaSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={4}
                label="S"
                onClick={() => {
                  handleDaySelect(4);
                }}
                color={sextaSelected ? 'primary' : 'secondary'}
                variant={sextaSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={5}
                label="S"
                onClick={() => {
                  handleDaySelect(5);
                }}
                color={sabadoSelected ? 'primary' : 'secondary'}
                variant={sabadoSelected ? 'filled' : 'outlined'}
              />
              <Chip
                key={6}
                label="D"
                onClick={() => {
                  handleDaySelect(6);
                }}
                color={domingoSelected ? 'primary' : 'secondary'}
                variant={domingoSelected ? 'filled' : 'outlined'}
              />
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
              <StyledSwitch checked={sameHour} onChange={handleSwitchChange} />
            </SwitchContainer>
            {sameHour ? (
              <SelectContainer isSelected={sameHour}>
                <HourSelect
                  day={'Disponivel'}
                  hourDe={sameHourDe}
                  handleHourDe={handleSameHourDe}
                  hourAte={sameHourAte}
                  handleHourAte={handleSameHourAte}
                />
              </SelectContainer>
            ) : (
              <>
                <SelectContainer isSelected={segundaSelected}>
                  <HourSelect
                    day={'Segunda'}
                    hourDe={segundaHourDe}
                    handleHourDe={handleSegundaHourDe}
                    hourAte={segundaHourAte}
                    handleHourAte={handleSegundaHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={tercaSelected}>
                  <HourSelect
                    day={'Terça'}
                    hourDe={tercaHourDe}
                    handleHourDe={handleTercaHourDe}
                    hourAte={tercaHourAte}
                    handleHourAte={handleTercaHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={quartaSelected}>
                  <HourSelect
                    day={'Quarta'}
                    hourDe={quartaHourDe}
                    handleHourDe={handleQuartaHourDe}
                    hourAte={quartaHourAte}
                    handleHourAte={handleQuartaHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={quintaSelected}>
                  <HourSelect
                    day={'Quinta'}
                    hourDe={quintaHourDe}
                    handleHourDe={handleQuintaHourDe}
                    hourAte={quintaHourAte}
                    handleHourAte={handleQuintaHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={sextaSelected}>
                  <HourSelect
                    day={'Sexta'}
                    hourDe={sextaHourDe}
                    handleHourDe={handleSextaHourDe}
                    hourAte={sextaHourAte}
                    handleHourAte={handleSextaHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={sabadoSelected}>
                  <HourSelect
                    day={'Sabado'}
                    hourDe={sabadoHourDe}
                    handleHourDe={handleSabadoHourDe}
                    hourAte={sabadoHourAte}
                    handleHourAte={handleSabadoHourAte}
                  />
                </SelectContainer>
                <SelectContainer isSelected={domingoSelected}>
                  <HourSelect
                    day={'Domingo'}
                    hourDe={domingoHourDe}
                    handleHourDe={handleDomingoHourDe}
                    hourAte={domingoHourAte}
                    handleHourAte={handleDomingoHourAte}
                  />
                </SelectContainer>
              </>
            )}
          </AvailabilityContainer>
        </HoursContainer>
        <ButtonContainer>
          <ButtonCancel color="primary" variant="text">
            Cancelar
          </ButtonCancel>
          <ButtonSave onClick={handleSaveAvailability} color="primary">
            Salvar
          </ButtonSave>
        </ButtonContainer>
      </CardContainer>
    );
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {renderContent()}
    </Modal>
  );
};

export default MonitorAvailabilityModal;
