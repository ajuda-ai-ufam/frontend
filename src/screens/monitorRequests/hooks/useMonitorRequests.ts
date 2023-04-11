import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllMonitorRequests from '../../../service/requests/useGetAllMonitorRequests';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import { TypeMonitorStatus } from '../../../utils/constants';

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
    () => requestsResponse?.meta.totalPages || 0,
    [requestsResponse]
  );
  const requests = useMemo(
    () => requestsResponse?.data || [],
    [requestsResponse]
  );

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    void listRequests({
      page: 1,
      name: searchFieldElement.current?.value,
      status: TypeMonitorStatus.PENDING,
      pageSize: 9,
    });
    setPage(1);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (newPage === page) return;

    void listRequests({
      page: newPage,
      name: searchFieldElement.current?.value
        ? searchFieldElement.current?.value
        : undefined,
      status: TypeMonitorStatus.PENDING,
      pageSize: 9,
    });
    setPage(newPage);
  };

  useEffect(() => {
    if (!user) return navigate(SCREENS.LOGIN);

    void listRequests({ status: TypeMonitorStatus.PENDING, pageSize: 9 });
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
