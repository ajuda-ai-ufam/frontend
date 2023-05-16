import { Typography } from '@mui/material';
import { Button } from '../../../../components/button';
import { ButtonContainer } from '../ScheduleDetailsModal/styles';

type Props = {
  handleClose(): void;
};

const RefusedScheduleModalContent = ({ handleClose }: Props) => (
  <>
    <Typography variant="h4">Horário recusado</Typography>
    <Typography variant="body1">
      O agendamento será removido da sua lista e estará disponível para outro(a)
      aluno(a).
    </Typography>

    <ButtonContainer>
      <Button variant="text" color="primary" onClick={handleClose}>
        Fechar
      </Button>
    </ButtonContainer>
  </>
);

export default RefusedScheduleModalContent;
