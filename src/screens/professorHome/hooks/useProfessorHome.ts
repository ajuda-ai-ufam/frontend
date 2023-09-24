import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllMonitorRequests from '../../../service/requests/useGetAllMonitorRequests';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../service/requests/useGetSubject/types';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import {
  TypeMonitorStatus,
  TypeMonitoringStatus,
} from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import { useMediaQuery } from '@mui/material';
import theme from '../../../utils/theme';

const useProfessorHome = () => {
  const user = useGetLoggedUser();
  const navigate = useNavigate();

  const { showErrorSnackBar } = useSnackBar();

  const { data, error, isLoading, listSubjects } = useListSubjectsRequest();
  const { data: requestsResponse, listRequests } = useGetAllMonitorRequests();

  const isPhone = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);

  const handleSearchMonitorRequest = (
    subject_id: number,
    student_id?: number
  ) => {
    return requestsResponse?.data.filter(
      (request) =>
        request.student_id == student_id && request.subject_id == subject_id
    )[0];
  };

  const handleAccessSubject = (subjectId: number, isHeader?: boolean) => {
    if (isHeader) {
      if (isPhone)
        navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));

      return;
    }

    navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));
  };

  const handleSeeHistoric = (name: string, subject: string) => {
    window.open(
      `${SCREENS.SCHEDULES_HISTORIC}?name=${name}&subject=${subject}`
    );
  };

  const sortMonitorsByStatus = (a: TSubjectMonitor, b: TSubjectMonitor) => {
    if (
      a.status === TypeMonitoringStatus.PENDING &&
      b.status !== TypeMonitoringStatus.PENDING
    ) {
      return -1;
    } else if (
      a.status !== TypeMonitoringStatus.PENDING &&
      b.status === TypeMonitoringStatus.PENDING
    ) {
      return 1;
    } else if (a.status && b.status) {
      return a.status.localeCompare(b.status);
    }

    return 0;
  };

  const filteredSubjects = useMemo(() => {
    if (user && data) {
      return data.data.map((subject) => {
        const filteredMonitors = subject.monitors
          .filter((monitor) => monitor.responsable.id == parseInt(user.sub))
          .sort(sortMonitorsByStatus);

        return {
          ...subject,
          monitors: filteredMonitors,
        };
      }) as TCompleteSubject[];
    }

    return [];
  }, [data]);

  useEffect(() => {
    if (error) {
      showErrorSnackBar(
        `Erro ao buscar disciplinas do responsável. Erro: ${error}`
      );
    }
  }, [error]);

  useEffect(() => {
    if (!user) return navigate(SCREENS.LOGIN);

    document.title = 'Início';

    void listRequests({ status: TypeMonitorStatus.PENDING, pageSize: 9 });

    void listSubjects({
      teacherId: parseInt(user.sub),
      monitorStatus: [
        TypeMonitorStatus.PENDING,
        TypeMonitorStatus.APPROVED,
        TypeMonitorStatus.AVAILABLE,
      ],
    });
  }, []);

  return {
    error,
    isLoading,
    filteredSubjects,
    handleSearchMonitorRequest,
    handleAccessSubject,
    handleSeeHistoric,
  };
};

export default useProfessorHome;
