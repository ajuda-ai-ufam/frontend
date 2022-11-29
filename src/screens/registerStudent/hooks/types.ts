import { SelectChangeEvent } from '@mui/material/Select';
import { TCourseData } from '../../../service/requests/useCourseRequest/types';

export type TStartStudentRegisterHook = {
  name: string;
  nameError: string;
  handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setNameError(name: string): void;

  email: string;
  emailError: string;
  handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setEmailError(email: string): void;

  password: string;
  passwordError: string;
  showPassword: boolean;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setPasswordError(password: string): void;

  confirmPassword: string;
  confirmPasswordError: string;
  handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setConfirmPasswordError(confirmPassword: string): void;

  handleClickShowPassword(): void;
  handleMouseDownPassword(e: React.MouseEvent<HTMLButtonElement>): void;
  handleContinueClick(e: React.SyntheticEvent<EventTarget>): void;
  handleCancelRegisterClick(): void;
};

export type TMiddleStudentRegisterHook = {
  courses: TCourseData[];

  enrollment: string;
  enrollmentError: string;
  handleEnrollmentChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setEnrollmentError(enrollment: string): void;

  course: string;
  courseId: number;
  courseError: string;
  handleCourseChange(e: SelectChangeEvent<unknown>): void;
  setCourseError(course: string): void;

  description: string;
  handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>): void;

  handleBackClick(): void;
  handleSecondContinueClick(e: React.SyntheticEvent<EventTarget>): void;
};

export type TFinalStudentRegisterHook = {
  contactEmail: string;
  contactEmailError: string;
  handleContactEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setContactEmailError(contactEmail: string): void;

  linkedin: string;
  linkedinError: string;
  handleLinkedinChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setLinkedinError(linkedin: string): void;

  whatsapp: string;
  whatsappError: string;
  setWhatsappError(whatsapp: string): void;
  handleWhatsappChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleBackClick(): void;

  handleFinalClick(e: React.SyntheticEvent<EventTarget>): void;
};

type TUncommomFields = {
  step: number;
  isLoading: boolean;
};

export type TStudentRegisterHook = TFinalStudentRegisterHook &
  TMiddleStudentRegisterHook &
  TStartStudentRegisterHook &
  TUncommomFields;
