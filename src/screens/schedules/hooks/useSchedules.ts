import { useEffect, useMemo, useState } from 'react';
import useGetSchedulesRequest from '../../../service/requests/useGetSchedulesRequest';
import { SchedulesFilters } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useScheduleDetailsModal from './useScheduleDetailsModal';
import useFilterParams from './useFilterParams';
import useFormatSchedules from './useFormatSchedules';
import { TPreferentialPlaceProperties } from './types';

const useSchedules = () => {
  const { showErrorSnackBar } = useSnackBar();
  const { response, error, getSchedules, isLoading } = useGetSchedulesRequest();
  const { schedules } = useFormatSchedules(response);
  const {
    isOpen: isScheduleDetailsModalOpen,
    handleCloseCancelModal,
    handleOpenCancelModal,
    modalType,
    handleOpen: handleEventClick,
    handleAcceptSchedule,
    handleClose: handleCloseScheduleDetailsModal,
    handleRefuseSchedule,
    selectedSchedule,
    handleCancelSchedule,
    isCancelSuccess,
  } = useScheduleDetailsModal();

  const preferentialPlaceProperties = useMemo(() => {
    const properties: TPreferentialPlaceProperties = {
      isWarning: false,
      message: '',
      preferentialPlace: selectedSchedule?.monitor_settings?.preferential_place,
    };

    if (!selectedSchedule) return undefined;

    if (selectedSchedule.is_monitoring) {
      if (
        selectedSchedule.monitor.MonitorSettings[0].preferential_place !==
        selectedSchedule.monitor_settings?.preferential_place
      ) {
        properties.isWarning = true;
        properties.message =
          'Quando o agendamento foi requisitado, seu local de preferência era: ';
      } else {
        properties.message = 'Seu local de preferência de atendimento é em: ';
      }
    } else {
      properties.message = 'Este(a) monitor(a) costuma atender em: ';
    }

    return properties;
  }, [selectedSchedule]);

  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(
    SchedulesFilters.NEXT_EVENTS
  );

  const totalPages = useMemo(() => response?.meta.total_pages || 0, [response]);

  const handleFilterClick = (filter: SchedulesFilters) => {
    if (filter === selectedFilter) return;

    const { status, eventType } = useFilterParams(filter);
    void getSchedules({
      page: 1,
      status,
      eventType,
    });
    setSelectedFilter(filter);
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    const { status, eventType } = useFilterParams(selectedFilter);
    void getSchedules({
      page: newPage,
      status,
      eventType,
    });
    setPage(newPage);
  };

  useEffect(() => {
    document.title = 'Agendamentos';
    void getSchedules({ page });
  }, []);

  useEffect(() => {
    if (!error) return;

    showErrorSnackBar(`Erro ao carregar agendamentos: ${error}`);
  }, [error]);

  return {
    isScheduleDetailsModalOpen,
    modalType,
    schedules,
    page,
    selectedFilter,
    selectedSchedule,
    error,
    totalPages,
    isLoading,
    isCancelSuccess,
    handleAcceptSchedule,
    handleFilterClick,
    handleEventClick,
    handleChangePage,
    handleCloseScheduleDetailsModal,
    handleRefuseSchedule,
    handleCloseCancelModal,
    handleOpenCancelModal,
    handleCancelSchedule,
    preferentialPlaceProperties,
  };
};

export default useSchedules;
