import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCancelEnroll from '../../../service/requests/useCancelEnroll';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useCancelEnrollmentModal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>();
  const { showErrorSnackBar } = useSnackBar();

  const { cancelEnroll, isLoading, isSuccess, error, resetState } =
    useCancelEnroll();

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

  const handleConfirmCancelEnrollmentClick = () => {
    if (id) {
      cancelEnroll(id);
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
      showErrorSnackBar(`Erro ao tentar se desmatricular. Erro: ${error}`);
    }
  }, [error]);

  return {
    isOpen,
    isLoading,
    isSuccess,
    handleCloseModal,
    handleConfirmCancelEnrollmentClick,
    handleOpenModal,
    handleReturnEnrollModal,
  };
};

export default useCancelEnrollmentModal;
