import {
  Autocomplete,
  Box,
  TextField as TextFieldMUI,
  Typography,
  createFilterOptions,
} from '@mui/material';
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

const filter = createFilterOptions<TStudentInput>();

const StudentInput = ({
  handleStudentValueChange,
  listStudents,
  selectedStudent,
}: props) => {
  return (
    <StyledTextFieldContainer>
      <Autocomplete
        value={selectedStudent}
        includeInputInList={true}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.email && option.name
          );
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              name: inputValue,
              email: '',
              input: inputValue,
            });
          }

          return filtered;
        }}
        onChange={handleStudentValueChange}
        options={listStudents ? listStudents : []}
        getOptionLabel={(option) => option.input}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <Typography>{option.name}</Typography>
              <Typography>{option.email}</Typography>
            </Box>
          </Box>
        )}
        renderInput={(params) => (
          <TextFieldMUI {...params} placeholder="Nome ou e-mail do aluno(a)" />
        )}
        noOptionsText="Aluno não encontrado"
      />
    </StyledTextFieldContainer>
  );
};

export default StudentInput;
