import { CircularProgress, Typography } from '@mui/material';
import {
  TCompleteSubject,
  TCompleteSubject as TSubject,
} from '../../../../service/requests/useGetSubject/types';
import StudentSubjectsListItem from '../StudentSubjectsListItem';
import {
  Container,
  FallbackContainer,
  FallbackTypography,
  ListContainer,
  ProgressContainer,
} from './styles';

type Props = {
  isLoading: boolean;
  subjects?: TSubject[];
  monitorSubject?: TCompleteSubject;
  userTypeId?: number;
  handleSubjectClick(id: number): void;
  handleConfirmSchedule(subject: TSubject): void;
  handleManageMonitoringClick(): void;
  handleOpenEnrollModal(id: number): void;
};

const StudentSubjectsList = ({
  isLoading,
  subjects,
  userTypeId,
  monitorSubject,
  handleConfirmSchedule,
  handleSubjectClick,
  handleManageMonitoringClick,
  handleOpenEnrollModal,
}: Props) => {
  if (isLoading || subjects === undefined) {
    return (
      <Container>
        <ProgressContainer>
          <CircularProgress color="primary" />
        </ProgressContainer>
      </Container>
    );
  }

  if (subjects.length === 0 && monitorSubject) {
    return (
      <Container>
        <>
          <Typography variant="body1" color="secondary, light">
            Disciplina que você monitora
          </Typography>
          <StudentSubjectsListItem
            key={monitorSubject?.id}
            subject={monitorSubject}
            userTypeId={userTypeId}
            handleConfirmSchedule={handleConfirmSchedule}
            handleSubjectClick={handleSubjectClick}
            handleManageMonitoringClick={handleManageMonitoringClick}
            handleOpenEnrollModal={handleOpenEnrollModal}
          />
          <Typography variant="body1" color="secondary, light">
            Disciplinas matriculadas
          </Typography>
        </>
        <FallbackContainer>
          <FallbackTypography>
            Ops! Parece que você ainda não se matriculou em nenhuma disciplina.
            Acessar o menu “Todas as disciplinas” e matricule-se.
          </FallbackTypography>
        </FallbackContainer>
      </Container>
    );
  }

  if (subjects.length === 0) {
    return (
      <Container>
        <FallbackContainer>
          <FallbackTypography>
            Ops! Parece que você ainda não se matriculou em nenhuma disciplina.
            Acessar o menu “Todas as disciplinas” e matricule-se.
          </FallbackTypography>
        </FallbackContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ListContainer>
        {monitorSubject ? (
          <>
            <Typography variant="body1" color="secondary, light">
              Disciplina que você monitora
            </Typography>
            <StudentSubjectsListItem
              key={monitorSubject?.id}
              subject={monitorSubject}
              userTypeId={userTypeId}
              handleConfirmSchedule={handleConfirmSchedule}
              handleSubjectClick={handleSubjectClick}
              handleManageMonitoringClick={handleManageMonitoringClick}
              handleOpenEnrollModal={handleOpenEnrollModal}
            />
            <Typography variant="body1" color="secondary, light">
              Disciplinas matriculadas
            </Typography>
          </>
        ) : (
          <></>
        )}
        {}

        {subjects.map((subject) => (
          <StudentSubjectsListItem
            key={subject.id}
            subject={subject}
            userTypeId={userTypeId}
            handleConfirmSchedule={handleConfirmSchedule}
            handleSubjectClick={handleSubjectClick}
            handleManageMonitoringClick={handleManageMonitoringClick}
            handleOpenEnrollModal={handleOpenEnrollModal}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default StudentSubjectsList;
