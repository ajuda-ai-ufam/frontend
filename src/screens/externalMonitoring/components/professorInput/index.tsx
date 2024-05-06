import { Typography } from '@mui/material';
import {
  DisabledProfessorContainer,
  ProfessorContainer,
  StyledTextFieldContainer,
} from '../../styles';
import { TSubjectResponsible } from '../../../../service/requests/useGetSubject/types';

type props = {
  professorResponsible: TSubjectResponsible | undefined;
  isStudentSelected: boolean;
};

const ProfessorInput = ({ professorResponsible, isStudentSelected }: props) => {
  return (
    <>
      <StyledTextFieldContainer>
        {isStudentSelected ? (
          <>
            <ProfessorContainer>
              <Typography>
                {professorResponsible?.professor.user.name}
              </Typography>
            </ProfessorContainer>
          </>
        ) : (
          <>
            <DisabledProfessorContainer>
              <Typography>Nome do Professor</Typography>
            </DisabledProfessorContainer>
          </>
        )}
      </StyledTextFieldContainer>
    </>
  );
};
export default ProfessorInput;
