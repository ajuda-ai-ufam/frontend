import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Divider, Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';

import {
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

const EditProfile = () => {
  const {
    contactEmailRef,
    courseRef,
    descriptionRef,
    emailRef,
    enrollmentRef,
    linkedinRef,
    nameRef,
    passwordRef,
    whatsappRef,
    isStudent,
    isLoading,
    handleEditProfileClick,
  } = useEditProfile();

  const renderContent = () => {
    if (isLoading)
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
          courseRef={courseRef}
          descriptionRef={descriptionRef}
          emailRef={emailRef}
          enrollmentRef={enrollmentRef}
          passwordRef={passwordRef}
        />

        {isStudent ? (
          <>
            <Divider />
            <SectionTitleTypography>Dados de contato</SectionTitleTypography>
            <ContactSection
              contactEmailRef={contactEmailRef}
              linkedinRef={linkedinRef}
              whatsappRef={whatsappRef}
            />
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.EDIT_PROFILE}>
      <Container>
        <Card>
          <InfoContainer keepAsRow={true}>
            <Typography variant="h3">Meu Perfil</Typography>
            {isLoading ? (
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
