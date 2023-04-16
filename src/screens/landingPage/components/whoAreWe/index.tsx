import {
  InfoTypography,
  SectionContainer,
  TitleTypography,
} from '../../styles';
import CollaboratorsList from './components/collaboratorsList';
import { InnerContainer } from './styles';

const WhoAreWe = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleTypography>Quem somos</TitleTypography>
        <InfoTypography sx={{ margin: '24px 16px 48px 16px' }}>
          A SuperMonitoria é uma plataforma online de monitoria escolar, criada
          por estudantes para estudantes. Nós entendemos os desafios enfrentados
          pelos estudantes na busca por apoio acadêmico e desenvolvemos uma
          plataforma acessível, confiável e eficiente para ajudar você a
          alcançar seus objetivos. Conheça abaixo nossa super equipe:
        </InfoTypography>
        <CollaboratorsList />
      </InnerContainer>
    </SectionContainer>
  );
};

export default WhoAreWe;
