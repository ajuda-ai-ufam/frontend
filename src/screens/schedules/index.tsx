import { Typography } from '@mui/material';
import ContainerWithSidebar from '../../components/containerWithSidebar';
import { SchedulesFilters, SidebarItemEnum } from '../../utils/constants';
import ScheduleDetailsModal from './components/ScheduleDetailsModal';
import EventList from './components/EventList';
import useSchedules from './hooks/useSchedules';
import {
  Card,
  Container,
  FiltersContainer,
  LegendTypography,
  StyledChip,
} from './styles';

const Schedules = () => {
  const {
    selectedFilter,
    isScheduleDetailsModalOpen,
    modalType,
    handleFilterClick,
    handleEventClick,
    schedules,
    selectedSchedule,
    isLoading,
    error,
    page,
    handleChangePage,
    totalPages,
    handleCloseScheduleDetailsModal,
  } = useSchedules();

  const renderFilterChips = () => {
    return [
      ...Object.values(SchedulesFilters).map((sched) => (
        <StyledChip
          key={sched}
          isSelected={selectedFilter === sched}
          label={sched}
          onClick={() => handleFilterClick(sched)}
        />
      )),
    ];
  };

  return (
    <ContainerWithSidebar selectedSidebarItem={SidebarItemEnum.SCHEDULES}>
      <ScheduleDetailsModal
        schedule={selectedSchedule}
        isOpen={isScheduleDetailsModalOpen}
        handleClose={handleCloseScheduleDetailsModal}
        modalType={modalType}
      />

      <Container>
        <Card>
          <Typography variant="h3">Agendamentos</Typography>
          <LegendTypography>
            Aqui você encontra todos os agendamentos confirmados e pendentes,
            clique em um agendamento para exibir mais detalhes
          </LegendTypography>
          <FiltersContainer>{renderFilterChips()}</FiltersContainer>

          <EventList
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

export default Schedules;
