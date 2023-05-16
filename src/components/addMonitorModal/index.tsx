import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { TSubjectResponsible } from '../../service/requests/useGetSubject/types';
import { TSubject } from '../../service/requests/useListSubjectsRequest/types';
import { Button } from '../button';
import CheckedAnimation from '../checkedAnimation';
import LoadingAnimation from '../loadingAnimation';
import Modal from '../modal';
import { TextField } from '../textField';
import {
  ButtonsContainer,
  ConfirmationContainer,
  ConfirmationTextContainer,
  ConfirmButton,
  LoadingContainer,
  Placeholder,
  StyledTypography,
} from './styles';

type Props = {
  isLoading: boolean;
  isSuccess: boolean;
  isOpen: boolean;
  professors: TSubjectResponsible[];
  selectedProfessorId: number;
  subject?: TSubject;
  handleAddMonitorClick(): void;
  handleChangeProfessor(event: SelectChangeEvent<string[]>): void;
  handleClose(): void;
};

const AddMonitorModal = ({
  isLoading,
  isSuccess,
  isOpen,
  professors,
  selectedProfessorId,
  subject,
  handleAddMonitorClick,
  handleChangeProfessor,
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
            <Typography variant="body1" textAlign={'center'}>
              Sua solicitação foi enviada, aguarde a confirmação do(a)
              professor(a) para concluir sua mudança de perfil.
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
        <StyledTypography variant="h4">Quero ser Monitor(a)</StyledTypography>

        <StyledTypography variant="body1">
          Informe qual professor(a) você desejar ser monitor(a) da disciplina{' '}
          <strong>
            {subject.code} - {subject.name}
          </strong>
          .
        </StyledTypography>

        <Select
          displayEmpty
          value={[selectedProfessorId.toFixed()]}
          onChange={handleChangeProfessor}
          input={<TextField />}
          renderValue={(selected: string[]) =>
            Number(selected) === -1 ? (
              <Placeholder>Selecionar Professor(a)</Placeholder>
            ) : (
              <Typography>
                {professors.find(
                  (subjectResponsible) =>
                    subjectResponsible.professor.user.id === Number(selected[0])
                )?.professor.user.name || ''}
              </Typography>
            )
          }
        >
          {[
            <MenuItem key={-1} value={-1}>
              Selecionar Professor(a)
            </MenuItem>,
            ...professors.map((subjectResponsible) => (
              <MenuItem
                key={subjectResponsible.professor.user.id}
                value={subjectResponsible.professor.user.id}
              >
                {subjectResponsible.professor.user.name}
              </MenuItem>
            )),
          ]}
        </Select>

        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <ConfirmButton
            disabled={selectedProfessorId === -1}
            color="primary"
            onClick={handleAddMonitorClick}
          >
            Enviar solicitação
          </ConfirmButton>
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

export default AddMonitorModal;
