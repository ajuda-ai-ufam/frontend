import { useEffect, useMemo, useState } from 'react';
import useGetSchedulesRequest from '../../../service/requests/useGetSchedulesRequest';
import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';
import { SchedulesFilters } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useFilterParams from './useFilterParams';
import useFormatSchedules from './useFormatSchedules';

const useSchedules = () => {
  const { showInfoSnackBar, showErrorSnackBar } = useSnackBar();
  const { response, error, getSchedules, isLoading } = useGetSchedulesRequest();
  const { schedules } = useFormatSchedules(response);

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

  const handleEventClick = (schedule: TSchedules) => {
    // TODO: Open modal
    showInfoSnackBar(`Você selecionou o evento ${schedule.id}`);
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
    schedules,
    page,
    selectedFilter,
    error,
    totalPages,
    isLoading,
    handleFilterClick,
    handleEventClick,
    handleChangePage,
  };
};

export default useSchedules;
