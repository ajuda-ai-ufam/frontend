import theme from '../../../../utils/theme';
import {
  InfoTypography,
  SectionContainer,
  TitleTypography,
} from '../../styles';
import { InnerContainer, LogoImage } from './styles';

const AboutProject = () => {
  return (
    <SectionContainer color={theme.palette.background.default}>
      <InnerContainer>
        <TitleTypography>Sobre o projeto</TitleTypography>

        <InfoTypography>
          O presente trabalho é decorrente do projeto de Pesquisa e
          Desenvolvimento (P&D) 002/2022, firmado entre a Fundação da
          Universidade do Amazonas e FAEPI, que conta com financiamento da
          Samsung, usando recursos da Lei de Informática para a Amazônia
          Ocidental (Lei Federal nº 8.387/1991), estando sua divulgação de
          acordo com o previsto no artigo 39.º do Decreto nº 10.521/2020.
        </InfoTypography>

        <LogoImage />
      </InnerContainer>
    </SectionContainer>
  );
};

export default AboutProject;
