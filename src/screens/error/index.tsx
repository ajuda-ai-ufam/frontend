import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import Copyright from '../../components/copyright';
import Header from '../../components/Header';
import useHeader from '../../components/Header/hooks/useHeader';
import NotFoundErrorAnimation from '../../components/notFoundErrorAnimation';
import {
  ContainerCopyright,
  ContainerLogo,
  ContainerMessage,
  OutsideContainer,
} from './styles';

const Error = () => {
  const navigate = useNavigate();
  const { handleLogoClick } = useHeader();
  return (
    <>
      <OutsideContainer>
        <ContainerLogo>
          <Header showLogin={false} />
        </ContainerLogo>
        <ContainerMessage>
          <NotFoundErrorAnimation />
          <Typography variant="h3">
            Desculpe, não encontramos a página que você procura
          </Typography>
          <Typography variant="h6">
            Verifique o endereço digitado ou clique no botão abaixo
          </Typography>
          <Button
            onClick={() => navigate(handleLogoClick())}
            sx={{ mt: '12px' }}
            color="primary"
            variant="contained"
          >
            Voltar para o Início
          </Button>
        </ContainerMessage>
        <ContainerCopyright>
          <Copyright mb={3} />
        </ContainerCopyright>
      </OutsideContainer>
    </>
  );
};

export default Error;
