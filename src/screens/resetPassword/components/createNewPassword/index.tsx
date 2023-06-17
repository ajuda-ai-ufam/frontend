import {
  FormHelperText,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Card,
  ContentContainer,
  TypographyContainer,
  ResetPasswordForm,
  PasswordTextField,
  SaveButton,
  TextFieldContainer,
} from './styles';
import {
  validatePassword,
  validateConfirmPassword,
} from '../../../../utils/validateFields';

import { VpnKeyOutlined } from '@mui/icons-material';
import { VpnKey } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { TResetPasswordToken } from '../../hooks/types';

type Props = {
  password: string;
  confirmPassword: string;
  passwordError: string;
  confirmPasswordError: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  decodedToken: TResetPasswordToken;
  handleShowConfirmPasswordClick(): void;
  handleShowPasswordClick(): void;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setPasswordError(error: string): void;
  setConfirmPasswordError(error: string): void;
  handleResetPassword(): void;
};

const CreateNewPassword = ({
  password,
  confirmPassword,
  passwordError,
  confirmPasswordError,
  showPassword,
  showConfirmPassword,
  decodedToken,
  handleShowConfirmPasswordClick,
  handleShowPasswordClick,
  handlePasswordChange,
  handleConfirmPasswordChange,
  setPasswordError,
  setConfirmPasswordError,
  handleResetPassword,
}: Props) => {
  const PasswordError = () => {
    if (!!passwordError) {
      return (
        <FormHelperText error sx={{ paddingLeft: '16px' }}>
          {passwordError}
        </FormHelperText>
      );
    }
    return <></>;
  };

  const ConfirmPasswordError = () => {
    if (!!confirmPasswordError) {
      return (
        <FormHelperText error sx={{ paddingLeft: '16px' }}>
          {confirmPasswordError}
        </FormHelperText>
      );
    }

    return <></>;
  };

  return (
    <Card>
      <ContentContainer>
        <TypographyContainer>
          <Typography variant="h4">Criação de nova senha</Typography>
          <Typography variant="body1">
            Digite abaixo sua nova senha para concluir seu processo de
            recuperação.
          </Typography>
        </TypographyContainer>
        <ResetPasswordForm onSubmit={handleResetPassword}>
          <TextFieldContainer>
            <PasswordTextField
              type={showPassword ? 'text' : 'password'}
              value={password}
              error={!!passwordError}
              name="password"
              placeholder="Nova senha"
              onChange={handlePasswordChange}
              onBlur={() =>
                setPasswordError(
                  validatePassword(decodedToken.userName, password)
                )
              }
              startAdornment={
                <InputAdornment position="start">
                  {!password ? <VpnKeyOutlined /> : <VpnKey />}
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPasswordClick} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <PasswordError />
          </TextFieldContainer>
          <TextFieldContainer>
            <PasswordTextField
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              error={!!confirmPasswordError}
              name="confirmPassword"
              placeholder="Confirmar senha"
              onChange={handleConfirmPasswordChange}
              onBlur={() => {
                setConfirmPasswordError(
                  validateConfirmPassword(password, confirmPassword)
                );
              }}
              startAdornment={
                <InputAdornment position="start">
                  {!confirmPassword ? <VpnKeyOutlined /> : <VpnKey />}
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowConfirmPasswordClick}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <ConfirmPasswordError />
          </TextFieldContainer>
          <SaveButton
            disabled={
              !!validateConfirmPassword(password, confirmPassword) ||
              !!validatePassword(decodedToken.userName, password)
            }
            type="submit"
          >
            Salvar senha
          </SaveButton>
        </ResetPasswordForm>
      </ContentContainer>
    </Card>
  );
};

export default CreateNewPassword;
