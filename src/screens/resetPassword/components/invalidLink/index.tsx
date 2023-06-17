import { Typography } from '@mui/material';
import WarningAnimation from '../../../../components/warningAnimation';
import {
  Card,
  CardContent,
  ResetPasswordEmailButton,
  TypographyContainer,
} from './styles';

type Props = {
  handleToResetPasswordClick(): void;
};

const InvalidLink = ({ handleToResetPasswordClick }: Props) => {
  return (
    <Card>
      <CardContent>
        <WarningAnimation />
        <TypographyContainer>
          <Typography variant="h4">Link inválido!</Typography>
          <Typography variant="body1">
            Este link para recuperação de senha não pode mais ser usado. Caso
            você já tenha solicitado um link, tente acessar o mais recente.{' '}
            <br />
            <br />
            Se você ainda não tiver solicitado um novo, tente acessar a
            Recuperação de senha pelo botão abaixo.
          </Typography>
        </TypographyContainer>
        <ResetPasswordEmailButton onClick={handleToResetPasswordClick}>
          Ir para a Recuperação de senha
        </ResetPasswordEmailButton>
      </CardContent>
    </Card>
  );
};

export default InvalidLink;
