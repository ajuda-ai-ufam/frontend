import { useState } from 'react';

const useTermConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useTermConsentModal;
