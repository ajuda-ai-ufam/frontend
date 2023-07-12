import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { MouseEvent, MutableRefObject } from 'react';
import { TCourseData } from '../../../../service/requests/useCourseRequest/types';
import {
  DescriptionTextField,
  InfoContainer,
  InfoLegendContainer,
  LegendTypography,
  SectionContainer,
  SelectField,
  StyledTextField,
  TextFieldContainer,
} from '../../styles';

type Props = {
  isStudent: boolean;
  nameRef: MutableRefObject<HTMLInputElement | undefined>;
  emailRef: MutableRefObject<HTMLInputElement | undefined>;
  passwordRef: MutableRefObject<HTMLInputElement | undefined>;
  newPasswordRef: MutableRefObject<HTMLInputElement | undefined>;
  confirmNewPasswordRef: MutableRefObject<HTMLInputElement | undefined>;
  enrollmentRef: MutableRefObject<HTMLInputElement | undefined>;
  descriptionRef: MutableRefObject<HTMLInputElement | undefined>;
  course: string;
  isEditModeDisabled: boolean;
  showPassword: boolean;
  courses: TCourseData[];
  enrollmentError: string;
  nameError: string;
  passwordError: string;
  handleClickShowPassword(): void;
  handleMouseDownPassword(e: MouseEvent<HTMLButtonElement>): void;
  handleCourseChange(e: SelectChangeEvent<unknown>): void;
};

const AccountSection = ({
  isStudent,
  nameRef,
  emailRef,
  passwordRef,
  newPasswordRef,
  confirmNewPasswordRef,
  course,
  descriptionRef,
  enrollmentRef,
  isEditModeDisabled,
  showPassword,
  courses,
  nameError,
  enrollmentError,
  passwordError,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleCourseChange,
}: Props) => (
  <SectionContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">Nome</Typography>
        <LegendTypography>
          Este será o nome exibido no seu perfil.
        </LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <Box>
          <StyledTextField
            inputRef={nameRef}
            disabled={isEditModeDisabled}
            error={!!nameError}
          />
          {!!nameError && <FormHelperText error>{nameError}</FormHelperText>}
        </Box>
      </TextFieldContainer>
    </InfoContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">E-mail</Typography>
        <LegendTypography>
          Seu endereço de e-mail utilizado para acessar o sistema.
        </LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <StyledTextField inputRef={emailRef} disabled />
      </TextFieldContainer>
    </InfoContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">Senha</Typography>
        <LegendTypography>
          Sua senha usada para acessar a plataforma.
        </LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <StyledTextField
          type={showPassword ? 'text' : 'password'}
          inputRef={passwordRef}
          disabled={isEditModeDisabled}
          placeholder={isEditModeDisabled ? '' : 'Senha antiga'}
          endAdornment={
            isEditModeDisabled ? null : (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
        {isEditModeDisabled ? (
          ''
        ) : (
          <>
            <Box>
              <StyledTextField
                type={showPassword ? 'text' : 'password'}
                inputRef={newPasswordRef}
                error={!!passwordError}
                placeholder={'Nova senha'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {!!passwordError && (
                <FormHelperText error>{passwordError}</FormHelperText>
              )}
            </Box>
            <Box>
              <StyledTextField
                type={showPassword ? 'text' : 'password'}
                inputRef={confirmNewPasswordRef}
                error={!!passwordError}
                placeholder={'Confirmar senha'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {!!passwordError && (
                <FormHelperText error>{passwordError}</FormHelperText>
              )}
            </Box>
          </>
        )}
      </TextFieldContainer>
    </InfoContainer>
    {isStudent ? (
      <>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">Matrícula</Typography>
            <LegendTypography>
              Seu número de matrícula na instituição.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <Box>
              <StyledTextField
                inputRef={enrollmentRef}
                error={!!enrollmentError}
                disabled={isEditModeDisabled}
              />
              {!!enrollmentError && (
                <FormHelperText error>{enrollmentError}</FormHelperText>
              )}
            </Box>
          </TextFieldContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">Curso</Typography>
            <LegendTypography>
              Selecione ao lado qual curso você está matriculado.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <SelectField
              value={course}
              native={false}
              displayEmpty={true}
              disabled={isEditModeDisabled}
              onChange={handleCourseChange}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.name}
                </MenuItem>
              ))}
            </SelectField>
          </TextFieldContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">Sobre você</Typography>
            <LegendTypography>
              Uma breve descrição de suas habilidades, interesses e objetivos de
              aprendizado.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <DescriptionTextField
              minRows={4}
              inputRef={descriptionRef}
              disabled={isEditModeDisabled}
            />
          </TextFieldContainer>
        </InfoContainer>
      </>
    ) : (
      <></>
    )}
  </SectionContainer>
);

export default AccountSection;
