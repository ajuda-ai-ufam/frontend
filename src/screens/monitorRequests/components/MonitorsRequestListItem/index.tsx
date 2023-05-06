import { Typography } from '@mui/material';
import { Button } from '../../../../components/button';
import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';
import { TypeUserEnum } from '../../../../utils/constants';
import theme from '../../../../utils/theme';
import { ButtonsContainer, Container, DataContainer } from './styles';

type Props = {
  request: TMonitorRequest;
  userTypeId?: number;
  handleOpenAcceptModal(monitor: TMonitorRequest): void;
  handleOpenDenyModal(monitor: TMonitorRequest): void;
};

const MonitorsRequestListItem = ({
  request,
  userTypeId,
  handleOpenAcceptModal,
  handleOpenDenyModal,
}: Props) => {
  return (
    <Container>
      <DataContainer>
        <Typography
          textAlign={'center'}
          style={{ color: `${theme.palette.grey[600]}` }}
          variant="caption"
        >
          {request.student.course.name}
        </Typography>
        <Typography
          textAlign={'center'}
          style={{ margin: '4px 0' }}
          variant="h6"
        >
          {request.student.user.name}
        </Typography>
        <Typography
          textAlign={'center'}
          style={{ color: `${theme.palette.grey[600]}`, margin: '12px 0' }}
          variant="caption"
        >
          Quer ser monitor da disciplina
        </Typography>
        <Typography
          textAlign={'center'}
          style={{ margin: '6px 0' }}
          variant="subtitle1"
        >
          {request.subject.name}
        </Typography>
        {userTypeId === TypeUserEnum.COORDINATOR ? (
          <Typography
            textAlign={'center'}
            style={{ color: `${theme.palette.grey[600]}` }}
            variant="caption"
          >
            Prof. {request.responsible_professor.user.name}
          </Typography>
        ) : null}
        <ButtonsContainer>
          <Button
            onClick={() => {
              handleOpenDenyModal(request);
            }}
            variant="text"
            color="primary"
          >
            Recusar
          </Button>
          <Button
            onClick={() => {
              handleOpenAcceptModal(request);
            }}
            color="primary"
          >
            Aceitar
          </Button>
        </ButtonsContainer>
      </DataContainer>
    </Container>
  );
};

export default MonitorsRequestListItem;
