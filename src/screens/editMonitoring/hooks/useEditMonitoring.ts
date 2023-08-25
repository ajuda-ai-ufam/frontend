import { useSnackBar } from '../../../utils/renderSnackBar';
import { useState, useMemo, useEffect } from 'react';
import { TWeekDayAvailabilityState } from './types';
import {
  WEEK_DAY_AVAILABILITY_INITIAL_STATE,
  END_HOURS_OPTIONS,
  START_HOURS_OPTIONS,
} from './contants';
import { TAvailability } from '../../../service/requests/useUpdateMonitorAvailabilityRequest/types';
import useGetMonitorRequest from '../../../service/requests/useGetMonitorRequest';
import { SelectChangeEvent } from '@mui/material';
import usePatchMonitorRequest from '../../../service/requests/usePatchMonitorRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import useQuery from '../../../utils/useQuery';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../utils/screens';

const useEditMonitoring = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const user = useGetLoggedUser();
  const { showSuccessSnackBar, showErrorSnackBar } = useSnackBar();

  const {
    getMonitor,
    data: monitor,
    isLoading: isLoadingGetMonitor,
  } = useGetMonitorRequest();
  const {
    isLoading: isLoadingPatch,
    isSuccess: isSuccessPatch,
    error: errorPatch,
    patchMonitor,
  } = usePatchMonitorRequest();

  const [preference, setPreference] = useState('');
  const [editMode, setEditMode] = useState(
    query.get('edit') === 'true' ? true : false
  );
  const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
  const [weekDayAvailability, setWeekDayAvailability] = useState<
    TWeekDayAvailabilityState[]
  >(WEEK_DAY_AVAILABILITY_INITIAL_STATE);

  const resetWeekDay = () => {
    setWeekDayAvailability((prev) =>
      prev.map((weekDay) => ({
        ...weekDay,
        isSelected: false,
        fromHourIndex: -1,
        toHourIndex: -1,
      }))
    );
  };

  const setupOldAvailability = () => {
    if (monitor) {
      const oldAvailability: TWeekDayAvailabilityState[] =
        WEEK_DAY_AVAILABILITY_INITIAL_STATE;

      monitor.availability.map((weekDay) => {
        oldAvailability[weekDay.week_day] = {
          weekDay: weekDay.week_day,
          name: oldAvailability[weekDay.week_day].name,
          label: oldAvailability[weekDay.week_day].label,
          isSelected: true,
          fromHourIndex: START_HOURS_OPTIONS.indexOf(weekDay.start),
          toHourIndex: END_HOURS_OPTIONS.indexOf(weekDay.end),
        };
      });

      setWeekDayAvailability([...oldAvailability]);
    }
  };

  const hasAvailability = useMemo(
    () => !!monitor?.availability.length,
    [monitor]
  );

  const hasPreference = useMemo(() => !!monitor?.monitorSettings, [monitor]);

  const monitorAvailabilitySaved = useMemo(() => {
    return monitor?.availability;
  }, [monitor]);

  const availabilities: TAvailability[] = useMemo(() => {
    const selectedWeekDays = weekDayAvailability.filter(
      (weekDay) => weekDay.isSelected
    );

    return selectedWeekDays.map((weekDay) => ({
      weekDay: weekDay.weekDay,
      hours: [
        {
          start: START_HOURS_OPTIONS[weekDay.fromHourIndex],
          end: END_HOURS_OPTIONS[weekDay.toHourIndex],
        },
      ],
    }));
  }, [weekDayAvailability]);

  const availabilityMissing = useMemo(() => {
    if (availabilities.length == 0) {
      return true;
    }
    for (let index = 0; index < availabilities.length; index++) {
      if (
        !availabilities[index].hours[0].start ||
        availabilities[index].hours[0].start == '-1' ||
        !availabilities[index].hours[0].end ||
        availabilities[index].hours[0].end == '-1'
      ) {
        return true;
      }
    }
    return false;
  }, [availabilities]);

  const [settingsHasChanged, setSettingsHasChanged] = useState(false);
  const [disableSaveButton, setDisableSaveButton] = useState(true);

  const handlePreferenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPreference(event.target.value);
    setSettingsHasChanged(true);
    if (event.target.value === '') {
      setDisableSaveButton(true);
    }
  };

  const handleEditButtonClick = () => {
    setEditMode(!editMode);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const weekDay = Number(event.target.id);
    setSettingsHasChanged(true);
    setWeekDayAvailability((prev) => {
      if (prev[weekDay].isSelected === true) {
        prev[weekDay].isSelected = !prev[weekDay].isSelected;
        prev[weekDay].fromHourIndex = -1;
        prev[weekDay].toHourIndex = -1;
      } else {
        prev[weekDay].isSelected = !prev[weekDay].isSelected;
      }
      return [...prev];
    });
  };

  const handleSelectStartChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value, name },
    } = event;

    setWeekDayAvailability((prev) => {
      prev[Number(name)].fromHourIndex = Number(value);
      prev[Number(name)].toHourIndex = Number(-1);
      return [...prev];
    });
    setSettingsHasChanged(true);
  };

  const handleSelectEndChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value, name },
    } = event;

    setWeekDayAvailability((prev) => {
      prev[Number(name)].toHourIndex = Number(value);
      return [...prev];
    });
    setSettingsHasChanged(true);
  };

  const handleReplicate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const replicate = {
      start: weekDayAvailability[Number(e.currentTarget.id)].fromHourIndex,
      end: weekDayAvailability[Number(e.currentTarget.id)].toHourIndex,
    };
    if (availabilityMissing) {
      setSettingsHasChanged(true);
    }
    setWeekDayAvailability((prev) => {
      prev.forEach((day) => {
        if (day.isSelected) {
          day.fromHourIndex = replicate.start;
          day.toHourIndex = replicate.end;
        }
      });

      return [...prev];
    });
  };

  const handleSaveClick = () => {
    patchMonitor(Number(user?.monitor?.id), {
      preferentialPlace: preference,
      availability: availabilities,
    });
  };

  const handleCancelClick = () => {
    if (settingsHasChanged) {
      setIsOpenCancelModal(true);
    } else {
      setEditMode(false);
    }
  };

  const handleCancelConfirm = () => {
    if (monitor) {
      hasPreference
        ? setPreference(monitor?.monitorSettings.preferentialPlace)
        : setPreference('');
      hasAvailability ? setupOldAvailability() : resetWeekDay();
      setEditMode(false);
      setSettingsHasChanged(false);
      setDisableSaveButton(true);
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpenCancelModal(false);
  };

  useEffect(() => {
    if (!availabilityMissing && settingsHasChanged && !!preference) {
      setDisableSaveButton(false);
      return;
    }

    setDisableSaveButton(true);
  }, [availabilityMissing, settingsHasChanged, preference]);

  useEffect(() => {
    if (!user?.monitor) {
      navigate(SCREENS.SUBJECTS);
    } else {
      document.title = 'Editar Monitoria';
      void getMonitor(Number(user?.monitor?.id));
      navigate(SCREENS.EDIT_MONITORING);
    }
  }, []);

  useEffect(() => {
    if (errorPatch)
      showErrorSnackBar(
        'Não foi possível editar a monitoria, tente novamente mais tarde.'
      );
  }, [errorPatch]);

  useEffect(() => {
    if (isSuccessPatch) {
      resetWeekDay();
      setPreference('');
      setEditMode(!editMode);
      showSuccessSnackBar('Monitoria alterada com sucesso');
      void getMonitor(Number(user?.monitor?.id));
    }
  }, [isSuccessPatch]);

  useEffect(() => {
    setupOldAvailability();
  }, [hasAvailability]);

  useEffect(() => {
    if (monitor?.monitorSettings) {
      setPreference(monitor.monitorSettings.preferentialPlace);
    }
  }, [hasPreference]);

  return {
    weekDayAvailability,
    hasAvailability,
    monitor,
    preference,
    hasPreference,
    editMode,
    monitorAvailabilitySaved,
    isLoadingGetMonitor,
    isLoadingPatch,
    isSuccessPatch,
    isOpenCancelModal,
    disableSaveButton,
    handlePreferenceChange,
    handleEditButtonClick,
    handleSwitchChange,
    handleSelectStartChange,
    handleSelectEndChange,
    handleReplicate,
    handleSaveClick,
    handleCancelClick,
    handleCancelConfirm,
    handleClose,
  };
};

export default useEditMonitoring;
