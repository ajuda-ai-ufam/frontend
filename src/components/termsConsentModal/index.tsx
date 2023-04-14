import Modal from '../modal';
import { Typography } from '@mui/material';
import {
  TermConsentCard,
  TermConsentContent,
  TermConsentTitle,
  TermConsentText,
  StyledButton,
  StyledTypography,
} from './styles';

type Props = {
  isOpen: boolean;
  handleCloseModal(): void;
};

const TermConsentModal = ({ isOpen, handleCloseModal }: Props) => {
  const renderContent = () => {
    return (
      <TermConsentCard>
        <TermConsentContent>
          <TermConsentTitle>
            <Typography variant="h6">
              Termo de Consentimento sobre Coleta de Dados e Política de
              Privacidade
            </Typography>
          </TermConsentTitle>
          <TermConsentText>
            <StyledTypography>
              Somos uma equipe de pesquisa e desenvolvimento do Instituto de
              Computação (IComp) da Universidade Federal do Amazonas (UFAM),
              desenvolvendo técnicas e métodos de ensino, que têm por objetivo
              disponibilizar formas para melhorar a comunicação entre alunos e
              monitores, assim como também aumentar a taxa de aprovação em
              disciplinas de programação com o aumento de pessoas disponíveis
              para tirar dúvidas.
            </StyledTypography>
            <StyledTypography>
              Para viabilizar nossas pesquisas e aprimorar nossos métodos
              pedagógicos, é necessário que o Super Monitoria (presente sistema)
              colete dados anonimizados sobre como seus usuários usam a
              aplicação. Desta forma, ao acessar/utilizar o Super Monitoria,
              você concorda em permitir que o sistema colete dados gerados
              durante sua utilização. A seguir, apresentamos algumas informações
              adicionais sobre o processo de coleta de dados:
            </StyledTypography>
            <StyledTypography>
              · Os dados coletados destinam-se estritamente ao desenvolvimento
              de técnicas capazes de beneficiar o processo de
              ensino-aprendizagem de programação; <br />· Os dados não terão
              influência sobre sua nota na disciplina, nem para prejudicar, nem
              para beneficiar; <br />· Temos o compromisso de divulgar os
              resultados de nossas pesquisas para os participantes do projeto. A
              divulgação desses resultados pauta-se no respeito à sua
              privacidade. O anonimato dos participantes será preservado em
              quaisquer documentos que elaborarmos;
            </StyledTypography>
            <StyledTypography>
              Estamos disponíveis para contato através do e-mail:
              noreply-monitoria@icomp.ufam.edu.br
            </StyledTypography>
            <StyledTypography>
              Utilizamos tais dados com os seguintes objetivos: <br />· Para o
              aperfeiçoamento constante deste sistema; <br />· Notificá-lo sobre
              eventos como agendamento, alterações no agendamento de ajuda;
              <br />· Para seu benefício próprio ou de outros usuários em forma
              de meio de comunicação no agendamento de ajudas.
            </StyledTypography>
            <StyledTypography>
              Desde já, agradecemos pela sua disposição em colaborar com nossas
              pesquisas.
            </StyledTypography>
          </TermConsentText>
        </TermConsentContent>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleCloseModal}
        >
          Fechar
        </StyledButton>
      </TermConsentCard>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => {
        false;
      }}
      width="744px"
    >
      {renderContent()}
    </Modal>
  );
};

export default TermConsentModal;
