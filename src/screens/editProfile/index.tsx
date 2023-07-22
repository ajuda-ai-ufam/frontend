import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Divider, Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';

import {
  ButtonsContainer,
  Card,
  Container,
  EditButton,
  FallbackContainer,
  InfoContainer,
  SectionTitleTypography,
} from './styles';
import useEditProfile from './hooks/useEditProfile';
import AccountSection from './components/accountSection';
import ContactSection from './components/contactSection';
import LoadingAnimation from '../../components/loadingAnimation';
import { Button } from '../../components/button';

const EditProfile = () => {
  const {
    contactEmailRef,
    course,
    descriptionRef,
    emailRef,
    enrollmentRef,
    linkedinRef,
    nameRef,
    passwordRef,
    newPasswordRef,
    confirmNewPasswordRef,
    whatsappRef,
    isStudent,
    isLoading,
    isLoadingCourses,
    isLoadingUpdateUser,
    isEditModeDisabled,
    editProfileTitle,
    showPassword,
    showNewPassword,
    showConfirmNewPassword,
    courses,
    contactEmailError,
    enrollmentError,
    nameError,
    passwordError,
    handleSaveClick,
    handleClickShowPassword,
    handleClickShowNewPassword,
    handleClickShowConfirmNewPassword,
    handleMouseDownPassword,
    handleEditProfileClick,
    handleCancelClick,
    handleCourseChange,
  } = useEditProfile();

  const renderContent = () => {
    if (isLoading || isLoadingCourses)
      return (
        <FallbackContainer>
          <LoadingAnimation />
        </FallbackContainer>
      );

    return (
      <>
        <SectionTitleTypography>Dados da conta</SectionTitleTypography>
        <AccountSection
          isStudent={isStudent}
          nameRef={nameRef}
          course={course}
          courses={courses}
          descriptionRef={descriptionRef}
          emailRef={emailRef}
          enrollmentRef={enrollmentRef}
          passwordRef={passwordRef}
          newPasswordRef={newPasswordRef}
          confirmNewPasswordRef={confirmNewPasswordRef}
          isEditModeDisabled={isEditModeDisabled}
          showPassword={showPassword}
          showNewPassword={showNewPassword}
          showConfirmNewPassword={showConfirmNewPassword}
          enrollmentError={enrollmentError}
          nameError={nameError}
          passwordError={passwordError}
          handleCourseChange={handleCourseChange}
          handleClickShowPassword={handleClickShowPassword}
          handleClickShowNewPassword={handleClickShowNewPassword}
          handleClickShowConfirmNewPassword={handleClickShowConfirmNewPassword}
          handleMouseDownPassword={handleMouseDownPassword}
        />

        {isStudent ? (
          <>
            <Divider />
            <SectionTitleTypography>Dados de contato</SectionTitleTypography>
            <ContactSection
              contactEmailError={contactEmailError}
              contactEmailRef={contactEmailRef}
              linkedinRef={linkedinRef}
              whatsappRef={whatsappRef}
              isEditModeDisabled={isEditModeDisabled}
            />
          </>
        ) : (
          <></>
        )}

        {isEditModeDisabled ? (
          <></>
        ) : (
          <ButtonsContainer>
            <Button
              variant="text"
              color="primary"
              onClick={handleCancelClick}
              disabled={isLoadingUpdateUser}
            >
              Cancelar
            </Button>
            <Button
              color="primary"
              onClick={handleSaveClick}
              loading={isLoadingUpdateUser}
            >
              Salvar
            </Button>
          </ButtonsContainer>
        )}
      </>
    );
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.EDIT_PROFILE}>
      <Container>
        <Card>
          <InfoContainer keepAsRow={true}>
            <Typography variant="h3">{editProfileTitle}</Typography>
            {isLoading || isLoadingCourses || !isEditModeDisabled ? (
              <></>
            ) : (
              <EditButton
                color="primary"
                startIcon={<EditRoundedIcon />}
                onClick={handleEditProfileClick}
              >
                Editar
              </EditButton>
            )}
          </InfoContainer>
          {renderContent()}
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default EditProfile;
