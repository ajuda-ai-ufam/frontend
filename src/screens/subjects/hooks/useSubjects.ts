import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';

const useSubjects = () => {
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

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    void listSubjects({ page: 1, search: searchFieldElement.current?.value });
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    void listSubjects({
      page: newPage,
      search: searchFieldElement.current?.value
        ? searchFieldElement.current?.value
        : undefined,
    });
    setPage(newPage);
  };

  const handleSubjectClick = (subjectId: number) => {
    navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));
  };

  const refetchSubjects = () => {
    void listSubjects({
      page: page,
      search: searchFieldElement.current?.value
        ? searchFieldElement.current?.value
        : undefined,
    });
  };

  useEffect(() => {
    document.title = 'Disciplinas';
    if (!user) return navigate(SCREENS.LOGIN);

    void listSubjects();
  }, []);

  useEffect(() => {
    if (subjectsError) {
      showErrorSnackBar(`Erro ao carregar disciplinas. Erro: ${subjectsError}`);
    }
  }, [subjectsError]);

  return {
    userTypeId: user?.type_user_id,
    page,
    totalPages,
    subjects,
    isLoadingSubjects,
    searchFieldElement,
    handleChangePage,
    handleSearch,
    handleSubjectClick,
    refetchSubjects,
  };
};

export default useSubjects;
