import SuperMonitoria from '../../components/superMonitoria';
import LoadingAnimation from '../../components/loadingAnimation';
import ProgressBar from '../../components/progressBar';
import Header from '../../components/header';
import FinalStudentRegister from './components/FinalStudentRegister';
import MiddleStudentRegister from './components/MiddleStudentRegister';
import StartStudentRegister from './components/StartStudentRegister';
import { TStudentRegisterHook } from './hooks/types';
import useRegister from './hooks/useRegister';
import {
  Card,
  CardContainer,
  Container,
  ContainerProgressBar,
  CopyRigthContainer,
  OutsideContainer,
} from './styles';

const RegisterStudent = () => {
  const {
    confirmPassword,
    confirmPasswordError,
    showConfirmPassword,
    contactEmail,
    course,
    courseError,
    courses,
    description,
    email,
    emailError,
    enrollment,
    enrollmentError,
    handleBackClick,
    handleCancelRegisterClick,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    handleConfirmPasswordChange,
    handleContactEmailChange,
    handleContinueClick,
    handleCourseChange,
    handleDescriptionChange,
    handleEmailChange,
    handleEnrollmentChange,
    handleFinalClick,
    handleLinkedinChange,
    handleMouseDownPassword,
    handleNameChange,
    handlePasswordChange,
    handleSecondContinueClick,
    handleWhatsappChange,
    isLoading,
    linkedin,
    name,
    nameError,
    password,
    passwordError,
    showPassword,
    step,
    whatsapp,
    setNameError,
    setConfirmPasswordError,
    setEmailError,
    setPasswordError,
    setCourseError,
    setEnrollmentError,
    courseId,
    contactEmailError,
    linkedinError,
    whatsappError,
    setContactEmailError,
    setLinkedinError,
    setWhatsappError,
  }: TStudentRegisterHook = useRegister();

  const CardContent = () => {
    if (isLoading)
      return (
        <Card justifyContent={'center'}>
          <LoadingAnimation />
        </Card>
      );

    if (step == 0)
      return (
        <Card>
          <StartStudentRegister
            setNameError={setNameError}
            setConfirmPasswordError={setConfirmPasswordError}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
            name={name}
            nameError={nameError}
            handleNameChange={handleNameChange}
            email={email}
            emailError={emailError}
            handleEmailChange={handleEmailChange}
            password={password}
            passwordError={passwordError}
            showPassword={showPassword}
            handlePasswordChange={handlePasswordChange}
            confirmPassword={confirmPassword}
            confirmPasswordError={confirmPasswordError}
            showConfirmPassword={showConfirmPassword}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            handleClickShowPassword={handleClickShowPassword}
            handleClickShowConfirmPassword={handleClickShowConfirmPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            handleContinueClick={handleContinueClick}
            handleCancelRegisterClick={handleCancelRegisterClick}
          />
        </Card>
      );

    if (step == 1)
      return (
        <Card>
          <MiddleStudentRegister
            enrollment={enrollment}
            enrollmentError={enrollmentError}
            handleEnrollmentChange={handleEnrollmentChange}
            course={course}
            handleCourseChange={handleCourseChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            handleSecondContinueClick={handleSecondContinueClick}
            handleBackClick={handleBackClick}
            courses={courses}
            courseError={courseError}
            setCourseError={setCourseError}
            setEnrollmentError={setEnrollmentError}
            courseId={courseId}
          />
        </Card>
      );

    if (step == 2)
      return (
        <Card>
          <FinalStudentRegister
            contactEmail={contactEmail}
            handleContactEmailChange={handleContactEmailChange}
            linkedin={linkedin}
            handleLinkedinChange={handleLinkedinChange}
            whatsapp={whatsapp}
            handleWhatsappChange={handleWhatsappChange}
            handleBackClick={handleBackClick}
            handleFinalClick={handleFinalClick}
            contactEmailError={contactEmailError}
            whatsappError={whatsappError}
            linkedinError={linkedinError}
            setContactEmailError={setContactEmailError}
            setLinkedinError={setLinkedinError}
            setWhatsappError={setWhatsappError}
          />
        </Card>
      );
  };

  return (
    <OutsideContainer>
      <Container>
        <Header showLogin={true} />
        <CardContainer>
          {isLoading ? (
            <ContainerProgressBar sx={{ visibility: 'hidden' }}>
              <ProgressBar steps={3} currentStep={step} />
            </ContainerProgressBar>
          ) : (
            <ContainerProgressBar sx={{ visibility: 'visibly' }}>
              <ProgressBar steps={3} currentStep={step} />
            </ContainerProgressBar>
          )}
          {CardContent()}
        </CardContainer>
      </Container>
      <CopyRigthContainer>
        <SuperMonitoria />
      </CopyRigthContainer>
    </OutsideContainer>
  );
};

export default RegisterStudent;
