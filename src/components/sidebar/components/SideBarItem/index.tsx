import { List, ListItemText } from '@mui/material';
import theme from '../../../../utils/theme';
import { TSidebarItem } from '../../hooks/types';
import { ItemIcon } from '../../styles';
import { ItemButton } from './styles';

type Props = {
  isSelected?: boolean;
  sidebarItem: TSidebarItem;
};

const SideBarItem = ({ isSelected, sidebarItem }: Props) => {
  const { handleClick, icon: Icon, text } = sidebarItem;

  return (
    <List>
      <ItemButton onClick={handleClick} isSelected={isSelected}>
        <ItemIcon>
          <Icon
            fontSize={'large'}
            style={{
              color: isSelected ? theme.palette.primary.main : '#fff',
            }}
          />
        </ItemIcon>
        <ListItemText
          primaryTypographyProps={{
            variant: isSelected ? 'subtitle1' : 'body1',
            color: '#fff',
          }}
          primary={text}
        />
      </ItemButton>
    </List>
  );
};

export default SideBarItem;
