import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { TypeMonitoringStatus } from '../../../../utils/constants';
import { ActionsButton } from './styles';
import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';
import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';

type Props = {
  request?: TMonitorRequest;
  status?: TypeMonitoringStatus;
  monitor: TSubjectMonitor;
  subject: string;
  handleOpenAcceptModal(monitor: TMonitorRequest): void;
  handleOpenDenyModal(monitor: TMonitorRequest): void;
  handleOpenRemoveMonitorModal(monitor: TSubjectMonitor): void;
  handleSeeHistoric(name: string, subject: string): void;
};

const ActionsButtons = ({
  request,
  handleOpenAcceptModal,
  handleOpenDenyModal,
  handleOpenRemoveMonitorModal,
  handleSeeHistoric,
  monitor,
  subject,
}: Props) => {
  if (monitor.status === TypeMonitoringStatus.PENDING) {
    if (!request) {
      return <></>;
    }
    return (
      <>
        <ActionsButton
          color="primary"
          startIcon={<CheckRoundedIcon />}
          onClick={() => handleOpenAcceptModal(request)}
        >
          Aceitar
        </ActionsButton>
        <ActionsButton
          color="error"
          startIcon={<CloseRoundedIcon />}
          onClick={() => handleOpenDenyModal(request)}
        >
          Recusar
        </ActionsButton>
      </>
    );
  }

  if (monitor.status === TypeMonitoringStatus.APPROVED) {
    return (
      <ActionsButton
        color="error"
        variant="outlined"
        startIcon={<DeleteOutlineOutlinedIcon />}
        onClick={() => handleOpenRemoveMonitorModal(monitor)}
      >
        Remover
      </ActionsButton>
    );
  }

  if (monitor.status === TypeMonitoringStatus.AVAILABLE) {
    return (
      <>
        <ActionsButton
          color="primary"
          variant="outlined"
          startIcon={<OpenInNewRoundedIcon />}
          onClick={() => handleSeeHistoric(monitor.name, subject)}
        >
          Ver histórico
        </ActionsButton>
        <ActionsButton
          color="error"
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={() => handleOpenRemoveMonitorModal(monitor)}
        >
          Remover
        </ActionsButton>
      </>
    );
  }

  return <></>;
};

export default ActionsButtons;
