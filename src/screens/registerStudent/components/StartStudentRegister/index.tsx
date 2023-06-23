import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, IconButton, InputAdornment } from '@mui/material';
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../../../utils/validateFields';
import { TStartStudentRegisterHook } from '../../hooks/types';
import {
  ContainerContinue,
  LeftButton,
  RightButton,
  StyledForm,
  StyledFormBox,
  StyledFormTextField,
  TypographyTextRegister,
} from '../../styles';

const StartStudentRegister = ({
  confirmPassword,
  confirmPasswordError,
  showConfirmPassword,
  email,
  emailError,
  handleCancelRegisterClick,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
  handleConfirmPasswordChange,
  handleContinueClick,
  handleEmailChange,
  handleMouseDownPassword,
  handleNameChange,
  handlePasswordChange,
  name,
  nameError,
  password,
  passwordError,
  showPassword,
  setNameError,
  setConfirmPasswordError,
  setEmailError,
  setPasswordError,
}: TStartStudentRegisterHook) => {
  const NameError = () => {
    if (!!nameError) return <FormHelperText error>{nameError}</FormHelperText>;

    return <></>;
  };

  const EmailError = () => {
    if (!!emailError)
      return <FormHelperText error>{emailError}</FormHelperText>;

    return <></>;
  };

  const PasswordError = () => {
    if (!!passwordError)
      return <FormHelperText error>{passwordError}</FormHelperText>;

    return <></>;
  };

  const ConfirmPasswordError = () => {
    if (!!confirmPasswordError)
      return <FormHelperText error>{confirmPasswordError}</FormHelperText>;

    return <></>;
  };

  return (
    <>
      <TypographyTextRegister variant="h4">
        Cadastro de Aluno(a)
      </TypographyTextRegister>
      <TypographyTextRegister sx={{ mt: '12px' }} variant="body1">
        Preencha os campos abaixo para iniciar o seu cadastro.
      </TypographyTextRegister>
      <StyledForm onSubmit={handleContinueClick}>
        <StyledFormBox sx={{ mt: '32px' }}>
          <StyledFormTextField
            value={name}
            error={!!nameError}
            onBlur={() => setNameError(validateName(name))}
            id="name"
            name="name"
            onChange={handleNameChange}
            placeholder="Nome completo*"
          />
          <NameError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            value={email}
            error={!!emailError}
            onBlur={() => setEmailError(validateEmail(email))}
            id="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="E-mail*"
          />
          <EmailError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            type={showPassword ? 'text' : 'password'}
            onBlur={() => setPasswordError(validatePassword(name, password))}
            value={password}
            error={!!passwordError}
            id="password"
            name="password"
            placeholder="Crie sua senha*"
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <PasswordError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            type={showConfirmPassword ? 'text' : 'password'}
            onBlur={() =>
              setConfirmPasswordError(
                validateConfirmPassword(password, confirmPassword)
              )
            }
            value={confirmPassword}
            error={!!confirmPasswordError}
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleConfirmPasswordChange}
            placeholder="Confirme sua senha*"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <ConfirmPasswordError />
        </StyledFormBox>

        <ContainerContinue>
          <LeftButton variant="text" onClick={handleCancelRegisterClick}>
            Cancelar cadastro
          </LeftButton>
          <RightButton type="submit">Continuar</RightButton>
        </ContainerContinue>
      </StyledForm>
    </>
  );
};

export default StartStudentRegister;
