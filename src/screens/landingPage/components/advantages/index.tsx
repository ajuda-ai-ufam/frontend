import theme from '../../../../utils/theme';
import {
  InfoTypography,
  SectionContainer,
  TitleTypography,
} from '../../styles';
import {
  BookImage,
  BottomLeftImage,
  BottomRightImage,
  BoxContainer,
  HandsImage,
  InfoBox,
  InfoBoxTypography,
  InnerContainer,
  NotificationImage,
  OutsideContainer,
  TopLeftImage,
  TopRightImage,
} from './styles';

const Advantages = () => {
  return (
    <OutsideContainer>
      <TopLeftImage />
      <TopRightImage />
      <BottomLeftImage />
      <BottomRightImage />
      <SectionContainer color={theme.palette.secondary.main}>
        <InnerContainer>
          <TitleTypography sx={{ mt: '16px !important' }} color={'white'}>
            Conheça as vantagens
          </TitleTypography>
          <InfoTypography sx={{ margin: '16px 0' }}>
            Veja abaixo como você pode se beneficiar da nossa plataforma.
          </InfoTypography>
          <BoxContainer>
            <InfoBox>
              <BookImage />
              <InfoBoxTypography variant="body1" color={'white'}>
                Melhore seu desempenho com nossa plataforma ao tirar dúvidas e
                receber feedback dos monitores(as).
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
                Seja um monitor(a) e ajude outros estudantes a alcançar seu
                potencial acadêmico.
              </InfoBoxTypography>
            </InfoBox>
          </BoxContainer>
        </InnerContainer>
      </SectionContainer>
    </OutsideContainer>
  );
};

export default Advantages;
