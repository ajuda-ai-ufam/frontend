import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../../utils/screens';
import theme from '../../../../utils/theme';
import {
  InfoTypography,
  SectionContainer,
  TitleTypography,
} from '../../styles';
import {
  ContentContainer,
  DoubtsTypography,
  FooterContainer,
  InnerContainer,
  LeftImage,
  MessageContainer,
  MonitorButton,
  RightImage,
} from './styles';

const TurnIntoMonitor = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer color={theme.palette.secondary.main}>
      <InnerContainer>
        <ContentContainer>
          <LeftImage />

          <MessageContainer>
            <TitleTypography color={'white'}>
              Seja monitor na nossa plataforma
            </TitleTypography>
            <InfoTypography sx={{ margin: '24px 0 48px 0' }}>
              Cadastre-se agora na SuperMonitoria e encontre monitores
              qualificados para suas disciplinas. Agende sessões de monitoria
              personalizadas e melhore seu desempenho acadêmico hoje mesmo.
            </InfoTypography>
            <MonitorButton
              color="primary"
              onClick={() => navigate(SCREENS.REGISTER)}
            >
              Quero ser monitor!
            </MonitorButton>
          </MessageContainer>

          <RightImage />
        </ContentContainer>

        <FooterContainer>
          <DoubtsTypography variant="body1" color={'white'}>
            Em caso de dúvidas, reclamações ou sugestões, entre em contato
            conosco através do e-mail: noreply-monitoria@icomp.ufam.edu.br
          </DoubtsTypography>
          <Typography variant="body1" color={'white'}>
            Super Monitoria, 2023
          </Typography>
        </FooterContainer>
      </InnerContainer>
    </SectionContainer>
  );
};

export default TurnIntoMonitor;
