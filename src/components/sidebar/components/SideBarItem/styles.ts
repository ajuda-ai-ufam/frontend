import { alpha, ListItemButton } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const ItemButton = styled(ListItemButton).attrs({
  sx: {
    ':hover': {
      bgcolor: alpha(theme.palette.background.paper, 0.08),
    },
  },
})`
  border-radius: 100px !important;
  background-color: ${(props) =>
    props.selected
      ? alpha(theme.palette.background.paper, 0.16)
      : ''} !important;
`;
