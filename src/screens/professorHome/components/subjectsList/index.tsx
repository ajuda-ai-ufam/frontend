import { Box, Typography } from '@mui/material';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../../service/requests/useGetSubject/types';
import MonitorsList from '../monitorsList';
import {
  AccessSubject,
  Container,
  FallbackContainer,
  SubjectHeaderContainer,
} from './styles';
import LoadingAnimation from '../../../../components/loadingAnimation';
import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';

type Props = {
  isLoading: boolean;
  filteredSubjects: TCompleteSubject[];
  handleOpenAcceptModal(monitor: TMonitorRequest): void;
  handleOpenDenyModal(monitor: TMonitorRequest): void;
  handleSearchMonitorRequest(
    subject_id: number,
    student_id?: number
  ): TMonitorRequest | undefined;
  handleOpenRemoveMonitorModal(monitor: TSubjectMonitor): void;
  handleAccessSubject(subject_id: number, isHeader?: boolean): void;
  handleSeeHistoric(name: string, subject: string): void;
};

const SubjectsList = ({
  isLoading,
  filteredSubjects,
  handleOpenAcceptModal,
  handleOpenDenyModal,
  handleSearchMonitorRequest,
  handleOpenRemoveMonitorModal,
  handleAccessSubject,
  handleSeeHistoric,
}: Props) => {
  if (isLoading) {
    return (
      <FallbackContainer>
        <LoadingAnimation />
      </FallbackContainer>
    );
  }

  return (
    <Container>
      {filteredSubjects.map((subject) => (
        <Box>
          <SubjectHeaderContainer>
            <Typography
              variant="h6"
              onClick={() => handleAccessSubject(subject.id, true)}
            >
              {`${subject.code} - ${subject.name}`}
            </Typography>

            <AccessSubject onClick={() => handleAccessSubject(subject.id)}>
              Acessar disciplina
            </AccessSubject>
          </SubjectHeaderContainer>

          <MonitorsList
            handleOpenAcceptModal={handleOpenAcceptModal}
            handleOpenDenyModal={handleOpenDenyModal}
            handleSearchMonitorRequest={handleSearchMonitorRequest}
            handleOpenRemoveMonitorModal={handleOpenRemoveMonitorModal}
            handleSeeHistoric={handleSeeHistoric}
            subject={`${subject.id},${subject.name}`}
            monitors={subject.monitors}
          />
        </Box>
      ))}
    </Container>
  );
};

export default SubjectsList;
