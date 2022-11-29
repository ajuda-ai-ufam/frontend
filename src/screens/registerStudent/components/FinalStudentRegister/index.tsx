import { FormHelperText } from '@mui/material';
import {
  validateContactEmail,
  validateLinkedin,
  validateWhatsapp,
} from '../../../../utils/validateFields';
import { TFinalStudentRegisterHook } from '../../hooks/types';
import {
  ContainerContinue,
  LeftButton,
  RightButton,
  StyledForm,
  StyledFormBox,
  StyledFormTextField,
  TypographyTextRegister,
} from '../../styles';
const FinalStudentRegister = ({
  contactEmail,
  contactEmailError,
  handleBackClick,
  handleContactEmailChange,
  handleFinalClick,
  handleLinkedinChange,
  handleWhatsappChange,
  linkedin,
  linkedinError,
  whatsapp,
  whatsappError,
  setContactEmailError,
  setLinkedinError,
  setWhatsappError,
}: TFinalStudentRegisterHook) => {
  const ContactEmailError = () => {
    if (!!contactEmailError)
      return <FormHelperText error>{contactEmailError}</FormHelperText>;

    return <></>;
  };

  const LinkedinError = () => {
    if (!!linkedinError)
      return <FormHelperText error>{linkedinError}</FormHelperText>;

    return <></>;
  };

  const WhatsappError = () => {
    if (!!whatsappError)
      return <FormHelperText error>{whatsappError}</FormHelperText>;

    return <></>;
  };

  return (
    <>
      <TypographyTextRegister variant="h4">
        Cadastro de Aluno
      </TypographyTextRegister>
      <TypographyTextRegister sx={{ mt: '12px' }} variant="body1">
        Por fim, deixe seu contato. Isso irá ajudar os outros usuários a
        encontrar você com mais facilidade.
      </TypographyTextRegister>
      <StyledForm onSubmit={handleFinalClick}>
        <StyledFormBox sx={{ mt: '32px' }}>
          <StyledFormTextField
            value={contactEmail}
            error={!!contactEmailError}
            onBlur={() =>
              setContactEmailError(validateContactEmail(contactEmail))
            }
            id="contactEmail"
            name="contactEmail"
            onChange={handleContactEmailChange}
            placeholder="E-mail de contato"
          />
          <ContactEmailError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            value={linkedin}
            error={!!linkedinError}
            onBlur={() => setLinkedinError(validateLinkedin(linkedin))}
            id="linkedin"
            name="linkedin"
            onChange={handleLinkedinChange}
            placeholder="Linkedin"
          />
          <LinkedinError />
        </StyledFormBox>
        <StyledFormBox>
          <StyledFormTextField
            value={whatsapp}
            error={!!whatsappError}
            onBlur={() => setWhatsappError(validateWhatsapp(whatsapp))}
            id="whatsapp"
            name="whatsapp"
            onChange={handleWhatsappChange}
            placeholder="Whatsapp"
          />
          <WhatsappError />
        </StyledFormBox>
        <ContainerContinue>
          <LeftButton variant="text" onClick={handleBackClick}>
            Voltar
          </LeftButton>
          <RightButton type="submit">Finalizar</RightButton>
        </ContainerContinue>
      </StyledForm>
    </>
  );
};

export default FinalStudentRegister;
