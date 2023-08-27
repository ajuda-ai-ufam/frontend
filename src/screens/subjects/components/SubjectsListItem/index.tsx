import { CardContent } from '@mui/material';
import React from 'react';
import { TSubject } from '../../../../service/requests/useListSubjectsRequest/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../../service/storage/getLoggedUser';
import {
  CalendarMonthRounded,
  EditRounded,
  ManageHistoryRounded,
} from '@mui/icons-material';
import {
  ActionButton,
  ButtonContainer,
  Container,
  StyledCard,
  SubjectName,
} from './styles';

type Props = {
  subject: TCompleteSubject;
  userTypeId?: number;
  handleAssignProfessors(subject: TSubject): void;
  handleConfirmSchedule(subject: TSubject): void;
  handleSubjectClick(id: number): void;
  handleManageMonitoringClick(): void;
};

const SubjectsListItem = ({
  subject,
  userTypeId,
  handleAssignProfessors,
  handleConfirmSchedule,
  handleSubjectClick,
  handleManageMonitoringClick,
}: Props) => {
  const userId = useGetLoggedUser()?.sub;
  const renderButton = () => {
    if (userTypeId === TypeUserEnum.STUDENT) {
      if (!!subject.monitors.length) {
        if (subject.monitors.find((monitor) => monitor.studentId === userId)) {
          return (
            <ButtonContainer>
              <ActionButton
                onClick={handleManageMonitoringClick}
                startIcon={<ManageHistoryRounded />}
                wid="140px"
                color="secondary"
              >
                Gerenciar
              </ActionButton>
            </ButtonContainer>
          );
        }
      }

      return (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleConfirmSchedule(subject)}
            startIcon={<CalendarMonthRounded />}
            wid="140px"
            color="primary"
          >
            Agendar
          </ActionButton>
        </ButtonContainer>
      );
    }

    if (userTypeId === TypeUserEnum.COORDINATOR) {
      return (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleAssignProfessors(subject)}
            wid="204px"
            color="primary"
            variant="outlined"
            startIcon={<EditRounded />}
          >
            Editar professores
          </ActionButton>
        </ButtonContainer>
      );
    }

    return <></>;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const clickedElement = (e.target as HTMLTextAreaElement).localName;

    // If user clicks on button or button icon, do nothing
    if (clickedElement === 'div' || clickedElement === 'h6') {
      return handleSubjectClick(subject.id);
    }
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <Container>
        <CardContent>
          <SubjectName>
            {subject.code} - {subject.name}
          </SubjectName>
        </CardContent>

        {renderButton()}
      </Container>
    </StyledCard>
  );
};

export default SubjectsListItem;
