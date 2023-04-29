import { TSubjectMonitor } from '../../../service/requests/useGetSubject/types';
import {
  Card,
  TypographyTitle,
  TypographyData,
  TypographyDataMonitor,
  MonitorContainer,
  DataContainer,
  TypographyDataContainer,
  CloseButton,
  RemoveButton,
  ButtonContainer,
} from '../styles';

type Props = {
  selectedMonitorRemove?: TSubjectMonitor;
  handleClose(): void;
  handleRemoveMonitorClick(): void;
};

const DataMonitorModal = ({
  selectedMonitorRemove,
  handleClose,
  handleRemoveMonitorClick,
}: Props) => {
  return (
    <Card>
      <TypographyTitle>Dados do Monitor</TypographyTitle>
      <MonitorContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>Curso</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.course.name}
          </TypographyDataMonitor>
        </DataContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>Monitor (a)</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.name}
          </TypographyDataMonitor>
        </DataContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>Professor (a)</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.responsable.name}
          </TypographyDataMonitor>
        </DataContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>E-mail</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.email}
          </TypographyDataMonitor>
        </DataContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>Linkedin</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.linkedin}
          </TypographyDataMonitor>
        </DataContainer>
        <DataContainer>
          <TypographyDataContainer>
            <TypographyData>Whatsapp</TypographyData>
          </TypographyDataContainer>
          <TypographyDataMonitor>
            {selectedMonitorRemove?.whatsapp}
          </TypographyDataMonitor>
        </DataContainer>
      </MonitorContainer>
      <ButtonContainer>
        <RemoveButton onClick={handleRemoveMonitorClick}>
          Remover Monitor
        </RemoveButton>
        <CloseButton onClick={handleClose}>Fechar</CloseButton>
      </ButtonContainer>
    </Card>
  );
};

export default DataMonitorModal;
