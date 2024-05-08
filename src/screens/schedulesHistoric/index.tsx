import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SidebarItemEnum } from '../../utils/constants';
import EventList from './components/EventList';
import FiltersForm from './components/FiltersForm';
import ScheduleDetailsModal from './components/ScheduleDetailsModal';
import useSchedulesHistoric from './hooks/useSchedulesHistoric';
import { Card, Container, LegendTypography } from './styles';

const SchedulesHistoric = () => {
  const {
    isScheduleDetailsModalOpen,
    handleFilterClick,
    handleChangeResponsiblesOrSubjectsFilter,
    handleEventClick,
    schedules,
    handleChangeNameOrEnrollFilter,
    selectedSchedule,
    isLoading,
    error,
    page,
    handleChangePage,
    totalPages,
    handleCloseScheduleDetailsModal,
    filters,
    handleChangeBeginDateFilter,
    handleChangeEndDateFilter,
    responseGetAllProfessors,
    responseGetProfessorSubjects,
    typeMonitoring,
    handleTypeMonitoringChange,
  } = useSchedulesHistoric();

  return (
    <ContainerWithSidebar
      selectedSidebarItem={SidebarItemEnum.SCHEDULES_HISTORIC}
    >
      <ScheduleDetailsModal
        schedule={selectedSchedule}
        isOpen={isScheduleDetailsModalOpen}
        handleClose={handleCloseScheduleDetailsModal}
      />
      <Container>
        <Card>
          <Typography variant="h3">Histórico de Agendamentos</Typography>
          <LegendTypography>
            Aqui você encontra todos os agendamentos realizados organizados do
            mais recente ao mais antigo. Clique em um evento para ver mais
            detalhes.
          </LegendTypography>
          <FiltersForm
            filters={filters}
            handleFilterClick={handleFilterClick}
            responseGetAllProfessors={responseGetAllProfessors}
            responseGetProfessorSubjects={responseGetProfessorSubjects}
            handleChangeBeginDateFilter={handleChangeBeginDateFilter}
            handleChangeEndDateFilter={handleChangeEndDateFilter}
            handleChangeNameOrEnrollFilter={handleChangeNameOrEnrollFilter}
            handleChangeResponsiblesOrSubjectsFilter={
              handleChangeResponsiblesOrSubjectsFilter
            }
            typeMonitoring={typeMonitoring}
            handleTypeMonitoringChange={handleTypeMonitoringChange}
          />
          <EventList
            typeMonitoring={typeMonitoring}
            isLoading={isLoading}
            schedules={schedules}
            handleEventClick={handleEventClick}
            page={page}
            error={error}
            handleChangePage={handleChangePage}
            totalPages={totalPages}
          />
        </Card>
      </Container>
    </ContainerWithSidebar>
  );
};

export default SchedulesHistoric;
