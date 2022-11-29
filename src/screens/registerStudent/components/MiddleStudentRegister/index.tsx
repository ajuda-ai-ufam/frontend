import { makeStyles } from '@material-ui/core';
import { FormHelperText, MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import {
  validateCourse,
  validateEnrollment,
} from '../../../../utils/validateFields';
import { TMiddleStudentRegisterHook } from '../../hooks/types';
import {
  ContainerContinue,
  LeftButton,
  RightButton,
  StyledForm,
  StyledFormBox,
  StyledFormTextField,
  TypographyTextRegister,
} from '../../styles';
import { SelectField } from './styles';

const MiddleStudentRegister = ({
  course,
  courseId,
  courseError,
  courses,
  description,
  enrollment,
  enrollmentError,
  handleBackClick,
  handleCourseChange,
  handleDescriptionChange,
  handleEnrollmentChange,
  handleSecondContinueClick,
  setCourseError,
  setEnrollmentError,
}: TMiddleStudentRegisterHook) => {
  interface Props {
    children?: ReactNode;
  }

  const usePlaceholderStyles = makeStyles(() => ({
    placeholder: {
      color: '#aaa',
    },
  }));

  const Placeholder = ({ children }: Props) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
  };

  const EnrollmentError = () => {
    if (!!enrollmentError)
      return <FormHelperText error>{enrollmentError}</FormHelperText>;

    return <></>;
  };

  const CourseError = () => {
    if (!!courseError)
      return <FormHelperText error>{courseError}</FormHelperText>;

    return <></>;
  };

  return (
    <>
      <TypographyTextRegister variant="h4">
        Cadastro de Aluno
      </TypographyTextRegister>
      <TypographyTextRegister sx={{ mt: '12px' }} variant="body1">
        Agora fale um pouco sobre você e nos informe seus dados acadêmicos.
      </TypographyTextRegister>
      <StyledForm>
        <StyledFormBox sx={{ mt: '32px' }}>
          <StyledFormTextField
            value={enrollment}
            error={!!enrollmentError}
            onBlur={() => setEnrollmentError(validateEnrollment(enrollment))}
            id="enrollment"
            name="enrollment"
            onChange={handleEnrollmentChange}
            placeholder="Matrícula*"
            inputProps={{ maxLength: 8 }}
          />
          <EnrollmentError />
        </StyledFormBox>
        <StyledFormBox>
          <SelectField
            value={course}
            error={!!courseError}
            onBlur={() => setCourseError(validateCourse(courseId))}
            native={false}
            displayEmpty={true}
            id="course"
            onChange={handleCourseChange}
            renderValue={
              course !== 'Selecione um curso'
                ? undefined
                : () => <Placeholder>Selecione um curso</Placeholder>
            }
          >
            <MenuItem value="Selecione um curso" disabled>
              Selecione um curso
            </MenuItem>
            {courses.map((course) => (
              <MenuItem
                key={course.id}
                value={course.code + ' - ' + course.name}
              >
                {course.code + ' - ' + course.name}
              </MenuItem>
            ))}
          </SelectField>
          <CourseError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            value={description}
            id="description"
            name="description"
            multiline
            rows={4}
            placeholder="Escreva sobre você"
            onChange={handleDescriptionChange}
          />
        </StyledFormBox>
        <ContainerContinue>
          <LeftButton variant="text" onClick={handleBackClick}>
            Voltar
          </LeftButton>
          <RightButton onClick={handleSecondContinueClick}>
            Continuar
          </RightButton>
        </ContainerContinue>
      </StyledForm>
    </>
  );
};

export default MiddleStudentRegister;
