import { Shadows } from '@material-ui/core/styles/shadows';
import { createTheme } from '@mui/material';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1048,
    xl: 1280,
  },
};

const theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  palette: {
    primary: {
      light: '#70D268',
      main: '#65B95E',
      dark: '#51A94A',
      contrastText: '#fff',
    },
    secondary: {
      light: '#535353',
      main: '#2D2D2C',
      dark: '#101010',
      contrastText: '#fff',
    },
    error: {
      main: '#DC3333',
      contrastText: '#fff',
    },
    warning: {
      main: '#EEC228',
      contrastText: '#fff',
    },
    background: {
      default: '#ECEDEA',
    },
    action: {
      disabled: '#65B95E66',
      disabledBackground: '#70D26866',
    },
  },
  typography: {
    fontFamily: 'Inter',
    allVariants: {
      color: '#2D2D2C',
    },
    h1: {
      fontWeight: 600,
      fontSize: 57,
      letterSpacing: -0.25,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '45px',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: 45,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '36px',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: 36,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '28px',
      },
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 32,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 28,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '14px',
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
    button: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: 0.1,
      textTransform: 'none',
    },
  },
  breakpoints,
});

export default theme;
