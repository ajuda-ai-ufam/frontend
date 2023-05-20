import { SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useUpdateMonitorAvailabilityRequest from '../../../service/requests/useUpdateMonitorAvailabilityRequest';
import { TAvailability } from '../../../service/requests/useUpdateMonitorAvailabilityRequest/types';
import { useSnackBar } from '../../../utils/renderSnackBar';
import {
  HOUR_OPTIONS,
  SAME_AVAILABILITY_INITIAL_STATE,
  TWeekDayAvailabilityState,
  WEEK_DAY_AVAILABILITY_INITIAL_STATE,
} from './types';

const useMonitorAvailabilityModal = () => {
  const navigate = useNavigate();
  const { showErrorSnackBar, showSuccessSnackBar } = useSnackBar();
  const {
    isSuccess,
    isLoading,
    updateMonitorAvailability,
    error,
    resetStates,
  } = useUpdateMonitorAvailabilityRequest();

  const [isOpen, setIsOpen] = useState(false);
  const [weekDayAvailability, setWeekDayAvailability] = useState<
    TWeekDayAvailabilityState[]
  >(WEEK_DAY_AVAILABILITY_INITIAL_STATE);
  const [sameAvailability, setSameAvailability] =
    useState<TWeekDayAvailabilityState>(SAME_AVAILABILITY_INITIAL_STATE);

  const availabilities: TAvailability[] = useMemo(() => {
    const selectedWeekDays = weekDayAvailability.filter(
      (weekDay) => weekDay.isSelected
    );

    return selectedWeekDays.map((weekDay) => ({
      weekDay: weekDay.weekDay,
      hours: [
        {
          start: sameAvailability.isSelected
            ? HOUR_OPTIONS[sameAvailability.fromHourIndex]
            : HOUR_OPTIONS[weekDay.fromHourIndex],
          end: sameAvailability.isSelected
            ? HOUR_OPTIONS[sameAvailability.toHourIndex]
            : HOUR_OPTIONS[weekDay.toHourIndex],
        },
      ],
    }));
  }, [weekDayAvailability, sameAvailability]);

  const dayIsSelected = useMemo(
    () => !!availabilities.length,
    [availabilities]
  );

  const hoursIsSelected: boolean = useMemo(() => {
    if (dayIsSelected) {
      for (const day of availabilities) {
        if (!day.hours[0].start || !day.hours[0].end) {
          return false;
        }
      }
    }
    return true;
  }, [availabilities]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);

    if (isSuccess) return navigate(0);

    resetStates();
  };

  const handleFromSameHourChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;

    setSameAvailability((prev) => {
      prev.fromHourIndex = Number(value);
      return { ...prev };
    });
  };

  const handleFromHourChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value, name },
    } = event;

    setWeekDayAvailability((prev) => {
      prev[Number(name)].fromHourIndex = Number(value);
      return [...prev];
    });
  };

  const handleToSameHourChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;

    setSameAvailability((prev) => {
      prev.toHourIndex = Number(value);
      return { ...prev };
    });
  };

  const handleToHourChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value, name },
    } = event;

    setWeekDayAvailability((prev) => {
      prev[Number(name)].toHourIndex = Number(value);
      return [...prev];
    });
  };

  const handleWeekDaySelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const weekDay = Number(event.currentTarget.id);
    setWeekDayAvailability((prev) => {
      prev[weekDay].isSelected = !prev[weekDay].isSelected;
      return [...prev];
    });
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSameAvailability((prev) => {
      prev.isSelected = event.target.checked;
      return { ...prev };
    });
  };

  const handleSaveAvailability = () => {
    updateMonitorAvailability(availabilities);
  };

  useEffect(() => {
    if (error) {
      showErrorSnackBar(
        `Não foi possível confirmar a disponibilidade, tente novamente mais tarde.`
      );
    }
  }, [error]);

  useEffect(() => {
    if (!isSuccess) return;

    showSuccessSnackBar(`Disponibilidade atualizada com sucesso!`);
  }, [isSuccess]);

  return {
    isLoading,
    isSuccess,
    isOpen,
    sameAvailability,
    weekDayAvailability,
    dayIsSelected,
    hoursIsSelected,
    handleCloseModal,
    handleFromHourChange,
    handleFromSameHourChange,
    handleToHourChange,
    handleToSameHourChange,
    handleWeekDaySelect,
    handleOpenModal,
    handleSwitchChange,
    handleSaveAvailability,
  };
};

export default useMonitorAvailabilityModal;
