import { Box, Typography } from '@mui/material';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import MonitorsList from '../monitorsList';
import {
  AccessSubject,
  Container,
  FallbackContainer,
  SubjectHeaderContainer,
} from './styles';
import LoadingAnimation from '../../../../components/loadingAnimation';

type Props = {
  isLoading: boolean;
  filteredSubjects: TCompleteSubject[];
};

const SubjectsList = ({ isLoading, filteredSubjects }: Props) => {
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
            <Typography variant="h6">
              {`${subject.code} - ${subject.name}`}
            </Typography>

            <AccessSubject>Acessar disciplina</AccessSubject>
          </SubjectHeaderContainer>

          <MonitorsList monitors={subject.monitors} />
        </Box>
      ))}
    </Container>
  );
};

export default SubjectsList;
