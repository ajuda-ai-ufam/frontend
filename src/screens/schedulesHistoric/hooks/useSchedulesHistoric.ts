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
import useGetExternalMonitoringRequest from '../../../service/requests/useGetExternalMonitoringRequest';
import useFormatScheduleExternalMonitoring from './useFormatScheduleExternalMonitoring';
import { TGetExternalMonitoringParams } from '../../../service/requests/useGetExternalMonitoringRequest/types';

const useSchedulesHistoric = () => {
  const user = useGetLoggedUser();

  const query = useQuery();
  const queryName = query.get('name');
  const querySubject = query.get('subject');

  const { showErrorSnackBar } = useSnackBar();

  const { response, error, getSchedules, isLoading } =
    useGetSchedulesHistoricRequest();

  const {
    data: externalMonitorings,
    error: errorExternalMonitoring,
    getExternalMonitoring,
  } = useGetExternalMonitoringRequest();

  const [typeMonitoring, setTypeMonitoring] = useState('Monitoria Interna');

  const { schedules } =
    typeMonitoring == 'Monitoria Interna'
      ? useFormatSchedules(response)
      : useFormatScheduleExternalMonitoring(externalMonitorings);

  const [page, setPage] = useState(1);

  const [isNavigationFromHome, setIsNavigationFromHome] = useState(false);

  const totalPages = useMemo(
    () =>
      typeMonitoring == 'Monitoria Interna'
        ? response?.meta.totalPages || 0
        : externalMonitorings?.meta.totalPages || 0,
    [response, externalMonitorings, typeMonitoring]
  );

  const {
    isLoadingGetAllProfessors,
    isLoadingGetProfessorSubjects,
    responseGetProfessorSubjects,
    responseGetAllProfessors,
    filters,
    allSubjects,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
    handleFilterClick,
    handleFiltersChange,
    getNameAndEnrollment,
    handleChangeOnlySubjectsFilter,
  } = useFiltersForm({
    typeMonitoring,
    getExternalMonitoring,
    getSchedules,
    setPage,
  });

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
    };

    const formatedFiltersExternalMonitoringFilters: TGetExternalMonitoringParams =
      {
        page: newPage,
        endDate: filters.endDateFilter?.toDate(),
        startDate: filters.beginDateFilter?.toDate(),
        studentName: getValues.name,
        studentEnrollment: getValues.enrollment.toString(),
      };

    const ids = filters.responsiblesOrSubjectsFilter.map((attr) =>
      parseInt(attr.split(',')[0])
    );
    if (typeMonitoring == 'Monitoria Interna') {
      user?.type_user_id === TypeUserEnum.COORDINATOR
        ? (formatedFilters.responsibleIds = ids)
        : (formatedFilters.subjectIds = ids);
    } else {
      user?.type_user_id === TypeUserEnum.COORDINATOR
        ? (formatedFiltersExternalMonitoringFilters.responsibleIds = ids)
        : (formatedFiltersExternalMonitoringFilters.subjectIds = ids);
    }

    if (typeMonitoring == 'Monitoria Interna') {
      void getSchedules(formatedFilters);
    } else {
      void getExternalMonitoring(formatedFiltersExternalMonitoringFilters);
    }

    setPage(newPage);
  };

  const handleTypeMonitoringChange = () => {
    if (typeMonitoring == 'Monitoria Externa') {
      setTypeMonitoring('Monitoria Interna');
    } else {
      setTypeMonitoring('Monitoria Externa');
    }
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
    void getExternalMonitoring({ page });
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

  useEffect(() => {
    if (!errorExternalMonitoring) return;

    showErrorSnackBar(
      `Erro ao carregar agendamentos: ${errorExternalMonitoring}`
    );
  }, [errorExternalMonitoring]);

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
    typeMonitoring,
    allSubjects,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
    handleChangeOnlySubjectsFilter,
    handleFilterClick,
    handleEventClick,
    handleChangePage,
    handleCloseScheduleDetailsModal,
    handleTypeMonitoringChange,
  };
};

export default useSchedulesHistoric;
