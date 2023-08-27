import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';
import useQuery from '../../../utils/useQuery';

const useSubjects = () => {
  const query = useQuery();
  const querySearch = query.get('search');
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

  const searchFieldElement = useRef<HTMLInputElement>();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    navigate(`/subjects?search=${search}&page=1`);

    void listSubjects({ page: 1, search: search });
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    navigate(`/subjects?search=${search}&page=${newPage}`);
    void listSubjects({
      page: newPage,
      search: search ? search : undefined,
    });
    setPage(newPage);
  };

  const handleSubjectClick = (subjectId: number) => {
    navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));
  };

  const handleManageMonitoringClick = () => {
    navigate('/edit-monitoring?edit=true');
  };

  const refetchSubjects = () => {
    void listSubjects({
      page: page,
      search: search ? search : undefined,
    });
  };

  useEffect(() => {
    document.title = 'Disciplinas';
    if (!user) return navigate(SCREENS.LOGIN);

    if (querySearch) {
      setSearch(querySearch);
      void listSubjects({ page: Number(queryPage), search: querySearch });
      setPage(Number(queryPage));

      return;
    }

    if (queryPage) {
      void listSubjects({ page: Number(queryPage) });
      setPage(Number(queryPage));

      return;
    }
    void listSubjects();
  }, []);

  useEffect(() => {
    if (subjectsError) {
      showErrorSnackBar(`Erro ao carregar disciplinas. Erro: ${subjectsError}`);
    }
  }, [subjectsError]);

  return {
    userTypeId: user?.type_user_id,
    search,
    page,
    totalPages,
    subjects,
    isLoadingSubjects,
    searchFieldElement,
    handleSearchChange,
    handleManageMonitoringClick,
    handleChangePage,
    handleSearch,
    handleSubjectClick,
    refetchSubjects,
  };
};

export default useSubjects;
