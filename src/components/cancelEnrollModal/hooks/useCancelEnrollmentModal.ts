import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCancelEnroll from '../../../service/requests/useCancelEnroll';

const useCancelEnrollmentModal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>();

  const { cancelEnroll, isLoading, isSuccess } = useCancelEnroll();

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
