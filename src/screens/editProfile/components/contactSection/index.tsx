import { Typography } from '@mui/material';
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
};

const ContactSection = ({
  contactEmailRef,
  linkedinRef,
  whatsappRef,
}: Props) => {
  return (
    <>
      <SectionContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">E-mail de contato</Typography>
            <LegendTypography>
              Um endereço de e-mail alternativo para contato.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <StyledTextField inputRef={contactEmailRef} disabled />
          </TextFieldContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">LinkedIn</Typography>
            <LegendTypography>
              O link do seu perfil no LinkedIn.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <StyledTextField inputRef={linkedinRef} disabled />
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
            <StyledTextField inputRef={whatsappRef} disabled />
          </TextFieldContainer>
        </InfoContainer>
      </SectionContainer>
    </>
  );
};

export default ContactSection;
