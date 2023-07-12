import { Box, FormHelperText, Typography } from '@mui/material';
import {
  SectionContainer,
  InfoLegendContainer,
  LegendTypography,
  InfoContainer,
  StyledTextField,
  TextFieldContainer,
} from '../../styles';
import { MutableRefObject } from 'react';

type Props = {
  contactEmailRef: MutableRefObject<HTMLInputElement | undefined>;
  whatsappRef: MutableRefObject<HTMLInputElement | undefined>;
  linkedinRef: MutableRefObject<HTMLInputElement | undefined>;
  contactEmailError: string;
  isEditModeDisabled: boolean;
};

const ContactSection = ({
  contactEmailRef,
  linkedinRef,
  whatsappRef,
  contactEmailError,
  isEditModeDisabled,
}: Props) => (
  <SectionContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">E-mail de contato</Typography>
        <LegendTypography>
          Um endereço de e-mail alternativo para contato.
        </LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <Box>
          <StyledTextField
            inputRef={contactEmailRef}
            disabled={isEditModeDisabled}
            error={!!contactEmailError}
          />
          {!!contactEmailError && (
            <FormHelperText error>{contactEmailError}</FormHelperText>
          )}
        </Box>
      </TextFieldContainer>
    </InfoContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">LinkedIn</Typography>
        <LegendTypography>O link do seu perfil no LinkedIn.</LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <StyledTextField inputRef={linkedinRef} disabled={isEditModeDisabled} />
      </TextFieldContainer>
    </InfoContainer>
    <InfoContainer>
      <InfoLegendContainer>
        <Typography variant="subtitle1">Whatsapp</Typography>
        <LegendTypography>
          Seu número de telefone com DDD para contato via WhatsApp.
        </LegendTypography>
      </InfoLegendContainer>
      <TextFieldContainer>
        <StyledTextField inputRef={whatsappRef} disabled={isEditModeDisabled} />
      </TextFieldContainer>
    </InfoContainer>
  </SectionContainer>
);

export default ContactSection;
