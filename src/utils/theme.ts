import { Shadows } from '@material-ui/core/styles/shadows';
import { createTheme } from '@mui/material';

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
      disabled: '#fff',
      disabledBackground: '#70D26866',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: 400,
      fontSize: 57,
      letterSpacing: -0.25,
    },
    h2: {
      fontWeight: 400,
      fontSize: 45,
    },
    h3: {
      fontWeight: 400,
      fontSize: 36,
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1048,
      xl: 1280,
    },
  },
});

export default theme;
