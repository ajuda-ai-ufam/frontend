import { Typography } from '@mui/material';
import CheckedAnimation from '../../../checkedAnimation';
import { FeedbackContainer, StyledButton } from '../../styles';

type Props = {
  handleClose(): void;
};

const ConfirmedScheduleModalContent = ({ handleClose }: Props) => (
  <FeedbackContainer>
    <CheckedAnimation />

    <Typography variant="h4">Muito bem!</Typography>
    <Typography variant="body1" textAlign={'center'}>
      Foi enviado ao monitor uma solicitação de agendamento, em até 48hrs você
      receberá a resposta.
    </Typography>

    <StyledButton sx={{ margin: '16px 0 8px 0' }} onClick={handleClose}>
      Voltar
    </StyledButton>
  </FeedbackContainer>
);

export default ConfirmedScheduleModalContent;