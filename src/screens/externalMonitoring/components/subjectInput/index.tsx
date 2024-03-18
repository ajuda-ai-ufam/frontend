import { Autocomplete, Box, TextField as TextFieldMUI } from '@mui/material';
import { StyledTextFieldContainer } from '../../styles';
import { TSubjectInput } from '../../hooks/types';

type props = {
  isCourseSelected: boolean;
  selectedSubject: TSubjectInput | null;
  handleSubjectValueChange(event: any, newValue: TSubjectInput | null): void;
  listSubject: TSubjectInput[] | null;
};

const SubjectInput = ({
  handleSubjectValueChange,
  isCourseSelected,
  listSubject,
  selectedSubject,
}: props) => {
  return (
    <StyledTextFieldContainer>
      <Autocomplete
        value={selectedSubject}
        onChange={handleSubjectValueChange}
        options={listSubject ? listSubject : []}
        getOptionLabel={(option) => option.input}
        disabled={isCourseSelected}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.input}
          </Box>
        )}
        renderInput={(params) => (
          <TextFieldMUI {...params} placeholder="Selecione uma disciplina" />
        )}
        noOptionsText="Disciplina não encontrada"
      />
    </StyledTextFieldContainer>
  );
};

export default SubjectInput;
