import { useEffect, useMemo, useState } from 'react';
import useGetSchedulesHistoricRequest from '../../../service/requests/useGetSchedulesHistoricRequest';
import { TGetSchedulesHistoricRequestParams } from '../../../service/requests/useGetSchedulesHistoricRequest/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { SchedulesStatus, TypeUserEnum } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useQuery from '../../../utils/useQuery';
import useFiltersForm from './useFiltersForm';
import useFormatSchedules from './useFormatSchedules';
import useScheduleDetailsModal from './useScheduleDetailsModal';

const useSchedulesHistoric = () => {
  const user = useGetLoggedUser();

  const query = useQuery();
  const queryName = query.get('name');
  const querySubject = query.get('subject');

  const { showErrorSnackBar } = useSnackBar();

  const { response, error, getSchedules, isLoading } =
    useGetSchedulesHistoricRequest();

  const { schedules } = useFormatSchedules(response);

  const [page, setPage] = useState(1);

  const [isNavigationFromHome, setIsNavigationFromHome] = useState(false);

  const totalPages = useMemo(() => response?.meta.totalPages || 0, [response]);

  const {
    isLoadingGetAllProfessors,
    isLoadingGetProfessorSubjects,
    responseGetProfessorSubjects,
    responseGetAllProfessors,
    filters,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
    handleFilterClick,
    handleFiltersChange,
    getNameAndEnrollment,
  } = useFiltersForm({ getSchedules, setPage });

  const {
    isOpen: isScheduleDetailsModalOpen,
    handleOpen: handleEventClick,
    handleClose: handleCloseScheduleDetailsModal,
    selectedSchedule,
  } = useScheduleDetailsModal();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    const getValues = getNameAndEnrollment(filters.nameOrEnrollFilter);

    const formatedFilters: TGetSchedulesHistoricRequestParams = {
      page: newPage,
      endDate: filters.endDateFilter?.toDate(),
      startDate: filters.beginDateFilter?.toDate(),
      studentName: getValues.name,
      studentEnrollment: getValues.enrollment.toString(),
      status: SchedulesStatus.REALIZED,
    } as TGetSchedulesHistoricRequestParams;

    const ids = filters.responsiblesOrSubjectsFilter.map((attr) =>
      parseInt(attr.split(',')[0])
    );

    user?.type_user_id === TypeUserEnum.COORDINATOR
      ? (formatedFilters.responsibleIds = ids)
      : (formatedFilters.subjectIds = ids);

    void getSchedules(formatedFilters);

    setPage(newPage);
  };

  useEffect(() => {
    document.title = 'Histórico de Agendamentos';

    if (queryName && querySubject) {
      handleFiltersChange({
        ...filters,
        nameOrEnrollFilter: queryName,
        responsiblesOrSubjectsFilter: [querySubject],
      });

      setIsNavigationFromHome(true);

      return;
    }

    void getSchedules({ page, status: SchedulesStatus.REALIZED });
  }, []);

  useEffect(() => {
    if (isNavigationFromHome) {
      void handleFilterClick();
      setIsNavigationFromHome(false);
    }
  }, [filters, isNavigationFromHome]);

  useEffect(() => {
    if (!error) return;

    showErrorSnackBar(`Erro ao carregar agendamentos: ${error}`);
  }, [error]);

  return {
    responseGetProfessorSubjects,
    responseGetAllProfessors,
    isScheduleDetailsModalOpen,
    schedules,
    page,
    selectedSchedule,
    error,
    totalPages,
    isLoading,
    isLoadingGetAllProfessors,
    isLoadingGetProfessorSubjects,
    filters,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
    handleFilterClick,
    handleEventClick,
    handleChangePage,
    handleCloseScheduleDetailsModal,
  };
};

export default useSchedulesHistoric;
