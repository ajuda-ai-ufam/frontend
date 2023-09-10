import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import {
  TypeMonitorStatus,
  TypeMonitoringStatus,
} from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../service/requests/useGetSubject/types';

const useProfessorHome = () => {
  const user = useGetLoggedUser();
  const navigate = useNavigate();

  const { showErrorSnackBar } = useSnackBar();
  const { data, error, isLoading, listSubjects } = useListSubjectsRequest();

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

    listSubjects({
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
  };
};

export default useProfessorHome;
