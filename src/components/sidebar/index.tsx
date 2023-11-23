import { Close } from '@mui/icons-material';
import { IconButton, Link, List, ListItem } from '@mui/material';
import HeaderLogo from '../../assets/light-logo.svg';
import { SidebarItemEnum } from '../../utils/constants';
import { SCREENS } from '../../utils/screens';
import SideBarItem from './components/SideBarItem';
import SideBarHeader from './components/SidebarHeader';
import useSidebar from './hooks/useSidebar';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import {
  CloseButtonContainer,
  ItemsContainer,
  LogoContainer,
  StyledDivider,
  StyledDrawer,
  FeedbackContainer,
  TopItemsContainer,
  FeedbackItemsContainer,
  FeedbackTypography,
} from './styles';

type Props = {
  selectedItem?: SidebarItemEnum;
};

const SideBar = ({ selectedItem }: Props) => {
  const {
    isOpen,
    items,
    showTemporarySidebar,
    handleToogleSidebar,
    handleFeedbackClick,
  } = useSidebar();

  const renderItems = () => {
    return items
      .slice(1)
      .map((item) => (
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
          <TopItemsContainer>
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
            <SideBarItem
              key={SidebarItemEnum.EDIT_PROFILE}
              sidebarItem={items[0]}
              isSelected={SidebarItemEnum.EDIT_PROFILE === selectedItem}
            />
            <StyledDivider />
            {renderItems()}
          </TopItemsContainer>
          <FeedbackContainer>
            <StyledDivider />
            <FeedbackItemsContainer>
              <ErrorRoundedIcon
                style={{
                  color: '#fff',
                }}
              />
              <FeedbackTypography onClick={handleFeedbackClick}>
                <u>Reportar Erro e Feedback</u>
              </FeedbackTypography>
            </FeedbackItemsContainer>
          </FeedbackContainer>
        </ItemsContainer>
      </StyledDrawer>
    </>
  );
};

export default SideBar;
