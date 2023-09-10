import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { TypeMonitoringStatus } from '../../../../utils/constants';
import { ActionsButton } from './styles';

type Props = {
  status?: TypeMonitoringStatus;
};

const ActionsButtons = ({ status }: Props) => {
  if (status === TypeMonitoringStatus.PENDING) {
    return (
      <>
        <ActionsButton color="primary" startIcon={<CheckRoundedIcon />}>
          Aceitar
        </ActionsButton>
        <ActionsButton color="error" startIcon={<CloseRoundedIcon />}>
          Recusar
        </ActionsButton>
      </>
    );
  }

  if (status === TypeMonitoringStatus.APPROVED) {
    return (
      <ActionsButton
        color="error"
        variant="outlined"
        startIcon={<DeleteOutlineOutlinedIcon />}
      >
        Remover
      </ActionsButton>
    );
  }

  if (status === TypeMonitoringStatus.AVAILABLE) {
    return (
      <>
        <ActionsButton
          color="primary"
          variant="outlined"
          startIcon={<OpenInNewRoundedIcon />}
        >
          Ver histórico
        </ActionsButton>
        <ActionsButton
          color="error"
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
        >
          Remover
        </ActionsButton>
      </>
    );
  }

  return <></>;
};

export default ActionsButtons;
