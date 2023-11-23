import { useEffect, useState } from 'react';

const useStatusTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTooltipClose = () => {
    setIsOpen(false);
  };

  const handleTooltipOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen]);

  return { isOpen, handleTooltipClose, handleTooltipOpen };
};

export default useStatusTooltip;
