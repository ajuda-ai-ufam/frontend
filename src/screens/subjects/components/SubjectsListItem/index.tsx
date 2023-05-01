import { CalendarMonthRounded, EditRounded } from '@mui/icons-material';
import { CardContent } from '@mui/material';
import React from 'react';
import { TSubject } from '../../../../service/requests/useListSubjectsRequest/types';
import { TypeUserEnum } from '../../../../utils/constants';
import {
  ActionButton,
  ButtonContainer,
  Container,
  StyledCard,
  SubjectName,
} from './styles';

type Props = {
  subject: TSubject;
  userTypeId?: number;
  handleAssignProfessors(subject: TSubject): void;
  handleConfirmSchedule(subject: TSubject): void;
  handleSubjectClick(id: number): void;
};

const SubjectsListItem = ({
  subject,
  userTypeId,
  handleAssignProfessors,
  handleConfirmSchedule,
  handleSubjectClick,
}: Props) => {
  const renderButton = () => {
    if (userTypeId === TypeUserEnum.STUDENT) {
      return (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleConfirmSchedule(subject)}
            startIcon={<CalendarMonthRounded />}
            wid="140px"
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
          <SubjectName>{subject.name}</SubjectName>
        </CardContent>

        {renderButton()}
      </Container>
    </StyledCard>
  );
};

export default SubjectsListItem;
