import { SvgIconComponent } from '@mui/icons-material';
import { SidebarItemEnum } from '../../../utils/constants';

export type TSidebarItem = {
  key: SidebarItemEnum;
  text: string;
  icon: SvgIconComponent;
  handleClick(): void;
};
