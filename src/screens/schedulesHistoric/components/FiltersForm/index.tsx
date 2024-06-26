import { makeStyles } from '@material-ui/core';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Chip,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { Button } from '../../../../components/button';
import { DateTextField } from '../../../../components/ScheduleHelpModal/components/FormScheduleModalContent/styles';
import { TextField } from '../../../../components/textField';
import { TProfessor } from '../../../../service/requests/useGetAllProfessors/types';
import { TSubject } from '../../../../service/requests/useGetSchedulesHistoricRequest/types';
import useGetLoggedUser from '../../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../../utils/constants';
import theme from '../../../../utils/theme';
import { SelectField } from '../../../registerStudent/components/MiddleStudentRegister/styles';
import { TScheduleHistoricFilters } from '../../hooks/types';
import {
  DatePickersContainer,
  FilterButtonContainer,
  LastFormRowContainer,
  StyledForm,
  UntilContainer,
} from './styles';
import { GridView } from '@mui/icons-material';
import { ExternalMonitoringSubject } from '../../../../service/requests/useAllSubjectsRequest/types';

type Props = {
  typeMonitoring: string;
  responseGetProfessorSubjects?: TSubject[];
  responseGetAllProfessors?: TProfessor[];
  allSubjects?: ExternalMonitoringSubject;
  filters: TScheduleHistoricFilters;
  handleChangeNameOrEnrollFilter(e: React.ChangeEvent<HTMLInputElement>): void;
  handleChangeResponsiblesOrSubjectsFilter(e: SelectChangeEvent<unknown>): void;
  handleChangeBeginDateFilter(date: Dayjs | null): void;
  handleChangeEndDateFilter(date: Dayjs | null): void;
  handleFilterClick(e: React.SyntheticEvent<EventTarget>): void;
  handleTypeMonitoringChange(): void;
  handleChangeOnlySubjectsFilter(e: SelectChangeEvent<unknown>): void;
};

const FiltersForm = ({
  responseGetProfessorSubjects,
  responseGetAllProfessors,
  filters,
  typeMonitoring,
  handleChangeBeginDateFilter,
  handleChangeEndDateFilter,
  handleChangeResponsiblesOrSubjectsFilter,
  handleChangeNameOrEnrollFilter,
  handleFilterClick,
  handleTypeMonitoringChange,
  handleChangeOnlySubjectsFilter,
  allSubjects,
}: Props) => {
  const user = useGetLoggedUser();

  interface PropsPlaceholder {
    children?: ReactNode;
  }

  const usePlaceholderStyles = makeStyles(() => ({
    placeholder: {
      color: theme.palette.grey[500],
    },
  }));

  const Placeholder = ({ children }: PropsPlaceholder) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
  };

  const renderValues = (selected: string[]) => {
    if (!filters.responsiblesOrSubjectsFilter?.length) {
      if (user?.type_user_id === TypeUserEnum.PROFESSOR) {
        return <Placeholder>Selecionar disciplina</Placeholder>;
      }

      return <Placeholder>Selecionar professor(a)</Placeholder>;
    }

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value: string) => (
          <Chip key={value.split(',')[1]} label={value.split(',')[1]} />
        ))}
      </Box>
    );
  };

  const subjectFilterRenderValues = (selected: string[]) => {
    if (!filters.subjectsFilter?.length) {
      return <Placeholder>Selecionar disciplina</Placeholder>;
    }
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value: string) => (
          <Chip key={value.split(',')[1]} label={value.split(',')[1]} />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ mt: '24px' }}>
      <StyledForm>
        <TextField
          placeholder="Buscar aluno(a), monitor(a) ou matrícula"
          value={filters.nameOrEnrollFilter}
          onChange={handleChangeNameOrEnrollFilter}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <SelectField
          multiple
          value={filters.responsiblesOrSubjectsFilter}
          native={false}
          displayEmpty={true}
          onChange={handleChangeResponsiblesOrSubjectsFilter}
          startAdornment={
            <InputAdornment position="start">
              {user?.type_user_id === TypeUserEnum.PROFESSOR ? (
                <BookIcon />
              ) : (
                <PersonIcon />
              )}
            </InputAdornment>
          }
          renderValue={(selected) => renderValues(selected as string[])}
        >
          {user?.type_user_id === TypeUserEnum.PROFESSOR
            ? responseGetProfessorSubjects?.map((sub) => (
                <MenuItem key={sub.id} value={`${sub.id},${sub.name}`}>
                  {sub.name}
                </MenuItem>
              ))
            : responseGetAllProfessors?.map((prof) => (
                <MenuItem
                  key={prof.user.id}
                  value={`${prof.user.id},${prof.user.name}`}
                >
                  {prof.user.name}
                </MenuItem>
              ))}
        </SelectField>
        {user?.type_user_id === TypeUserEnum.COORDINATOR ? (
          <SelectField
            multiple
            value={filters.subjectsFilter}
            native={false}
            displayEmpty={true}
            onChange={handleChangeOnlySubjectsFilter}
            startAdornment={
              <InputAdornment position="start">
                <BookIcon />
              </InputAdornment>
            }
            renderValue={(selected) =>
              subjectFilterRenderValues(selected as string[])
            }
          >
            {allSubjects?.map((sub) => (
              <MenuItem key={sub.id} value={`${sub.id},${sub.name}`}>
                {`${sub.code} - ${sub.name}`}
              </MenuItem>
            ))}
          </SelectField>
        ) : (
          <></>
        )}

        <LastFormRowContainer>
          <DatePickersContainer>
            <SelectField
              value={typeMonitoring}
              onChange={handleTypeMonitoringChange}
              startAdornment={
                <InputAdornment position="start">
                  <GridView />
                </InputAdornment>
              }
              renderValue={(selected) => selected as string[]}
            >
              <MenuItem key={0} value={'Monitoria Interna'}>
                Monitoria Interna
              </MenuItem>
              <MenuItem key={1} value={'Monitoria Externa'}>
                Monitoria Externa
              </MenuItem>
            </SelectField>
            <DesktopDatePicker
              inputFormat="DD/MM/YYYY"
              value={filters.beginDateFilter}
              onChange={handleChangeBeginDateFilter}
              renderInput={(params) => (
                <DateTextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: 'Data Início',
                  }}
                />
              )}
            />
            <UntilContainer>
              <Typography variant="body1">até</Typography>
            </UntilContainer>
            <DesktopDatePicker
              inputFormat="DD/MM/YYYY"
              value={filters.endDateFilter}
              onChange={handleChangeEndDateFilter}
              renderInput={(params) => (
                <DateTextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: 'Data Final',
                  }}
                />
              )}
            />
          </DatePickersContainer>
          <FilterButtonContainer>
            <Button
              sx={{ width: '100%' }}
              color="primary"
              onClick={handleFilterClick}
              type="submit"
            >
              Filtrar
            </Button>
          </FilterButtonContainer>
        </LastFormRowContainer>
      </StyledForm>
    </Box>
  );
};

export default FiltersForm;
