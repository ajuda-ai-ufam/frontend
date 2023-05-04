import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetSubject from '../../../service/requests/useGetSubject';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import {
  TypeMonitoringStatus,
  TypeUserEnum,
  UserRole,
} from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';

const useSubjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showDefaultSnackBar } = useSnackBar();

  const { isLoading, data: subject, error, getSubject } = useGetSubject();
  const user = useGetLoggedUser();

  const [search, setSearch] = useState<string>();
  const [selectedProfessorId, setSelectedProfessorId] = useState(-1);

  const userType = useMemo(() => user?.type_user_id as TypeUserEnum, [user]);
  const monitors = useMemo(() => {
    if (!subject) return [];

    let filteredMonitors = subject.monitors.filter(
      (monitor) => monitor.status === TypeMonitoringStatus.AVAILABLE
    );

    if (selectedProfessorId !== -1) {
      filteredMonitors = filteredMonitors.filter(
        (monitor) => monitor.responsable.id === selectedProfessorId
      );
    }

    if (search) {
      filteredMonitors = filteredMonitors.filter((monitor) =>
        monitor.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredMonitors;
  }, [subject, selectedProfessorId, search]);

  const handleSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleGoBackClick = () => navigate(-1);

  const handleProfessorFilterClick = (professorId = -1) => {
    setSelectedProfessorId((prev) => (prev === professorId ? -1 : professorId));
  };

  const getMonitorClickHandler = (
    openScheduleModal: (
      subject: TCompleteSubject,
      monitor: TSubjectMonitor
    ) => void
  ) => {
    return (monitor: TSubjectMonitor) => {
      if (userType !== TypeUserEnum.STUDENT) {
        showDefaultSnackBar(
          `Como ${UserRole[
            userType
          ].toLowerCase()}, você não pode agendar uma monitoria.`
        );
        return;
      }

      if (!subject) return;

      openScheduleModal(subject, monitor);
    };
  };

  const refetchSubject = () => {
    if (id) getSubject(Number(id));
  };

  useEffect(() => {
    if (!userType) navigate(SCREENS.LOGIN);

    if (id) getSubject(Number(id));
  }, []);

  useEffect(() => {
    if (!subject) return;

    document.title = subject.name;
  }, [subject]);

  return {
    error,
    isLoading,
    monitors,
    search,
    selectedProfessorId,
    subject,
    userType,
    handleGoBackClick,
    getMonitorClickHandler,
    handleProfessorFilterClick,
    handleSearch,
    handleSearchChange,
    refetchSubject,
  };
};

export default useSubjectDetails;
