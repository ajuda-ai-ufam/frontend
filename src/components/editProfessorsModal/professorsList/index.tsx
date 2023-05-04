import { DeleteRounded } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { TSubjectResponsible } from '../../../service/requests/useGetSubject/types';
import {
  Container,
  FallbackContainer,
  FallbackTypography,
  InnerContainer,
  StyledCard,
} from './styles';

type Props = {
  responsibles: TSubjectResponsible[];
  handleClickRemoveProfessor(responsible: TSubjectResponsible): void;
};

const ProfessorsList = ({
  responsibles,
  handleClickRemoveProfessor,
}: Props) => {
  return (
    <>
      {responsibles.length > 0 ? (
        <Container>
          {responsibles.map((responsible) => (
            <StyledCard>
              <InnerContainer>
                <Typography variant="body1">
                  {responsible.professor.user.name}
                </Typography>

                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleClickRemoveProfessor(responsible)}
                >
                  <DeleteRounded /> Remover
                </Button>
              </InnerContainer>
            </StyledCard>
          ))}
        </Container>
      ) : (
        <FallbackContainer>
          <FallbackTypography>
            Ops... Parece que você não tem ninguém como responsável nesta
            disciplina. Tente adicionar novos professores acima.
          </FallbackTypography>
        </FallbackContainer>
      )}
    </>
  );
};

export default ProfessorsList;
