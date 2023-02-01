import { TEventType } from '../../../service/requests/useGetSchedulesRequest/types';
import {
  SchedulesFilters,
  schedulesFiltersParamConverter,
  SchedulesStatus,
} from '../../../utils/constants';

const eventTypeFilters = [TEventType.MONITOR, TEventType.STUDENT];

const useFilterParams = (filter: SchedulesFilters) => {
  const queryFilter = schedulesFiltersParamConverter[filter];
  let status = undefined;
  let eventType = undefined;

  if (queryFilter !== undefined) {
    if (eventTypeFilters.includes(queryFilter as TEventType)) {
      eventType = queryFilter as TEventType;
    } else {
      if (filter === SchedulesFilters.WAITING_APPROVAL) {
        eventType = TEventType.STUDENT;
      }
      if (filter === SchedulesFilters.PENDING) {
        eventType = TEventType.MONITOR;
      }
      status = [queryFilter] as SchedulesStatus[];
    }
  }

  return { status, eventType };
};

export default useFilterParams;
