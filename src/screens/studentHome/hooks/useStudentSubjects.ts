import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';
import useQuery from '../../../utils/useQuery';
import useGetSubject from '../../../service/requests/useGetSubject';

const useStudentSubjects = () => {
  const query = useQuery();
  const queryPage = query.get('page');
  const navigate = useNavigate();
  const user = useGetLoggedUser();
  const { showErrorSnackBar } = useSnackBar();

  const {
    data: subjectsResponse,
    isLoading: isLoadingSubjects,
    error: subjectsError,
    listSubjects,
  } = useListSubjectsRequest();

  const { data: monitorSubject, getSubject } = useGetSubject();
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => subjectsResponse?.meta.total_pages || 0,
    [subjectsResponse]
  );
  const subjects = useMemo(() => {
    const subs = subjectsResponse?.data || [];

    subs.forEach(
      (subjects) =>
        (subjects.responsables = subjects.responsables.filter(
          (responsable) =>
            responsable.status.status === ReponsabilityProfessorStatus.APPROVED
        ))
    );

    return subs;
  }, [subjectsResponse]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    navigate(`/home?page=${newPage}`);
    void listSubjects({
      onlyEnrollments: true,
      page: newPage,
    });
    setPage(newPage);
  };

  const handleSubjectClick = (subjectId: number) => {
    navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));
  };

  const handleManageMonitoringClick = () => {
    navigate('/edit-monitoring?edit=true');
  };

  const navigateToSujects = () => {
    navigate(SCREENS.SUBJECTS);
    return;
  };

  useEffect(() => {
    document.title = 'Início';

    if (!user) return navigate(SCREENS.LOGIN);

    if (user.monitor) {
      void getSubject(user.monitor.subject_id);
    }

    if (queryPage) {
      void listSubjects({ onlyEnrollments: true, page: Number(queryPage) });
      setPage(Number(queryPage));

      return;
    }
    void listSubjects({ onlyEnrollments: true });
  }, []);

  useEffect(() => {
    if (subjectsError) {
      showErrorSnackBar(`Erro ao carregar disciplinas. Erro: ${subjectsError}`);
    }
  }, [subjectsError]);

  return {
    userTypeId: user?.type_user_id,
    monitorSubject,
    page,
    totalPages,
    subjects,
    isLoadingSubjects,
    handleManageMonitoringClick,
    handleChangePage,
    handleSubjectClick,
    navigateToSujects,
  };
};

export default useStudentSubjects;
