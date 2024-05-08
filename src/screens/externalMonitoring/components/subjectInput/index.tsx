import { Typography } from '@mui/material';
import {
  DisabledProfessorContainer,
  ProfessorContainer,
  StyledTextFieldContainer,
} from '../../styles';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
type props = {
  isStudentSelected: boolean;
  selectedSubject: TCompleteSubject | undefined;
};

const SubjectInput = ({ isStudentSelected, selectedSubject }: props) => {
  return (
    <StyledTextFieldContainer>
      {isStudentSelected ? (
        <>
          <ProfessorContainer>
            <Typography>{selectedSubject?.name}</Typography>
          </ProfessorContainer>
        </>
      ) : (
        <>
          <DisabledProfessorContainer>
            <Typography>Nome da disciplina</Typography>
          </DisabledProfessorContainer>
        </>
      )}
    </StyledTextFieldContainer>
  );
};

export default SubjectInput;
