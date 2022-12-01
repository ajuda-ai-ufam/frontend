import { Box } from '@mui/material';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../../service/requests/useGetSubject/types';
import { FallbackTypography } from '../../styles';
import MonitorCard from '../monitorCard';
import {
  FallbackContainer,
  FiltersContainer,
  MonitorsContainer,
  StyledChip,
} from './styles';

type Props = {
  subject: TCompleteSubject;
  selectedProfessorId: number;
  monitors: TSubjectMonitor[];
  handleMonitorClick(monitor: TSubjectMonitor): void;
  handleProfessorFilterClick(id?: number): void;
};

const MonitorsList = ({
  subject,
  selectedProfessorId,
  monitors,
  handleMonitorClick,
  handleProfessorFilterClick,
}: Props) => {
  const renderProfessorsChips = () => {
    if (!subject?.responsables.length) return [];

    return [
      <StyledChip
        key={0}
        isSelected={selectedProfessorId === -1}
        label="Ver todos"
        onClick={() => handleProfessorFilterClick()}
      />,
      ...subject.responsables.map((prof) => (
        <StyledChip
          key={prof.id}
          isSelected={selectedProfessorId === prof.id}
          label={`Prof. ${prof.name}`}
          onClick={() => handleProfessorFilterClick(prof.id)}
        />
      )),
    ];
  };

  const renderMonitorsCards = () => {
    if (!monitors?.length) {
      return (
        <FallbackContainer>
          <FallbackTypography>
            Ops... Parece que nenhum monitor foi encontrado.
          </FallbackTypography>
        </FallbackContainer>
      );
    }

    return (
      <MonitorsContainer>
        {monitors.map((monitor) => (
          <MonitorCard
            key={monitor.id}
            handleMonitorClick={handleMonitorClick}
            monitor={monitor}
          />
        ))}
      </MonitorsContainer>
    );
  };

  return (
    <Box>
      <FiltersContainer>{renderProfessorsChips()}</FiltersContainer>
      {renderMonitorsCards()}
    </Box>
  );
};

export default MonitorsList;
