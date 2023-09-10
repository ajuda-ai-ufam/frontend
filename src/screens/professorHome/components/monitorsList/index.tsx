import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import MonitorListItem from '../monitorListItem';
import {
  Container,
  FallbackTypography,
  MonitorsListHeaderTypography,
} from './styles';

type Props = {
  monitors: TSubjectMonitor[];
};

const MonitorsList = ({ monitors }: Props) => {
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
        <MonitorListItem monitor={monitor} />
      ))}
    </Container>
  );
};

export default MonitorsList;
