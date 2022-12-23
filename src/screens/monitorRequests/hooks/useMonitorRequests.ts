import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllMonitorRequests from '../../../service/requests/useGetAllMonitorRequests';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';

const useMonitorRequests = () => {
  const navigate = useNavigate();
  const user = useGetLoggedUser();
  const { showErrorSnackBar } = useSnackBar();

  const {
    data: requestsResponse,
    isLoading: isLoadingRequests,
    error: requestsError,
    listRequests,
  } = useGetAllMonitorRequests();

  const searchFieldElement = useRef<HTMLInputElement>();
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => requestsResponse?.meta.total_pages || 0,
    [requestsResponse]
  );
  const requests = useMemo(
    () => requestsResponse?.data || [],
    [requestsResponse]
  );

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    void listRequests({ page: 1, search: searchFieldElement.current?.value });
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    void listRequests({
      page: newPage,
      search: searchFieldElement.current?.value
        ? searchFieldElement.current?.value
        : undefined,
    });
    setPage(newPage);
  };

  useEffect(() => {
    if (!user) return navigate(SCREENS.LOGIN);

    void listRequests();
  }, []);

  useEffect(() => {
    if (requestsError) {
      showErrorSnackBar(
        `Erro ao carregar solicitações de monitoria. Erro: ${requestsError}`
      );
    }
  }, [requestsError]);

  return {
    userTypeId: user?.type_user_id,
    page,
    totalPages,
    requests,
    isLoadingRequests,
    searchFieldElement,
    handleChangePage,
    handleSearch,
  };
};

export default useMonitorRequests;
