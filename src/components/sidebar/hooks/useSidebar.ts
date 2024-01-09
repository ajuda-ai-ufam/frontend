import {
  EventNoteRounded,
  GroupAddRounded,
  LogoutRounded,
  SchoolRounded,
  HistoryRounded,
  AccountCircle,
  ManageHistoryRounded,
  HomeRounded,
  Home,
} from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useClearStorage from '../../../service/storage/clearStorage';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import {
  SidebarItemEnum,
  TypeUserEnum,
  UserRole,
} from '../../../utils/constants';
import { SCREENS } from '../../../utils/screens';
import theme from '../../../utils/theme';
import { TSidebarItem } from './types';

const useSidebar = () => {
  const user = useGetLoggedUser();
  const navigate = useNavigate();
  const showTemporarySidebar = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState(true);

  const userName = useMemo(
    () => (user ? user.username.split(' ')[0] : 'Nome'),
    [user]
  );
  const userRole = useMemo(
    () => (user ? UserRole[user.type_user_id] : 'Usuário'),
    [user]
  );

  const editProfileItem: TSidebarItem = {
    key: SidebarItemEnum.EDIT_PROFILE,
    text: userName,
    subtext: userRole,
    icon: AccountCircle,
    handleClick: () => {
      navigate(SCREENS.EDIT_PROFILE);
    },
  };

  const editMonitoringItem: TSidebarItem = {
    key: SidebarItemEnum.EDIT_MONITORING,
    text: 'Editar Monitoria',
    icon: ManageHistoryRounded,
    handleClick: () => {
      navigate(SCREENS.EDIT_MONITORING);
    },
  };

  const homeStudentItem: TSidebarItem = {
    key: SidebarItemEnum.HOME,
    text: 'Início',
    icon: Home,
    handleClick: () => {
      navigate(SCREENS.HOME);
    },
  };

  const subjectsItem: TSidebarItem = {
    key: SidebarItemEnum.SUBJECTS,
    text: 'Disciplinas',
    icon: SchoolRounded,
    handleClick: () => {
      navigate(SCREENS.SUBJECTS);
    },
  };

  const professorHomeItem: TSidebarItem = {
    key: SidebarItemEnum.PROFESSOR_HOME,
    text: 'Início',
    icon: HomeRounded,
    handleClick: () => {
      navigate(SCREENS.HOME);
    },
  };

  const schedulesHistoricItem: TSidebarItem = {
    key: SidebarItemEnum.SCHEDULES_HISTORIC,
    text: 'Histórico',
    icon: HistoryRounded,
    handleClick: () => {
      navigate(SCREENS.SCHEDULES_HISTORIC);
    },
  };

  const schedulesItem: TSidebarItem = {
    key: SidebarItemEnum.SCHEDULES,
    text: 'Agendamentos',
    icon: EventNoteRounded,
    handleClick: () => {
      navigate(SCREENS.SCHEDULES);
    },
  };

  const monitorRequestsItem: TSidebarItem = {
    key: SidebarItemEnum.MONITOR_REQUESTS,
    text: 'Solicitações',
    icon: GroupAddRounded,
    handleClick: () => {
      navigate(SCREENS.MONITOR_REQUESTS);
    },
  };

  const logoutItem: TSidebarItem = {
    key: SidebarItemEnum.LOGOUT,
    text: 'Sair',
    icon: LogoutRounded,
    handleClick: () => {
      useClearStorage();
      navigate(SCREENS.LOGIN);
    },
  };

  const handleToogleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFeedbackClick = () => {
    window.open('https://forms.gle/6YeiNgmw2KMdTzxL8');
  };
  useEffect(() => {
    setIsOpen(!showTemporarySidebar);
  }, [showTemporarySidebar]);

  const items = useMemo(() => {
    if (!user) return [subjectsItem, logoutItem];

    if (user?.type_user_id === TypeUserEnum.STUDENT) {
      if (user?.monitor) {
        return [
          editProfileItem,
          homeStudentItem,
          subjectsItem,
          editMonitoringItem,
          schedulesItem,
          logoutItem,
        ];
      } else {
        return [
          editProfileItem,
          homeStudentItem,
          subjectsItem,
          schedulesItem,
          logoutItem,
        ];
      }
    } else if (user.type_user_id === TypeUserEnum.PROFESSOR) {
      return [
        editProfileItem,
        professorHomeItem,
        subjectsItem,
        schedulesHistoricItem,
        logoutItem,
      ];
    }

    return [
      editProfileItem,
      subjectsItem,
      monitorRequestsItem,
      schedulesHistoricItem,
      logoutItem,
    ];
  }, [user]);

  return {
    isOpen,
    showTemporarySidebar,
    items,
    userName,
    userRole,
    handleToogleSidebar,
    handleFeedbackClick,
  };
};

export default useSidebar;
