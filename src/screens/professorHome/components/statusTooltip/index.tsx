import { TypeMonitoringStatus } from '../../../../utils/constants';
import { Tooltip } from '@mui/material';
import { StatusIcon } from './styles';

type Props = {
  status: TypeMonitoringStatus;
  isOpen: boolean;
  handleTooltipClose(): void;
};

const StatusTooltip = ({ status, isOpen, handleTooltipClose }: Props) => {
  let tooltipMessage = '';

  if (status) {
    if (status === TypeMonitoringStatus.PENDING) {
      tooltipMessage = 'Essa pessoa ainda não foi aceita por você.';
    } else if (status === TypeMonitoringStatus.APPROVED) {
      tooltipMessage =
        'Essa pessoa já foi aceita por você na monitoria mas ainda não configurou suas datas de disponibilidade.';
    } else if (status === TypeMonitoringStatus.AVAILABLE) {
      tooltipMessage =
        'Essa pessoa já foi aceita por você na monitoria e tem suas datas de disponibilidade configurada.';
    }

    return (
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={isOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={tooltipMessage}
      >
        <StatusIcon status={status}></StatusIcon>
      </Tooltip>
    );
  }

  return <></>;
};

export default StatusTooltip;
