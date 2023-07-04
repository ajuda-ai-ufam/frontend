import { List, ListItemText } from '@mui/material';
import theme from '../../../../utils/theme';
import { TSidebarItem } from '../../hooks/types';
import { ItemIcon, ProfileTextContainer } from '../../styles';
import { ItemButton } from './styles';

type Props = {
  isSelected?: boolean;
  sidebarItem: TSidebarItem;
};

const SideBarItem = ({ isSelected, sidebarItem }: Props) => {
  const { handleClick, icon: Icon, text, subtext } = sidebarItem;

  return (
    <List>
      <ItemButton onClick={handleClick} selected={!!isSelected}>
        <ItemIcon>
          <Icon
            fontSize={'large'}
            style={{
              color: isSelected ? theme.palette.primary.main : '#fff',
            }}
          />
        </ItemIcon>
        {subtext ? (
          <ProfileTextContainer>
            <ListItemText
              primaryTypographyProps={{
                variant: 'body1',
                color: '#fff',
              }}
              primary={text}
            />
            <ListItemText
              primaryTypographyProps={{
                variant: 'caption',
                color: '#fff',
              }}
              primary={subtext}
            />
          </ProfileTextContainer>
        ) : (
          <ListItemText
            primaryTypographyProps={{
              variant: isSelected ? 'subtitle1' : 'body1',
              color: '#fff',
            }}
            primary={text}
          />
        )}
      </ItemButton>
    </List>
  );
};

export default SideBarItem;
