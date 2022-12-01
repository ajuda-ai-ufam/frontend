import {
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { TSelectedProfessor } from './hooks/types';
import { TSubject } from '../../service/requests/useListSubjectsRequest/types';
import { Button } from '../button';
import CheckedAnimation from '../checkedAnimation';
import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import { TextField } from '../textField';
import {
  ButtonsContainer,
  ChipsContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  LoadingContainer,
  Placeholder,
  StyledTypography,
} from './styles';

type Props = {
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  professors: TSelectedProfessor[];
  selectedProfessorsIds: string[];
  subject?: TSubject;
  handleAssignProfessorsClick(): void;
  handleChangeProfessors(event: SelectChangeEvent<string[]>): void;
  handleClose(): void;
};

const AssignProfessorsModal = ({
  isLoading,
  isSuccess,
  isOpen,
  professors,
  selectedProfessorsIds,
  subject,
  handleAssignProfessorsClick,
  handleChangeProfessors,
  handleClose,
}: Props) => {
  if (!subject) return <></>;

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
            <Typography variant="body1">
              Todos os professores foram adicionados
            </Typography>
          </ConfirmationTextContainer>

          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
        </ConfirmationContainer>
      );
    }

    return (
      <>
        <StyledTypography variant="h4">Adicionar Professor</StyledTypography>

        <StyledTypography variant="body1">
          Selecione um Professor para torná-lo responsável pela disciplina{' '}
          <strong>
            {subject.code} - {subject.name}
          </strong>
          .
        </StyledTypography>

        <Select
          multiple
          displayEmpty
          value={selectedProfessorsIds}
          onChange={handleChangeProfessors}
          input={<TextField />}
          renderValue={(selected: string[]) =>
            selected.length === 0 ? (
              <Placeholder>Selecionar Professor</Placeholder>
            ) : (
              <ChipsContainer>
                {selected.map((id: string) => (
                  <Chip
                    key={id}
                    label={
                      professors.find((prof) => prof.id === Number(id))?.name ||
                      ''
                    }
                  />
                ))}
              </ChipsContainer>
            )
          }
        >
          {professors.map((professor) => (
            <MenuItem key={professor.id} value={professor.id}>
              {professor.name}
            </MenuItem>
          ))}
        </Select>

        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            disabled={!selectedProfessorsIds.length}
            color="primary"
            onClick={handleAssignProfessorsClick}
          >
            Adicionar
          </Button>
        </ButtonsContainer>
      </>
    );
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {renderContent()}
    </Modal>
  );
};

export default AssignProfessorsModal;
