import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const StyledBreadcrumbs = styled(Breadcrumbs).attrs({
  separator: '>',
})`
  margin-bottom: 8px !important;
`;

export const CurrentPageName = styled(Typography).attrs({
  variant: 'caption',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const Link = styled(MUILink).attrs((props) => ({
  underline: 'hover',
  variant: 'caption',
  component: NavLink,
  to: props.href || '/',
}))`
  color: ${theme.palette.grey[600]} !important;
`;
