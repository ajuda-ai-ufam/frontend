import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import { Typography } from '@mui/material';
import {
  Container,
  Card,
  ContentContainer,
  HeaderTypography,
  HeaderContainer,
  EditButton,
  LoadingContainer,
  SaveButtonContainer,
  CancelButton,
  SaveButton,
  StyledCircularProgress,
} from './styles';
import InfoIcon from '@mui/icons-material/Info';
import useEditMonitoring from './hooks/useEditMonitoring';
import PreferenceContent from './components/preferences/preferenceContent';
import Availability from './components/availability';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LoadingAnimation from '../../components/loadingAnimation';
import { Alert } from '@mui/material';
import CancelModal from './components/cancelModal';

const EditMonitoring = () => {
  const {
    weekDayAvailability,
    hasAvailability,
    monitor,
    preference,
    hasPreference,
    editMode,
    monitorAvailabilitySaved,
    isLoadingPatch,
    isOpenCancelModal,
    disableSaveButton,
    handleCancelClick,
    handleCancelConfirm,
    handleClose,
    handlePreferenceChange,
    handleEditButtonClick,
    handleSwitchChange,
    handleSelectStartChange,
    handleSelectEndChange,
    handleReplicate,
    handleSaveClick,
  } = useEditMonitoring();

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.EDIT_MONITORING}>
      <Container>
        <Card>
          <ContentContainer>
            <HeaderContainer>
              <HeaderTypography>Editar Monitoria</HeaderTypography>
              {!editMode && monitor ? (
                <EditButton
                  startIcon={<EditRoundedIcon />}
                  onClick={handleEditButtonClick}
                >
                  Editar
                </EditButton>
              ) : (
                <></>
              )}
            </HeaderContainer>
            {!monitor ? (
              <LoadingContainer>
                <LoadingAnimation />
              </LoadingContainer>
            ) : (
              <>
                <Alert
                  icon={<InfoIcon color="primary" />}
                  severity="success"
                  sx={{ borderRadius: '12px' }}
                >
                  <Typography variant="subtitle1">
                    Atualmente você é monitor na disciplina{' '}
                    <b>{monitor?.subject.name}</b>
                  </Typography>
                </Alert>
                <PreferenceContent
                  hasPreference={hasPreference}
                  preference={preference}
                  handlePreferenceChange={handlePreferenceChange}
                  editMode={editMode}
                  monitor={monitor}
                />
                <Availability
                  weekDayAvailability={weekDayAvailability}
                  hasAvailability={hasAvailability}
                  editMode={editMode}
                  monitorAvailabilitySaved={monitorAvailabilitySaved}
                  handleSwitchChange={handleSwitchChange}
                  handleSelectStartChange={handleSelectStartChange}
                  handleSelectEndChange={handleSelectEndChange}
                  handleReplicate={handleReplicate}
                  handleClose={handleClose}
                  isOpen={isOpenCancelModal}
                />
                <CancelModal
                  isOpen={isOpenCancelModal}
                  handleClose={handleClose}
                  handleCloseConfirm={handleCancelConfirm}
                />
              </>
            )}
            {editMode && monitor ? (
              <SaveButtonContainer>
                <CancelButton
                  disable={isLoadingPatch}
                  onClick={handleCancelClick}
                >
                  Cancelar alterações
                </CancelButton>
                <SaveButton
                  disabled={disableSaveButton || isLoadingPatch}
                  onClick={handleSaveClick}
                >
                  {isLoadingPatch ? (
                    <StyledCircularProgress />
                  ) : (
                    <>Salvar Alterações</>
                  )}
                </SaveButton>
              </SaveButtonContainer>
            ) : (
              <></>
            )}
          </ContentContainer>
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default EditMonitoring;
