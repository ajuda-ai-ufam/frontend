import { Typography } from '@mui/material';
import { MutableRefObject } from 'react';
import {
  SectionContainer,
  DescriptionTextField,
  InfoContainer,
  InfoLegendContainer,
  LegendTypography,
  StyledTextField,
  TextFieldContainer,
} from '../../styles';

type Props = {
  isStudent: boolean;
  nameRef: MutableRefObject<HTMLInputElement | undefined>;
  emailRef: MutableRefObject<HTMLInputElement | undefined>;
  passwordRef: MutableRefObject<HTMLInputElement | undefined>;
  enrollmentRef: MutableRefObject<HTMLInputElement | undefined>;
  courseRef: MutableRefObject<HTMLInputElement | undefined>;
  descriptionRef: MutableRefObject<HTMLInputElement | undefined>;
};

const AccountSection = ({
  isStudent,
  nameRef,
  emailRef,
  passwordRef,
  courseRef,
  descriptionRef,
  enrollmentRef,
}: Props) => {
  return (
    <>
      <SectionContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">Nome</Typography>
            <LegendTypography>
              Este será o nome exibido no seu perfil.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <StyledTextField inputRef={nameRef} disabled />
          </TextFieldContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">E-mail</Typography>
            <LegendTypography>
              Seu endereço de e-mail utilizado para acessar o sistema.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <StyledTextField inputRef={emailRef} disabled />
          </TextFieldContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoLegendContainer>
            <Typography variant="subtitle1">Senha</Typography>
            <LegendTypography>
              Sua senha usada para acessar a plataforma.
            </LegendTypography>
          </InfoLegendContainer>
          <TextFieldContainer>
            <StyledTextField type="password" inputRef={passwordRef} disabled />
          </TextFieldContainer>
        </InfoContainer>
        {isStudent ? (
          <>
            <InfoContainer>
              <InfoLegendContainer>
                <Typography variant="subtitle1">Matrícula</Typography>
                <LegendTypography>
                  Seu número de matrícula na instituição.
                </LegendTypography>
              </InfoLegendContainer>
              <TextFieldContainer>
                <StyledTextField inputRef={enrollmentRef} disabled />
              </TextFieldContainer>
            </InfoContainer>
            <InfoContainer>
              <InfoLegendContainer>
                <Typography variant="subtitle1">Curso</Typography>
                <LegendTypography>
                  Selecione ao lado qual curso você está matriculado.
                </LegendTypography>
              </InfoLegendContainer>
              <TextFieldContainer>
                <StyledTextField inputRef={courseRef} disabled />
              </TextFieldContainer>
            </InfoContainer>
            <InfoContainer>
              <InfoLegendContainer>
                <Typography variant="subtitle1">Sobre você</Typography>
                <LegendTypography>
                  Uma breve descrição de suas habilidades, interesses e
                  objetivos de aprendizado.
                </LegendTypography>
              </InfoLegendContainer>
              <TextFieldContainer>
                <DescriptionTextField
                  minRows={4}
                  inputRef={descriptionRef}
                  disabled
                />
              </TextFieldContainer>
            </InfoContainer>
          </>
        ) : (
          <></>
        )}
      </SectionContainer>
    </>
  );
};

export default AccountSection;
