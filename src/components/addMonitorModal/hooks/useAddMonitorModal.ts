import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAddMonitorRequest from '../../../service/requests/useAddMonitorRequest';
import {
  TCompleteSubject,
  TSubjectResponsible,
} from '../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useAddMonitorModal = () => {
  const navigate = useNavigate();
  const user = useGetLoggedUser();
  const { showErrorSnackBar } = useSnackBar();

  const { isSuccess, isLoading, addMonitor, error, resetStates } =
    useAddMonitorRequest();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<TCompleteSubject>();
  const [selectedProfessorId, setSelectedProfessorId] = useState(-1);

  const professors: TSubjectResponsible[] = useMemo(() => {
    if (!selectedSubject) return [];

    return selectedSubject.responsables;
  }, [selectedSubject]);

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStates();
    setSelectedProfessorId(-1);

    if (isSuccess) navigate(0);
  };

  const handleOpenModal = (subject: TCompleteSubject) => {
    setSelectedSubject(subject);
    setIsOpen(true);
  };

  const handleChangeProfessor = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSelectedProfessorId(Number(value));
  };

  const handleAddMonitorClick = () => {
    addMonitor({
      professor_id: selectedProfessorId,
      subject_id: selectedSubject?.id as number,
    });
  };

  useEffect(() => {
    if (error) {
      showErrorSnackBar(`Erro ao solicitar para ser monitor. Erro: ${error}`);
    }
  }, [error]);

  return {
    userId: user?.sub,
    isLoading,
    isSuccess,
    isOpen,
    professors,
    selectedProfessorId,
    selectedSubject,
    handleAddMonitorClick,
    handleChangeProfessor,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useAddMonitorModal;
