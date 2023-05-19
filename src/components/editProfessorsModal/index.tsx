import {
  Box,
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import {
  TCompleteSubject,
  TSubjectResponsible,
} from '../../service/requests/useGetSubject/types';
import { Button } from '../button';
import Modal from '../modal';
import { TextField } from '../textField';
import { TSelectedProfessor } from './hooks/types';
import ProfessorsList from './professorsList';
import {
  AddProfessorsButton,
  ButtonsContainer,
  ChipsContainer,
  Placeholder,
} from './styles';
import ConfirmationModal from './components/confirmationModal';

type Props = {
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  isRemoveProfessorModalOpen: boolean;
  professors: TSelectedProfessor[];
  selectedProfessorsIds: string[];
  subject?: TCompleteSubject;
  subjectReponsibles: TSubjectResponsible[];
  selectedProfessorRemove?: TSubjectResponsible;
  isLoadingEndResponsability: boolean;
  handleAssignProfessorsClick(): void;
  handleChangeProfessors(event: SelectChangeEvent<string[]>): void;
  handleClickRemoveProfessor(responsible: TSubjectResponsible): void;
  handleCloseRemoveProfessorModal(): void;
  handleClose(): void;
  handleEndResponsabilityClick(id: number): void;
};

const EditProfessorsModal = ({
  isLoading,
  isOpen,
  isRemoveProfessorModalOpen,
  professors,
  selectedProfessorsIds,
  subject,
  subjectReponsibles,
  selectedProfessorRemove,
  isLoadingEndResponsability,
  handleAssignProfessorsClick,
  handleChangeProfessors,
  handleClickRemoveProfessor,
  handleCloseRemoveProfessorModal,
  handleEndResponsabilityClick,
  handleClose,
}: Props) => {
  if (!subject) return <></>;

  return (
    <>
      <ConfirmationModal
        subject={subject.name}
        isLoadingEndResponsability={isLoadingEndResponsability}
        responsible={selectedProfessorRemove}
        isOpen={isRemoveProfessorModalOpen}
        handleClose={handleCloseRemoveProfessorModal}
        handleContinue={handleEndResponsabilityClick}
      />
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Typography variant="h3">Editar Professores</Typography>

        <Typography variant="h5">Adicionar novos(as)</Typography>

        <Typography variant="body1">
          Escolha abaixo quais professores você deseja tornar responsáveis pela
          disciplina{' '}
          <strong>
            {subject.code} - {subject.name}
          </strong>
          .
        </Typography>

        <Select
          multiple
          displayEmpty
          value={selectedProfessorsIds}
          onChange={handleChangeProfessors}
          input={<TextField />}
          renderValue={(selected: string[]) =>
            selected.length === 0 ? (
              <Placeholder>Selecionar professor(a)</Placeholder>
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
          <AddProfessorsButton
            disabled={!selectedProfessorsIds.length || isLoading}
            color="primary"
            onClick={handleAssignProfessorsClick}
            loading={isLoading}
          >
            Adicionar professores
          </AddProfessorsButton>
        </ButtonsContainer>

        <Typography variant="h5">Professores Responsáveis</Typography>

        <Typography variant="body1">
          Aqui estão listados(as) os(as) professores(as) que já são responsáveis
          pela disciplina{' '}
          <strong>
            {subject.code} - {subject.name}
          </strong>
          .
        </Typography>

        <ProfessorsList
          responsibles={subjectReponsibles}
          handleClickRemoveProfessor={handleClickRemoveProfessor}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="text" color="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditProfessorsModal;
