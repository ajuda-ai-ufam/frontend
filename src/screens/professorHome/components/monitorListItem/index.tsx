import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import { TypeMonitoringStatusTranslate } from '../../../../utils/constants';
import ActionsButtons from '../actionsButtons';
import StatusTooltip from '../statusTooltip';
import {
  ButtonsContainer,
  Container,
  DataContainer,
  DataField,
  Label,
  StatusLabelContainer,
  StatusValueContainer,
  StyledInfoIcon,
  Value,
} from './styles';

type Props = {
  monitor: TSubjectMonitor;
};

const MonitorListItem = ({ monitor }: Props) => (
  <Container>
    <DataContainer>
      <DataField>
        <Label>{monitor.course.name}</Label>
        <Value>{`${monitor.enrollment} - ${monitor.name}`}</Value>
      </DataField>
      <DataField>
        <StatusLabelContainer>
          <Label>Status</Label>
          <StyledInfoIcon />
        </StatusLabelContainer>

        {monitor.status ? (
          <StatusValueContainer>
            <StatusTooltip status={monitor.status} />
            <Value variant="subtitle1">
              {`${TypeMonitoringStatusTranslate[monitor.status]}`}
            </Value>
          </StatusValueContainer>
        ) : (
          <></>
        )}
      </DataField>
      <DataField>
        <ButtonsContainer>
          <ActionsButtons status={monitor.status} />
        </ButtonsContainer>
      </DataField>
    </DataContainer>
  </Container>
);

export default MonitorListItem;
