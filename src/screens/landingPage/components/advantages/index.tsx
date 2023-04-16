import theme from '../../../../utils/theme';
import {
  InfoTypography,
  SectionContainer,
  TitleTypography,
} from '../../styles';
import {
  BookImage,
  BoxContainer,
  HandsImage,
  InfoBox,
  InfoBoxTypography,
  InnerContainer,
  NotificationImage,
} from './styles';

const Advantages = () => {
  return (
    <SectionContainer color={theme.palette.secondary.main}>
      <InnerContainer>
        <TitleTypography color={'white'}>Conheça as vantagens</TitleTypography>
        <InfoTypography sx={{ margin: '16px 0' }}>
          Veja abaixo como você pode se beneficiar da nossa plataforma.
        </InfoTypography>
        <BoxContainer>
          <InfoBox>
            <BookImage />
            <InfoBoxTypography variant="body1" color={'white'}>
              Melhore seu desempenho com nossa plataforma ao tirar dúvidas e
              receber feedback dos monitores.
            </InfoBoxTypography>
          </InfoBox>
          <InfoBox>
            <NotificationImage />
            <InfoBoxTypography variant="body1" color={'white'}>
              Receba notificações e lembretes para sessões de monitoria
              agendadas para que você nunca perca uma sessão.
            </InfoBoxTypography>
          </InfoBox>
          <InfoBox>
            <HandsImage />
            <InfoBoxTypography variant="body1" color={'white'}>
              Seja um monitor e ajude outros estudantes a alcançar seu potencial
              acadêmico.
            </InfoBoxTypography>
          </InfoBox>
        </BoxContainer>
      </InnerContainer>
    </SectionContainer>
  );
};

export default Advantages;
