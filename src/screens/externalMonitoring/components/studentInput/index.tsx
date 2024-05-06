import { Autocomplete, Box, TextField as TextFieldMUI } from '@mui/material';
import { StyledTextFieldContainer } from '../../styles';
import { TStudentInput } from '../../hooks/types';
import { SyntheticEvent } from 'react';

type props = {
  selectedStudent: TStudentInput | null;
  handleStudentValueChange(
    event: SyntheticEvent,
    newValue: TStudentInput | null
  ): void;
  listStudents: TStudentInput[] | undefined;
};

const StudentInput = ({
  handleStudentValueChange,
  listStudents,
  selectedStudent,
}: props) => {
  return (
    <StyledTextFieldContainer>
      <Autocomplete
        value={selectedStudent}
        onChange={handleStudentValueChange}
        options={listStudents ? listStudents : []}
        getOptionLabel={(option) => option.input}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextFieldMUI {...params} placeholder="Nome ou e-mail do aluno(a)" />
        )}
        noOptionsText="Aluno não encontrada"
      />
    </StyledTextFieldContainer>
  );
};

export default StudentInput;
