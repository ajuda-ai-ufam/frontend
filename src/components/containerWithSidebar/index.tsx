import { SidebarItemEnum } from '../../utils/constants';
import SideBar from '../sidebar';
import Container from './styles';

type Props = {
  children: React.ReactNode;
  selectedSidebarItem: SidebarItemEnum;
};

const ContainerWithSidebar = ({ selectedSidebarItem, children }: Props) => {
  return (
    <>
      <SideBar selectedItem={selectedSidebarItem} />
      <Container>{children}</Container>
    </>
  );
};

export default ContainerWithSidebar;
