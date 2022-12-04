import { alpha, ListItemButton } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

type Props = {
  isSelected?: boolean;
};

export const ItemButton = styled(ListItemButton).attrs({
  sx: {
    ':hover': {
      bgcolor: alpha(theme.palette.background.paper, 0.08),
    },
  },
})<Props>`
  border-radius: 24px !important;
  background-color: ${(props) =>
    props.isSelected
      ? alpha(theme.palette.background.paper, 0.16)
      : ''} !important;
`;
