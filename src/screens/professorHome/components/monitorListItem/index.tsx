import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';
import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import { TypeMonitoringStatusTranslate } from '../../../../utils/constants';
import ActionsButtons from '../actionsButtons';
import StatusTooltip from '../statusTooltip';
import useStatusTooltip from '../statusTooltip/hooks/useStatusTooltip';
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

const MonitorListItem = ({
  monitor,
  handleOpenAcceptModal,
  handleOpenDenyModal,
  handleSearchMonitorRequest,
  handleOpenRemoveMonitorModal,
  handleSeeHistoric,
  subject,
}: Props) => {
  const subject_id = parseInt(subject.split(',')[0]);

  const { isOpen, handleTooltipClose, handleTooltipOpen } = useStatusTooltip();

  return (
    <Container>
      <DataContainer>
        <DataField>
          <Label>{monitor.course.name}</Label>
          <Value>{`${monitor.enrollment} - ${monitor.name}`}</Value>
        </DataField>
        <DataField>
          <StatusLabelContainer onClick={handleTooltipOpen}>
            <Label>Status</Label>
            <StyledInfoIcon />
          </StatusLabelContainer>

          {monitor.status ? (
            <StatusValueContainer>
              <StatusTooltip
                isOpen={isOpen}
                handleTooltipClose={handleTooltipClose}
                status={monitor.status}
              />
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
            <ActionsButtons
              handleOpenAcceptModal={handleOpenAcceptModal}
              handleOpenDenyModal={handleOpenDenyModal}
              handleOpenRemoveMonitorModal={handleOpenRemoveMonitorModal}
              request={handleSearchMonitorRequest(
                subject_id,
                monitor.studentId
              )}
              monitor={monitor}
              handleSeeHistoric={handleSeeHistoric}
              subject={subject}
            />
          </ButtonsContainer>
        </DataField>
      </DataContainer>
    </Container>
  );
};

export default MonitorListItem;
