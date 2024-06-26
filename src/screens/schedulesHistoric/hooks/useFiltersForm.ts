import { SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import useGetAllProfessors from '../../../service/requests/useGetAllProfessors';
import useGetProfessorSubjects from '../../../service/requests/useGetProfessorSubjects';
import { TGetSchedulesHistoricRequestParams } from '../../../service/requests/useGetSchedulesHistoricRequest/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { SchedulesStatus, TypeUserEnum } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TScheduleHistoricFilters } from './types';
import { TGetExternalMonitoringParams } from '../../../service/requests/useGetExternalMonitoringRequest/types';
import useAllSubjectsRequest from '../../../service/requests/useAllSubjectsRequest';

type Props = {
  typeMonitoring: string;
  getExternalMonitoring(params: TGetExternalMonitoringParams): void;
  getSchedules(params: TGetSchedulesHistoricRequestParams): void;
  setPage(page: React.SetStateAction<number>): void;
};

const useSchedulesHistoric = ({
  typeMonitoring,
  getExternalMonitoring,
  getSchedules,
  setPage,
}: Props) => {
  const { showErrorSnackBar } = useSnackBar();

  const user = useGetLoggedUser();

  const {
    error: errorGetProfessorSubjects,
    getProfessorSubjects,
    isLoading: isLoadingGetProfessorSubjects,
    response: responseGetProfessorSubjects,
  } = useGetProfessorSubjects();

  const {
    error: errorGetAllProfessors,
    getProfessors,
    isLoading: isLoadingGetAllProfessors,
    response: responseGetAllProfessors,
  } = useGetAllProfessors();

  const { data: allSubjects, getAllSubjects } = useAllSubjectsRequest();

  const [filters, setFilters] = useState<TScheduleHistoricFilters>({
    nameOrEnrollFilter: '',
    beginDateFilter: null,
    endDateFilter: null,
    responsiblesOrSubjectsFilter: [],
    subjectsFilter: [],
  });

  const handleFiltersChange = (filters: TScheduleHistoricFilters) => {
    setFilters(filters);
  };

  const handleChangeBeginDateFilter = (date: Dayjs | null) => {
    const currentFilters: TScheduleHistoricFilters = {
      ...filters,
      beginDateFilter: date,
    };

    handleFiltersChange(currentFilters);
  };

  const handleChangeEndDateFilter = (date: Dayjs | null) => {
    const currentFilters: TScheduleHistoricFilters = {
      ...filters,
      endDateFilter: date,
    };

    handleFiltersChange(currentFilters);
  };

  const handleChangeResponsiblesOrSubjectsFilter = (
    e: SelectChangeEvent<typeof responsiblesOrSubjectsFilter>
  ) => {
    const value = e.target.value as string;

    const responsiblesOrSubjectsFilter =
      typeof value === 'string' ? value.split(' ') : value;

    const currentFilters: TScheduleHistoricFilters = {
      ...filters,
      responsiblesOrSubjectsFilter: responsiblesOrSubjectsFilter,
    };

    handleFiltersChange(currentFilters);
  };

  const handleChangeOnlySubjectsFilter = (
    e: SelectChangeEvent<typeof responsiblesOrSubjectsFilter>
  ) => {
    const value = e.target.value as string;

    const responsiblesOrSubjectsFilter =
      typeof value === 'string' ? value.split(' ') : value;

    const currentFilters: TScheduleHistoricFilters = {
      ...filters,
      subjectsFilter: responsiblesOrSubjectsFilter,
    };

    handleFiltersChange(currentFilters);
  };

  const handleChangeNameOrEnrollFilter = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentFilters: TScheduleHistoricFilters = {
      ...filters,
      nameOrEnrollFilter: e.target.value,
    };

    handleFiltersChange(currentFilters);
  };

  const getNameAndEnrollment = (str: string) => {
    if (!str.length)
      return {
        name: '',
        enrollment: '',
      };
    else if (!Number.isNaN(parseInt(String(str))))
      return {
        name: '',
        enrollment: parseInt(String(str)),
      };

    return {
      name: str,
      enrollment: '',
    };
  };

  const handleFilterClick = async (e?: React.SyntheticEvent<EventTarget>) => {
    e?.preventDefault();

    const getValues = getNameAndEnrollment(filters.nameOrEnrollFilter);

    const formatedFilters: TGetSchedulesHistoricRequestParams = {
      page: 1,
      endDate: filters.endDateFilter?.toDate(),
      startDate: filters.beginDateFilter?.toDate(),
      studentName: getValues.name,
      studentEnrollment: getValues.enrollment.toString(),
      status: SchedulesStatus.REALIZED,
    };

    const formatedFiltersExternalMonitoringFilters: TGetExternalMonitoringParams =
      {
        page: 1,
        endDate: filters.endDateFilter?.toDate(),
        startDate: filters.beginDateFilter?.toDate(),
        studentName: getValues.name,
        studentEnrollment: getValues.enrollment.toString(),
      };

    const ids = filters.responsiblesOrSubjectsFilter.map((attr) =>
      parseInt(attr.split(',')[0])
    );
    const subjectOnlyId = filters.subjectsFilter.map((attr) =>
      parseInt(attr.split(',')[0])
    );
    if (typeMonitoring == 'Monitoria Interna') {
      if (user?.type_user_id === TypeUserEnum.COORDINATOR) {
        formatedFilters.responsibleIds = ids;
        formatedFilters.subjectIds = subjectOnlyId;
      } else {
        formatedFilters.subjectIds = ids;
      }
    } else {
      if (user?.type_user_id === TypeUserEnum.COORDINATOR) {
        formatedFiltersExternalMonitoringFilters.responsibleIds = ids;
        formatedFiltersExternalMonitoringFilters.subjectIds = subjectOnlyId;
      } else {
        formatedFiltersExternalMonitoringFilters.subjectIds = ids;
      }
    }

    if (typeMonitoring == 'Monitoria Interna') {
      void getSchedules(formatedFilters);
    } else {
      void getExternalMonitoring(formatedFiltersExternalMonitoringFilters);
    }

    setPage(1);
  };

  useEffect(() => {
    if (user?.type_user_id === TypeUserEnum.PROFESSOR) {
      void getProfessorSubjects(parseInt(user.sub));
    } else {
      void getProfessors();
      void getAllSubjects();
    }
  }, []);

  useEffect(() => {
    if (errorGetAllProfessors) {
      showErrorSnackBar(
        'Erro ao carregar a lista de professores! Tente novamente mais tarde'
      );
    }
  }, [errorGetAllProfessors]);

  useEffect(() => {
    if (errorGetProfessorSubjects) {
      showErrorSnackBar(
        'Erro ao carregar a lista de disciplinas! Tente novamente mais tarde'
      );
    }
  }, [errorGetProfessorSubjects]);

  return {
    responseGetProfessorSubjects,
    responseGetAllProfessors,
    isLoadingGetProfessorSubjects,
    isLoadingGetAllProfessors,
    getNameAndEnrollment,
    filters,
    allSubjects,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleFilterClick,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
    handleFiltersChange,
    handleChangeOnlySubjectsFilter,
  };
};

export default useSchedulesHistoric;
