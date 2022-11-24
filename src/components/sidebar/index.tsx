import { AccountCircle, Close } from '@mui/icons-material';
import { IconButton, Link, List, ListItem, Typography } from '@mui/material';
import HeaderLogo from '../../assets/light-logo.svg';
import { SidebarItemEnum } from '../../utils/constants';
import { SCREENS } from '../../utils/screens';
import SideBarHeader from './components/SidebarHeader';
import SideBarItem from './components/SideBarItem';
import useSidebar from './hooks/useSidebar';
import {
  CloseButtonContainer,
  ItemIcon,
  ItemsContainer,
  LogoContainer,
  ProfileTextContainer,
  StyledDivider,
  StyledDrawer,
} from './styles';

type Props = {
  selectedItem?: SidebarItemEnum;
};

const SideBar = ({ selectedItem }: Props) => {
  const {
    isOpen,
    items,
    showTemporarySidebar,
    userName,
    userRole,
    handleToogleSidebar,
  } = useSidebar();

  const renderItems = () => {
    return items.map((item) => (
      <SideBarItem
        key={item.key}
        sidebarItem={item}
        isSelected={item.key === selectedItem}
      />
    ));
  };

  return (
    <>
      <SideBarHeader handleOpenClick={handleToogleSidebar} />
      <StyledDrawer
        variant={showTemporarySidebar ? 'temporary' : 'persistent'}
        open={isOpen}
      >
        <ItemsContainer>
          <CloseButtonContainer>
            <IconButton onClick={handleToogleSidebar}>
              <Close fontSize={'large'} style={{ color: '#fff' }} />
            </IconButton>
          </CloseButtonContainer>

          <LogoContainer>
            <List>
              <ListItem>
                <Link href={SCREENS.HOME}>
                  <img src={HeaderLogo} alt={'Super Monitoria'} />
                </Link>
              </ListItem>
            </List>

            <StyledDivider />
          </LogoContainer>

          <List>
            <ListItem>
              <ItemIcon>
                <AccountCircle fontSize={'large'} style={{ color: '#fff' }} />
              </ItemIcon>
              <ProfileTextContainer>
                <Typography variant="subtitle1" color="#fff">
                  {userName}
                </Typography>
                <Typography variant="caption" color="#fff">
                  {userRole}
                </Typography>
              </ProfileTextContainer>
            </ListItem>
          </List>

          <StyledDivider />

          {renderItems()}
        </ItemsContainer>
      </StyledDrawer>
    </>
  );
};

export default SideBar;
