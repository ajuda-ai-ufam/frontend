import { Avatar, Typography } from '@mui/material';
import LinkedinIcon from '../../../../../../assets/landingPageImages/Vectorlinkedin.svg';
import {
  Container,
  InfomartionContainer,
  LinkedinButton,
  NameTypography,
  Photo,
} from './styles';

type Props = {
  name: string;
  role: string;
  linkedin: string;
  photo?: string;
};

const CollaboratorsListItem = ({ linkedin, name, role, photo }: Props) => {
  return (
    <Container>
      <Photo photo={photo} />
      <InfomartionContainer>
        <NameTypography>{name}</NameTypography>
        <Typography variant="body1" color={'grey'}>
          {role}
        </Typography>
        <LinkedinButton
          color="primary"
          onClick={() => window.open(linkedin, '_blank')}
          startIcon={
            <Avatar
              sx={{
                height: '24px',
                width: '24px',
              }}
              src={LinkedinIcon}
            />
          }
        >
          Linkedin
        </LinkedinButton>
      </InfomartionContainer>
    </Container>
  );
};

export default CollaboratorsListItem;
