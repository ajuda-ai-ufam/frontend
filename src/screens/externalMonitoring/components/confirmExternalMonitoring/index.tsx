import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { ButtonsContainer, StyledButton } from '../../styles';
import { DataContainer, FeedbackContainer, Label } from './styles';
import Modal from '../../../../components/modal';
import {
  TProfessorInput,
  TStudentInput,
  TSubjectInput,
} from '../../hooks/types';
import { HOURS_OPTIONS } from '../../hooks/constants';
import LoadingAnimation from '../../../../components/loadingAnimation';
import { LoadingContainer } from '../../../editMonitoring/styles';
import CheckedAnimation from '../../../../components/checkedAnimation';
import { TTopicValue } from '../../../../components/ScheduleHelpModal/types';

type Props = {
  selectedStudent: TStudentInput | null;
  description: string;
  selectedDate: moment.Moment | null;
  selectedHourIndex: number;
  selectedProfessor: TProfessorInput | null;
  selectedSubject: TSubjectInput | null;
  topic: TTopicValue | null;
  showConfirmation: boolean;
  handleEditData(): void;
  handleConfirmExternalMonitoring(): void;
  isLoading: boolean;
  isSuccess: boolean;
  handleClose(): void;
};

const ConfirmExternalMonitoring = ({
  description,
  selectedDate,
  selectedHourIndex,
  topic,
  showConfirmation,
  selectedProfessor,
  selectedStudent,
  selectedSubject,
  handleClose,
  isLoading,
  isSuccess,
  handleEditData,
  handleConfirmExternalMonitoring,
}: Props) => {
  const confirmData = useMemo(() => {
    const data = [
      {
        label: 'Aluno(a)',
        value: selectedStudent?.name,
      },
    ];

    if (selectedSubject) {
      data.push({
        label: 'Disciplina',
        value: selectedSubject?.name,
      });
    }

    if (selectedProfessor) {
      data.push({
        label: 'Professor(a)',
        value: selectedProfessor.name,
      });
    }

    if (selectedDate) {
      data.push({
        label: 'Data',
        value: selectedDate.format('DD/MM/YYYY'),
      });
    }

    if (selectedHourIndex) {
      data.push({
        label: 'Horário',
        value: `${HOURS_OPTIONS[selectedHourIndex]} às ${
          HOURS_OPTIONS[selectedHourIndex + 1]
        }`,
      });
    }

    data.push({
      label: 'Assunto',
      value: topic?.inputValue || '-',
    });

    data.push({
      label: 'Descrição',
      value: description || '-',
    });

    return data;
  }, [
    selectedProfessor,
    selectedStudent,
    selectedDate,
    selectedHourIndex,
    topic,
    description,
  ]);

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
        <FeedbackContainer>
          <CheckedAnimation />

          <Typography variant="h4">Muito bem!</Typography>
          <Typography variant="body1" textAlign={'center'}>
            O atendimento foi registrado.
          </Typography>
          <StyledButton sx={{ margin: '16px 0 8px 0' }} onClick={handleClose}>
            Voltar
          </StyledButton>
        </FeedbackContainer>
      );
    }

    return (
      <>
        <Typography variant="h4">Registro de Monitoria Externa</Typography>
        <Typography variant="body1">Você confirma este atendimento?</Typography>

        {confirmData.map((data) => (
          <DataContainer key={data.label}>
            <Label>{data.label}</Label>
            <Typography variant="body2">{data.value}</Typography>
          </DataContainer>
        ))}

        <ButtonsContainer>
          <StyledButton variant="text" onClick={handleEditData}>
            Não, voltar e corrigir
          </StyledButton>

          <StyledButton onClick={handleConfirmExternalMonitoring} width="230px">
            Sim, confirmo
          </StyledButton>
        </ButtonsContainer>
      </>
    );
  };

  return (
    <>
      <Modal isOpen={showConfirmation} handleClose={handleEditData}>
        {renderContent()}
      </Modal>
    </>
  );
};

export default ConfirmExternalMonitoring;
