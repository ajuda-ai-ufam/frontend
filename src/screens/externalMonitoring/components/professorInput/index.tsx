import {
  Autocomplete,
  Box,
  SelectChangeEvent,
  TextField as TextFieldMUI,
} from '@mui/material';
import { StyledTextFieldContainer } from '../../styles';
import { TProfessorInput } from '../../hooks/types';

type Props = {
  isSubjectSelected: boolean;
  professors: TProfessorInput[] | null;
  selectedProfessor: TProfessorInput | null;
  handleProfessorValueChange(
    event: any,
    newValue: TProfessorInput | null
  ): void;
};

const ProfessorInput = ({
  isSubjectSelected,
  professors,
  selectedProfessor,
  handleProfessorValueChange,
}: Props) => {
  return (
    <>
      <StyledTextFieldContainer>
        <Autocomplete
          value={selectedProfessor}
          disabled={isSubjectSelected}
          onChange={handleProfessorValueChange}
          options={professors ? professors : []}
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextFieldMUI
              {...params}
              placeholder="Selecione um(a) professor(a)"
            />
          )}
          noOptionsText="Professor(a) não encontrado(a)"
        />
      </StyledTextFieldContainer>
    </>
  );
};

export default ProfessorInput;
