import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useEnroll from '../../../service/requests/useEnroll';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useEnrollmentModal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>();
  const { showErrorSnackBar } = useSnackBar();

  const { enroll, isLoading, isSuccess, error, resetState } = useEnroll();

  const handleCloseModal = () => {
    setIsOpen(false);
    if (isSuccess) {
      navigate(0);
    }
  };

  const handleOpenModal = (id: number) => {
    if (!isOpen) {
      setId(id);
      setIsOpen(true);
    }
  };

  const handleConfirmEnrollmentClick = () => {
    if (id) {
      enroll(id);
    }
  };

  const handleReturnEnrollModal = () => {
    setIsOpen(false);
    navigate(0);
  };

  useEffect(() => {
    if (error) {
      handleCloseModal();
      resetState();
      showErrorSnackBar(`Erro ao tentar se matricular. Erro: ${error}`);
    }
  }, [error]);

  return {
    isOpen,
    isLoading,
    isSuccess,
    handleCloseModal,
    handleConfirmEnrollmentClick,
    handleOpenModal,
    handleReturnEnrollModal,
  };
};

export default useEnrollmentModal;
