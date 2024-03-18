import { Autocomplete, Box, TextField as TextFieldMUI } from '@mui/material';
import { StyledTextFieldContainer } from '../../styles';
import { TCourseInput } from '../../hooks/types';

type props = {
  selectedCourse: TCourseInput | null;
  handleCourseValueChange(event: any, newValue: TCourseInput | null): void;
  allCourses: TCourseInput[];
};

const CourseInput = ({
  allCourses,
  handleCourseValueChange,
  selectedCourse,
}: props) => {
  return (
    <StyledTextFieldContainer>
      <Autocomplete
        value={selectedCourse}
        onChange={handleCourseValueChange}
        options={allCourses}
        getOptionLabel={(option) => option.input}
        renderOption={(props, option) => (
          <Box key={option.id} component="li" {...props}>
            {option.input}
          </Box>
        )}
        renderInput={(params) => (
          <TextFieldMUI {...params} placeholder="Selecione um curso" />
        )}
        noOptionsText="Curso não encontrado"
      />
    </StyledTextFieldContainer>
  );
};

export default CourseInput;
