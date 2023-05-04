import { useNavigate } from 'react-router';
import SchedulesRoutineAnimation from '../../../../components/schedulesRoutineAnimation';
import { SCREENS } from '../../../../utils/screens';
import { SectionContainer, TitleTypography } from '../../styles';
import {
  ButtonFindMonitor,
  GIFContainer,
  InfoTypography,
  InnerContainer,
  MessageContainer,
} from './styles';

const ImproveKnowledge = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer color={'white'}>
      <InnerContainer>
        <MessageContainer>
          <TitleTypography>Aprimore seu conhecimento acadêmico</TitleTypography>
          <InfoTypography>
            Encontre sua monitoria ideal e aprimore seu desempenho acadêmico na
            SuperMonitoria. Oferecemos monitoria personalizada, acompanhamento
            online e uma plataforma intuitiva para ajudar você a alcançar seu
            potencial.
          </InfoTypography>
          <ButtonFindMonitor
            onClick={() => navigate(SCREENS.LOGIN)}
            color="primary"
          >
            Encontre seu monitor(a) agora!
          </ButtonFindMonitor>
        </MessageContainer>
        <GIFContainer>
          <SchedulesRoutineAnimation />
        </GIFContainer>
      </InnerContainer>
    </SectionContainer>
  );
};

export default ImproveKnowledge;
