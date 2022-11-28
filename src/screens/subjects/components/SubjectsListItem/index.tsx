import { Add, CalendarMonthRounded } from '@mui/icons-material';
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
  handleAddProfessor(id: number): void;
  handleScheduleHelp(id: number): void;
  handleSubjectClick(id: number): void;
};

const SubjectsListItem = ({
  subject,
  userTypeId,
  handleAddProfessor,
  handleScheduleHelp,
  handleSubjectClick,
}: Props) => {
  const renderButton = () => {
    if (userTypeId === TypeUserEnum.STUDENT) {
      return (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleScheduleHelp(subject.id)}
            startIcon={<CalendarMonthRounded />}
          >
            Ajuda
          </ActionButton>
        </ButtonContainer>
      );
    }

    if (userTypeId === TypeUserEnum.COORDINATOR) {
      return (
        <ButtonContainer>
          <ActionButton
            onClick={() => handleAddProfessor(subject.id)}
            startIcon={<Add />}
          >
            Professor
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
