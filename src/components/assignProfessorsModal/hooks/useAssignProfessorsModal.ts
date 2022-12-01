import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAssignProfessorsRequest from '../../../service/requests/useAssignProfessorsRequest';
import useListProfessorsRequest from '../../../service/requests/useListProfessorsRequest';
import { TSubject } from '../../../service/requests/useListSubjectsRequest/types';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TSelectedProfessor } from './types';

const useAssignProfessorsModal = () => {
  const navigate = useNavigate();
  const { data: listProfessorsResponse, listProfessors } =
    useListProfessorsRequest();
  const { isSuccess, isLoading, assignProfessors, error, resetStates } =
    useAssignProfessorsRequest();
  const { showErrorSnackBar } = useSnackBar();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<TSubject>();
  const [selectedProfessorsIds, setSelectedProfessorsIds] = useState<string[]>(
    []
  );

  const professors: TSelectedProfessor[] = useMemo(() => {
    if (!listProfessorsResponse || !selectedSubject) return [];

    const notAssignedProfessors = listProfessorsResponse.data.filter(
      (prof) =>
        prof.SubjectResponsability.find(
          (resp) => resp.subject.code === selectedSubject?.code
        ) === undefined
    );

    return notAssignedProfessors.map((professor) => ({
      id: professor.user.id,
      name: professor.user.name,
    }));
  }, [listProfessorsResponse, selectedSubject]);

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStates();
    setSelectedProfessorsIds([]);

    if (isSuccess) navigate(0);
  };

  const handleOpenModal = (subject: TSubject) => {
    setSelectedSubject(subject);
    setIsOpen(true);
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

  useEffect(() => {
    void listProfessors({ quantity: 1000 });
  }, []);

  useEffect(() => {
    if (error) {
      showErrorSnackBar(`Erro ao adicionar professores. Erro: ${error}`);
    }
  }, [error]);

  return {
    isLoading,
    isSuccess,
    isOpen,
    professors,
    selectedProfessorsIds,
    selectedSubject,
    handleAssignProfessorsClick,
    handleChangeProfessors,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useAssignProfessorsModal;
