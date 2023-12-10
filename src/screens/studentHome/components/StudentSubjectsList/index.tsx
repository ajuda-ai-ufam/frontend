import { CircularProgress, Pagination, Typography } from '@mui/material';
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
  PaginationContainer,
  ProgressContainer,
} from './styles';

type Props = {
  isLoading: boolean;
  page: number;
  totalPages: number;
  subjects?: TSubject[];
  monitorSubject?: TCompleteSubject;
  userTypeId?: number;
  handleChangePage(event: React.ChangeEvent<unknown>, page: number): void;
  handleSubjectClick(id: number): void;
  handleConfirmSchedule(subject: TSubject): void;
  handleManageMonitoringClick(): void;
  handleOpenEnrollModal(id: number): void;
};

const StudentSubjectsList = ({
  isLoading,
  page,
  totalPages,
  subjects,
  userTypeId,
  monitorSubject,
  handleChangePage,
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

  if (subjects.length === 0) {
    return (
      <Container>
        <FallbackContainer>
          <FallbackTypography>
            Ops... Parece que a disciplina que você procura não existe. Revise a
            grafia e tente novamente.
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
            <Typography variant="body1">
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
            <Typography variant="body1">Disciplinas matriculadas</Typography>
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

      <PaginationContainer>
        <Pagination
          page={page}
          onChange={handleChangePage}
          count={totalPages}
          color="primary"
        />
      </PaginationContainer>
    </Container>
  );
};

export default StudentSubjectsList;
