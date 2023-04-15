import Carousel from 'react-material-ui-carousel';
import { useMediaQuery } from '@mui/material';
import theme from '../../../../../../utils/theme';
import { collaborators } from '../../../../constants';
import CollaboratorsListItem from '../collaboratorsListItem';
import { CollaboratorsContainer, Container } from './styles';

const CollaboratorsList = () => {
  const matches = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`);

  return (
    <Container>
      <Carousel
        height={matches ? '600px' : '400px'}
        animation="slide"
        duration={1000}
        interval={8000}
        navButtonsAlwaysInvisible={true}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.light,
          },
        }}
      >
        {collaborators.map((collabs) => (
          <CollaboratorsContainer style={{ color: 'blue !important' }}>
            {collabs.map((collaborator) => (
              <CollaboratorsListItem
                key={collaborator.name}
                linkedin={collaborator.linkedin}
                name={collaborator.name}
                role={collaborator.role}
                photo={collaborator.photo}
              />
            ))}
          </CollaboratorsContainer>
        ))}
      </Carousel>
    </Container>
  );
};

export default CollaboratorsList;
