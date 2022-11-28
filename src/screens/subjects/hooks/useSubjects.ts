import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListSubjectsRequest from '../../../service/requests/useListSubjectsRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { SCREENS } from '../../../utils/screens';

const useSubjects = () => {
  const navigate = useNavigate();
  const user = useGetLoggedUser();

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
  const subjects = useMemo(
    () => subjectsResponse?.data || [],
    [subjectsResponse]
  );

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    void listSubjects({ search: searchFieldElement.current?.value });
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    void listSubjects({ page: newPage });
    setPage(newPage);
  };

  const handleSubjectClick = (subjectId: number) => {
    navigate(SCREENS.SUBJECT_DETAILS.replace(':id', subjectId.toString()));
  };

  const handleAddProfessor = (subjectId: number) => {
    // TODO - Adicionar modal
    alert(`Add professor para a disciplina ${subjectId}`);
  };

  const handleScheduleHelp = (subjectId: number) => {
    // TODO - Adicionar modal
    alert(`Agendar ajuda na disciplina ${subjectId}`);
  };

  useEffect(() => {
    if (!user) return navigate(SCREENS.LOGIN);

    void listSubjects();
  }, []);

  useEffect(() => {
    if (subjectsError) {
      // TODO - Mudar para snackbar
      alert(`Erro ao carregar disciplinas. Erro: ${subjectsError}`);
    }
  }, [subjectsError]);

  return {
    userTypeId: user?.type_user_id,
    page,
    totalPages,
    subjects,
    isLoadingSubjects,
    searchFieldElement,
    handleAddProfessor,
    handleChangePage,
    handleScheduleHelp,
    handleSearch,
    handleSubjectClick,
  };
};

export default useSubjects;
