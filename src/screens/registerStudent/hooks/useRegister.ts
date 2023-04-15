import { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCourseRequest from '../../../service/requests/useCourseRequest';
import useStudentRegisterRequest from '../../../service/requests/useStudentRegisterRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { SCREENS } from '../../../utils/screens';
import {
  validateConfirmPassword,
  validateContactEmail,
  validateCourse,
  validateEmail,
  validateEnrollment,
  validateLinkedin,
  validateName,
  validatePassword,
  validateWhatsapp,
} from '../../../utils/validateFields';

const useRegister = () => {
  const navigate = useNavigate();

  const { showErrorSnackBar } = useSnackBar();

  const { coursesFetch, data: courses } = useCourseRequest();

  const { isLoading, isSuccess, registerStudent, error } =
    useStudentRegisterRequest();

  const [step, setStep] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const [course, setCourse] = useState('Selecione um curso*');
  const [courseError, setCourseError] = useState('');
  const [name, setName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactEmailError, setContactEmailError] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [linkedinError, setLinkedinError] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappError, setWhatsappError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState('');
  const [enrollmentError, setEnrollmentError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleContinueClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setNameError('');
    setConfirmPasswordError('');
    setPasswordError('');
    setEmailError('');

    const currentErrorName = validateName(name);
    if (currentErrorName) {
      setNameError(currentErrorName);
    }

    const currentErrorEmail = validateEmail(email);
    if (currentErrorEmail) {
      setEmailError(currentErrorEmail);
    }

    const currentErrorPassword = validatePassword(name, password);
    if (currentErrorPassword) {
      setPasswordError(currentErrorPassword);
    }

    const currentErrorConfirmPassword = validateConfirmPassword(
      password,
      confirmPassword
    );
    if (currentErrorConfirmPassword) {
      setConfirmPasswordError(currentErrorConfirmPassword);
    }

    if (
      !currentErrorName &&
      !currentErrorEmail &&
      !currentErrorPassword &&
      !currentErrorConfirmPassword
    ) {
      handleStepChange(1);
    }
  };

  const handleStepChange = (increment: number) => {
    setStep((previousStep) => previousStep + increment);
  };

  const handleBackClick = () => {
    handleStepChange(-1);
  };

  const handleSecondContinueClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setEnrollmentError('');
    setCourseError('');

    const currentErrorEnrollment = validateEnrollment(enrollment);
    if (currentErrorEnrollment) {
      setEnrollmentError(currentErrorEnrollment);
    }

    const currentErrorCourse = validateCourse(courseId);
    if (currentErrorCourse) {
      setCourseError(currentErrorCourse);
    }

    if (!currentErrorEnrollment && !currentErrorCourse) {
      handleStepChange(1);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleContactEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactEmail(e.target.value);
  };

  const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedin(e.target.value);
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(e.target.value);
  };

  const handleCourseChange = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as string;
    const code = value.split(' - ')[0];
    const id = courses.find((course) => course.code === code)?.id;

    setCourse(e.target.value as string);
    setCourseId(id ? id : 0);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleEnrollmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnrollment(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCancelRegisterClick = () => {
    navigate(SCREENS.LOGIN);
  };

  const handleFinalClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLinkedinError('');
    setContactEmailError('');
    setWhatsappError('');

    const currentErrorLinkedin = validateLinkedin(linkedin);
    if (currentErrorLinkedin) {
      setLinkedinError(currentErrorLinkedin);
    }

    const currentErrorContactEmail = validateContactEmail(contactEmail);
    if (currentErrorContactEmail) {
      setContactEmailError(currentErrorContactEmail);
    }

    const currentErrorWhatsapp = validateWhatsapp(whatsapp);
    if (currentErrorWhatsapp) {
      setWhatsappError(currentErrorWhatsapp);
    }

    if (
      !currentErrorLinkedin &&
      !currentErrorContactEmail &&
      !currentErrorWhatsapp
    ) {
      void registerStudent(
        email,
        name,
        password,
        confirmPassword,
        description,
        enrollment,
        courseId,
        contactEmail,
        whatsapp,
        linkedin
      );
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    void coursesFetch();
  }, []);

  useEffect(() => {
    if (error) {
      if (error === 'Matricula ja cadastrada!') {
        setEnrollmentError('Matrícula já cadastrada!');
        setStep(1);
        return;
      }

      if (error === 'Email já cadastrado.') {
        setEmailError('E-mail já cadastrado!');
        setStep(0);
        return;
      }

      setStep(0);
      showErrorSnackBar(
        `Erro desconhecido, atualize a página ou tente novamente mais tarde. Erro: ${
          error || ''
        }`
      );
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      navigate(SCREENS.CODE_VERIFICATION, { state: { email } });
    }
  }, [isSuccess]);

  return {
    name,
    email,
    password,
    confirmPassword,
    showConfirmPassword,
    showPassword,
    handleNameChange,
    handleConfirmPasswordChange,
    handleEmailChange,
    handlePasswordChange,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    handleMouseDownPassword,
    handleContinueClick,
    nameError,
    emailError,
    passwordError,
    confirmPasswordError,
    enrollment,
    handleEnrollmentChange,
    description,
    handleDescriptionChange,
    course,
    handleCourseChange,
    handleSecondContinueClick,
    enrollmentError,
    contactEmail,
    linkedin,
    whatsapp,
    handleContactEmailChange,
    handleLinkedinChange,
    handleWhatsappChange,
    step,
    handleStepChange,
    handleBackClick,
    courses,
    isLoading,
    courseId,
    handleFinalClick,
    handleCancelRegisterClick,
    courseError,
    error,
    setNameError,
    setEmailError,
    setPasswordError,
    setConfirmPasswordError,
    setEnrollmentError,
    setCourseError,
    contactEmailError,
    linkedinError,
    whatsappError,
    setContactEmailError,
    setLinkedinError,
    setWhatsappError,
  };
};

export default useRegister;
