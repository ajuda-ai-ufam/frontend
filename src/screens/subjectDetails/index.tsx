import { ErrorOutlineSharp } from '@mui/icons-material';
import { CircularProgress, Typography } from '@mui/material';
import Breadcrumbs from '../../components/breadcrumbs';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import SearchField from '../../components/searchField';
import { SidebarItemEnum, TypeUserEnum } from '../../utils/constants';
import { SCREENS } from '../../utils/screens';
import MonitorsList from './components/monitorsList';
import SubjectHeader from './components/subjectHeader';
import useSubjectDetails from './hooks/useSubjectDetails';
import {
  Card,
  Container,
  FallbackTypography,
  LegendTypography,
  ProgressContainer,
} from './styles';

const SubjectDetails = () => {
  const {
    error,
    isLoading,
    monitors,
    subject,
    search,
    selectedProfessorId,
    userType,
    handleGoBackClick,
    handleMonitorClick,
    handleProfessorFilterClick,
    handleSearch,
    handleSearchChange,
  } = useSubjectDetails();

  const renderPageTop = () => {
    if (!subject) return <></>;

    return (
      <>
        <SubjectHeader
          subject={subject}
          userType={userType}
          handleGoBackClick={handleGoBackClick}
        />

        <Breadcrumbs
          previousPages={[{ name: 'Disciplinas', route: SCREENS.SUBJECTS }]}
          currentPage={subject.name}
        />

        <Typography variant="h3">{subject.name}</Typography>

        <LegendTypography>
          Aqui estão listados todos os professores e monitores desta disciplina
        </LegendTypography>
      </>
    );
  };

  const renderCardContent = () => {
    if (error) {
      return (
        <>
          <SubjectHeader
            subject={subject}
            userType={userType}
            handleGoBackClick={handleGoBackClick}
          />

          <ProgressContainer>
            <ErrorOutlineSharp style={{ fontSize: '56px' }} />
            <Typography textAlign={'center'} variant="h3">
              Desculpe, essa disciplina não existe.
            </Typography>
            <FallbackTypography>
              Não encontramos a página que você tentou acessar, tente uma
              disciplina diferente ou volte ao menu principal.
            </FallbackTypography>
          </ProgressContainer>
        </>
      );
    }

    if (isLoading || !subject) {
      return (
        <ProgressContainer>
          <CircularProgress color="primary" />
        </ProgressContainer>
      );
    }

    if (!subject?.responsables.length) {
      return (
        <>
          {renderPageTop()}

          <ProgressContainer>
            <FallbackTypography>
              Ops... Parece que não há nada por aqui.
              {userType === TypeUserEnum.COORDINATOR
                ? ' Tente adicionar um novo professor.'
                : ' Tente entrar em contato com o coordenador.'}
            </FallbackTypography>
          </ProgressContainer>
        </>
      );
    }

    return (
      <>
        {renderPageTop()}

        <SearchField
          search={search}
          handleSearchChange={handleSearchChange}
          placeholder="Buscar aluno"
          handleSearch={handleSearch}
        />

        <MonitorsList
          monitors={monitors}
          selectedProfessorId={selectedProfessorId}
          subject={subject}
          handleMonitorClick={handleMonitorClick}
          handleProfessorFilterClick={handleProfessorFilterClick}
        />
      </>
    );
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SUBJECTS}>
      <Container>
        <Card>{renderCardContent()}</Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default SubjectDetails;
