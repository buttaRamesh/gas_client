import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6600', // Industrial Orange
      dark: '#cc5200',
      light: '#ff8533',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3d4247', // Dark Gray
      dark: '#2a2d31',
      light: '#5a5f66',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0099ff', // Electric Blue
      dark: '#0077cc',
      light: '#33adff',
      contrastText: '#ffffff',
    },
    success: {
      main: '#28a745', // Green for success states
      dark: '#1e7e34',
      light: '#48b461',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffc107',
      dark: '#e0a800',
      light: '#ffcd38',
      contrastText: '#000000',
    },
    error: {
      main: '#dc3545',
      dark: '#bd2130',
      light: '#e4606d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
