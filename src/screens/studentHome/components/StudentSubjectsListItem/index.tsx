import { CardContent } from '@mui/material';
import React from 'react';
import { TSubject } from '../../../../service/requests/useListSubjectsRequest/types';
import { TypeUserEnum } from '../../../../utils/constants';
import { TCompleteSubject } from '../../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../../service/storage/getLoggedUser';
import {
  CalendarMonthRounded,
  ManageHistoryRounded,
  PostAddRounded,
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
  handleConfirmSchedule(subject: TSubject): void;
  handleSubjectClick(id: number): void;
  handleManageMonitoringClick(): void;
  handleOpenEnrollModal(id: number): void;
};

const StudentSubjectsListItem = ({
  subject,
  userTypeId,
  handleConfirmSchedule,
  handleSubjectClick,
  handleManageMonitoringClick,
  handleOpenEnrollModal,
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
                wid="180px"
                color="secondary"
              >
                Editar Monitoria
              </ActionButton>
            </ButtonContainer>
          );
        }
      }
      return subject.isStudentEnrolled ? (
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
      ) : (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleOpenEnrollModal(subject.id)}
            startIcon={<PostAddRounded />}
            wid="140px"
            color="secondary"
          >
            Matricular
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

export default StudentSubjectsListItem;
