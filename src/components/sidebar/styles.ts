import { Divider, Drawer, ListItemIcon, Typography } from '@mui/material';
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '16px 24px',
  height: '100%',
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

export const FeedbackContainer = styled(Box).attrs({})``;

export const FeedbackItemsContainer = styled(Box).attrs({
  display: 'flex',
  margin: '16px 0px',
  gap: '4px',
  alignItems: 'center',
})``;

export const FeedbackTypography = styled(Typography).attrs({
  color: '#fff',
})`
  cursor: pointer !important;
`;

export const TopItemsContainer = styled(Box).attrs({})``;
