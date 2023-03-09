import { SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import useGetAllProfessors from '../../../service/requests/useGetAllProfessors';
import useGetProfessorSubjects from '../../../service/requests/useGetProfessorSubjects';
import { TGetSchedulesHistoricRequestParams } from '../../../service/requests/useGetSchedulesHistoricRequest/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TScheduleHistoricFilters } from './types';

type Props = {
  getSchedules(params: TGetSchedulesHistoricRequestParams): void;
  setPage(page: React.SetStateAction<number>): void;
};

const useSchedulesHistoric = ({ getSchedules, setPage }: Props) => {
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

  const [filters, setFilters] = useState<TScheduleHistoricFilters>({
    nameOrEnrollFilter: '',
    beginDateFilter: null,
    endDateFilter: null,
    responsiblesOrSubjectsFilter: [],
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

  const handleFilterClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const getValues = getNameAndEnrollment(filters.nameOrEnrollFilter);

    const formatedFilters: TGetSchedulesHistoricRequestParams = {
      page: 1,
      endDate: filters.endDateFilter?.toDate(),
      startDate: filters.beginDateFilter?.toDate(),
      studentName: getValues.name,
      studentEnrollment: getValues.enrollment.toString(),
    } as TGetSchedulesHistoricRequestParams;

    const ids = filters.responsiblesOrSubjectsFilter.map((attr) =>
      parseInt(attr.split(',')[0])
    );

    user?.type_user_id === TypeUserEnum.COORDINATOR
      ? (formatedFilters.responsibleIds = ids)
      : (formatedFilters.subjectIds = ids);

    void getSchedules(formatedFilters);

    setPage(1);
  };

  useEffect(() => {
    user?.type_user_id === TypeUserEnum.PROFESSOR
      ? void getProfessorSubjects(parseInt(user.sub))
      : void getProfessors();
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
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    handleFilterClick,
    handleChangeNameOrEnrollFilter,
    handleChangeResponsiblesOrSubjectsFilter,
  };
};

export default useSchedulesHistoric;
