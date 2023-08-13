import {
  EventNoteRounded,
  GroupAddRounded,
  LogoutRounded,
  SchoolRounded,
  HistoryRounded,
  AccountCircle,
  ManageHistoryRounded,
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

  const subjectsItem: TSidebarItem = {
    key: SidebarItemEnum.SUBJECTS,
    text: 'Disciplinas',
    icon: SchoolRounded,
    handleClick: () => {
      navigate(SCREENS.SUBJECTS);
    },
  };

  const schedulesHistoric: TSidebarItem = {
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

  useEffect(() => {
    setIsOpen(!showTemporarySidebar);
  }, [showTemporarySidebar]);

  const items = useMemo(() => {
    if (!user) return [subjectsItem, logoutItem];

    if (user?.type_user_id === TypeUserEnum.STUDENT) {
      if (user?.monitor) {
        return [
          editProfileItem,
          subjectsItem,
          editMonitoringItem,
          schedulesItem,
          logoutItem,
        ];
      } else {
        return [editProfileItem, subjectsItem, schedulesItem, logoutItem];
      }
    }

    return [
      editProfileItem,
      subjectsItem,
      monitorRequestsItem,
      schedulesHistoric,
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
  };
};

export default useSidebar;
