import { Divider, Drawer, ListItemIcon } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const StyledDrawer = styled(Drawer).attrs({
  anchor: 'left',
  PaperProps: {
    style: {
      backgroundColor: theme.palette.secondary.main,
      width: '280px',
    },
  },
})``;

export const ItemsContainer = styled(Box).attrs({
  margin: '16px 24px',
})``;

export const ProfileTextContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
})``;

export const StyledDivider = styled(Divider).attrs({
  color: theme.palette.secondary.light,
})``;

export const LogoContainer = styled(Box)`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: none !important;
  }
`;

export const CloseButtonContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'end',
})`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    display: none !important;
  }
`;

export const ItemIcon = styled(ListItemIcon)`
  min-width: 0 !important;
  margin-right: 12px !important;
`;
