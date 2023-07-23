import { CircularProgress, Pagination } from '@mui/material';
import { TCompleteSubject as TSubject } from '../../../../service/requests/useGetSubject/types';
import SubjectsListItem from '../SubjectsListItem';
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
  userTypeId?: number;
  handleAssignProfessors(subject: TSubject): void;
  handleChangePage(event: React.ChangeEvent<unknown>, page: number): void;
  handleSubjectClick(id: number): void;
  handleConfirmSchedule(subject: TSubject): void;
};

const SubjectsList = ({
  isLoading,
  page,
  totalPages,
  subjects,
  userTypeId,
  handleAssignProfessors,
  handleChangePage,
  handleConfirmSchedule,
  handleSubjectClick,
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
        {subjects.map((subject) => (
          <SubjectsListItem
            key={subject.id}
            subject={subject}
            userTypeId={userTypeId}
            handleAssignProfessors={handleAssignProfessors}
            handleConfirmSchedule={handleConfirmSchedule}
            handleSubjectClick={handleSubjectClick}
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

export default SubjectsList;
