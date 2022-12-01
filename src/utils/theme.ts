import { Shadows } from '@material-ui/core/styles/shadows';
import { createTheme } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1048,
    xl: 1280,
  },
};

const components = {
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            backgroundColor: 'white',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
          },
        },
        sx: {
          '&& .Mui-selected': {
            backgroundColor: '#eeeeee',
            ':hover': {
              backgroundColor: '#e0e0e0',
            },
          },
        },
      },
    },
  },
};

const theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,

  palette: {
    grey: {
      A100: '#ECEDEA',
    },
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
      default: '#F6F7F6',
      paper: '#65B95E',
    },
    action: {
      disabled: '#fff',
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
      lineHeight: '44px',
      fontSize: 36,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '28px',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: 32,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '24px',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: 28,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '16px',
      },
    },
    h6: {
      fontWeight: 500,
      lineHeight: '32px',
      fontSize: 24,
      [`@media (max-width:${breakpoints.values.sm}px)`]: {
        fontSize: '16px',
      },
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 28,
    },
    body1: {
      fontWeight: 400,
      lineHeight: '20px',
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
  components,
});

export default theme;
