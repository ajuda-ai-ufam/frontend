import { CircularProgress, Pagination } from '@mui/material';
import { TMonitorRequest } from '../../../../service/requests/useGetAllMonitorRequests/types';
import { TypeUserEnum } from '../../../../utils/constants';
import MonitorsRequestListItem from '../MonitorsRequestListItem';
import {
  Container,
  FallbackContainer,
  FallbackTypography,
  MonitorsContainer,
  PaginationContainer,
  ProgressContainer,
} from './styles';

type Props = {
  isLoading: boolean;
  page: number;
  totalPages: number;
  requests?: TMonitorRequest[];
  userTypeId?: number;
  searchFieldElement?: string;
  handleChangePage(event: React.ChangeEvent<unknown>, page: number): void;
  handleOpenAcceptModal(monitor: TMonitorRequest): void;
  handleOpenDenyModal(monitor: TMonitorRequest): void;
};

const MonitorsRequestList = ({
  isLoading,
  page,
  totalPages,
  requests,
  userTypeId,
  searchFieldElement,
  handleChangePage,
  handleOpenAcceptModal,
  handleOpenDenyModal,
}: Props) => {
  if (isLoading || requests === undefined) {
    return (
      <Container>
        <ProgressContainer>
          <CircularProgress color="primary" />
        </ProgressContainer>
      </Container>
    );
  }

  if (requests.length === 0 && searchFieldElement) {
    return (
      <Container>
        <FallbackContainer>
          <FallbackTypography>
            Ops... Não foi encontrado nenhum(a) monitor(a).
          </FallbackTypography>
        </FallbackContainer>
      </Container>
    );
  }

  if (requests.length === 0) {
    return (
      <Container>
        <FallbackContainer>
          <FallbackTypography>
            {userTypeId === TypeUserEnum.COORDINATOR
              ? 'Hmm... Parece que você não tem nenhuma solicitação. Que tal adicionar um(a) professor(a)?'
              : 'Hmm... Parece que você não tem nenhuma solicitação. Que tal convidar um(a) aluno(a) para a plataforma?'}
          </FallbackTypography>
        </FallbackContainer>
      </Container>
    );
  }

  return (
    <Container>
      <MonitorsContainer>
        {requests.map((request) => (
          <MonitorsRequestListItem
            key={request.id}
            request={request}
            userTypeId={userTypeId}
            handleOpenAcceptModal={handleOpenAcceptModal}
            handleOpenDenyModal={handleOpenDenyModal}
          />
        ))}
      </MonitorsContainer>

      <PaginationContainer>
        <Pagination
          page={page}
          onChange={handleChangePage}
          count={totalPages}
          color="primary"
        />
      </PaginationContainer>
    </Container>
  );
};

export default MonitorsRequestList;
