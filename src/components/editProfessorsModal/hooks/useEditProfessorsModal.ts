import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import useAssignProfessorsRequest from '../../../service/requests/useAssignProfessorsRequest';
import {
  TCompleteSubject,
  TSubjectResponsible,
} from '../../../service/requests/useGetSubject/types';
import useListProfessorsRequest from '../../../service/requests/useListProfessorsRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TSelectedProfessor } from './types';
import useEndSubjectResponsability from '../../../service/requests/useEndSubjectResponsability';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';

type Props = {
  refetchSubject(): void;
};

const useEditProfessorsModal = ({ refetchSubject }: Props) => {
  const { data: listProfessorsResponse, listProfessors } =
    useListProfessorsRequest();
  const {
    isSuccess: isSuccessAssignProfessor,
    isLoading: isLoadingAssignProfessor,
    assignProfessors,
    error: errorAssignProfessor,
    resetStates: resetStatesAssignProfessor,
  } = useAssignProfessorsRequest();
  const {
    isSuccess: isSuccessEndResponsability,
    isLoading: isLoadingEndResponsability,
    endResponsability,
    error: errorEndResponsability,
    resetStates: resetStatesEndResponsability,
  } = useEndSubjectResponsability();

  const { showErrorSnackBar, showSuccessSnackBar } = useSnackBar();

  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveProfessorModalOpen, setIsRemoveProfessorModalOpen] =
    useState(false);
  const [selectedProfessorRemove, setSelectedProfessorRemove] =
    useState<TSubjectResponsible>();
  const [selectedSubject, setSelectedSubject] = useState<TCompleteSubject>();
  const [selectedProfessorsIds, setSelectedProfessorsIds] = useState<string[]>(
    []
  );

  const subjectReponsibles: TSubjectResponsible[] = useMemo(() => {
    if (!listProfessorsResponse || !selectedSubject) return [];
    return selectedSubject.responsables.filter(
      (responsible) =>
        responsible.status.status === ReponsabilityProfessorStatus.APPROVED
    );
  }, [listProfessorsResponse, selectedSubject]);

  const professors: TSelectedProfessor[] = useMemo(() => {
    if (!listProfessorsResponse || !selectedSubject) return [];

    const notAssignedProfessors = listProfessorsResponse.data.filter(
      (prof) =>
        selectedSubject.responsables.find(
          (resp) =>
            resp.professor.user.id === prof.user.id &&
            resp.status.status === ReponsabilityProfessorStatus.APPROVED
        ) === undefined
    );

    return notAssignedProfessors.map((professor) => ({
      id: professor.user.id,
      name: professor.user.name,
    }));
  }, [listProfessorsResponse, selectedSubject]);

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStatesAssignProfessor();
    resetStatesEndResponsability();
    setSelectedProfessorRemove(undefined);
    setSelectedProfessorsIds([]);
  };

  const handleOpenModal = (subject: TCompleteSubject) => {
    setSelectedSubject(subject);
    setIsOpen(true);
  };

  const handleClickRemoveProfessor = (responsible: TSubjectResponsible) => {
    setSelectedProfessorRemove(responsible);
    setIsRemoveProfessorModalOpen(true);
    setIsOpen(false);
  };

  const handleCloseRemoveProfessorModal = () => {
    setSelectedProfessorRemove(undefined);
    setIsRemoveProfessorModalOpen(false);
    setIsOpen(false);
  };

  const handleChangeProfessors = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSelectedProfessorsIds(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleAssignProfessorsClick = () => {
    assignProfessors({
      professors_ids: selectedProfessorsIds.map((id) => Number(id)),
      subject_id: selectedSubject?.id as number,
    });
  };

  const handleEndResponsabilityClick = (id?: number) => {
    if (id) {
      void endResponsability(id);
    }
  };

  useEffect(() => {
    void listProfessors({ quantity: 1000 });
  }, []);

  useEffect(() => {
    if (isSuccessAssignProfessor) {
      showSuccessSnackBar('Professor(es) adicionados');
      resetStatesAssignProfessor();
      setSelectedProfessorsIds([]);
      handleCloseModal();
      refetchSubject();
    }
  }, [isSuccessAssignProfessor]);

  useEffect(() => {
    if (isSuccessEndResponsability) {
      showSuccessSnackBar('Professor(a) removido(a)');
      resetStatesEndResponsability();
      setSelectedProfessorsIds([]);
      handleCloseRemoveProfessorModal();
      refetchSubject();
    }
  }, [isSuccessEndResponsability]);

  useEffect(() => {
    if (errorAssignProfessor) {
      showErrorSnackBar(`Erro ao adicionar professor: ${errorAssignProfessor}`);
      resetStatesAssignProfessor();
      setSelectedProfessorsIds([]);
    }
  }, [errorAssignProfessor]);

  useEffect(() => {
    if (errorEndResponsability) {
      showErrorSnackBar(`Erro ao remover professor: ${errorEndResponsability}`);
      resetStatesEndResponsability();
      setSelectedProfessorsIds([]);
      handleCloseRemoveProfessorModal();
    }
  }, [errorEndResponsability]);

  return {
    isLoadingAssignProfessor,
    isLoadingEndResponsability,
    isSuccessAssignProfessor,
    isOpen,
    isRemoveProfessorModalOpen,
    professors,
    selectedProfessorsIds,
    selectedSubject,
    selectedProfessorRemove,
    subjectReponsibles,
    handleAssignProfessorsClick,
    handleEndResponsabilityClick,
    handleChangeProfessors,
    handleCloseModal,
    handleOpenModal,
    handleCloseRemoveProfessorModal,
    handleClickRemoveProfessor,
  };
};

export default useEditProfessorsModal;
