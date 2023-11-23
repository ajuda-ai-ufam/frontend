import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';
import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import MonitorListItem from '../monitorListItem';
import {
  Container,
  FallbackTypography,
  MonitorsListHeaderTypography,
} from './styles';

type Props = {
  monitors: TSubjectMonitor[];
  subject: string;
  handleOpenAcceptModal(monitor: TMonitorRequest): void;
  handleOpenDenyModal(monitor: TMonitorRequest): void;
  handleSearchMonitorRequest(
    subject_id: number,
    student_id?: number
  ): TMonitorRequest | undefined;
  handleOpenRemoveMonitorModal(monitor: TSubjectMonitor): void;
  handleSeeHistoric(name: string, subject: string): void;
};

const MonitorsList = ({
  monitors,
  handleOpenAcceptModal,
  handleOpenDenyModal,
  handleSearchMonitorRequest,
  handleOpenRemoveMonitorModal,
  handleSeeHistoric,
  subject,
}: Props) => {
  if (!monitors.length) {
    return (
      <Container>
        <FallbackTypography>
          Você ainda não possui monitores(as) nem solicitações de monitoria
          nesta disciplina.
        </FallbackTypography>
      </Container>
    );
  }

  return (
    <Container>
      <MonitorsListHeaderTypography variant="subtitle1">
        Seus monitores
      </MonitorsListHeaderTypography>
      {monitors.map((monitor) => (
        <MonitorListItem
          handleOpenAcceptModal={handleOpenAcceptModal}
          handleOpenDenyModal={handleOpenDenyModal}
          handleOpenRemoveMonitorModal={handleOpenRemoveMonitorModal}
          subject={subject}
          handleSeeHistoric={handleSeeHistoric}
          handleSearchMonitorRequest={handleSearchMonitorRequest}
          monitor={monitor}
        />
      ))}
    </Container>
  );
};

export default MonitorsList;
