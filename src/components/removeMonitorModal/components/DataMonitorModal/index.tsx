import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
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
} from '../../styles';

type Props = {
  selectedMonitorRemove?: TSubjectMonitor;
  handleClose(): void;
  handleRemoveMonitorClick(): void;
  isMyMonitor: boolean;
};

const dataMonitorList = (selectedMonitor: TSubjectMonitor) => {
  const dataList = {
    data: [
      { label: 'Curso', value: selectedMonitor.course.name },
      { label: 'Monitor(a)', value: selectedMonitor.name },
      { label: 'Professor(a)', value: selectedMonitor.responsable.name },
      { label: 'E-mail', value: selectedMonitor.email },
      { label: 'Linkedin', value: selectedMonitor.linkedin || '-' },
      { label: 'Whatsapp', value: selectedMonitor.whatsapp || '-' },
    ],
  };
  return dataList;
};

const DataMonitorModal = ({
  selectedMonitorRemove,
  handleClose,
  handleRemoveMonitorClick,
  isMyMonitor,
}: Props) => {
  let dataList;

  if (selectedMonitorRemove) {
    dataList = dataMonitorList(selectedMonitorRemove);
  }
  return (
    <Card>
      <TypographyTitle>Dados do(a) Monitor(a)</TypographyTitle>
      <MonitorContainer>
        {dataList?.data.map((data) => (
          <DataContainer>
            <TypographyDataContainer>
              <TypographyData>{data.label}</TypographyData>
            </TypographyDataContainer>
            <TypographyDataMonitor>{data.value}</TypographyDataMonitor>
          </DataContainer>
        ))}
      </MonitorContainer>
      <ButtonContainer>
        {isMyMonitor ? (
          <RemoveButton onClick={handleRemoveMonitorClick}>
            Remover Monitor
          </RemoveButton>
        ) : (
          <></>
        )}
        <CloseButton onClick={handleClose}>Fechar</CloseButton>
      </ButtonContainer>
    </Card>
  );
};

export default DataMonitorModal;
