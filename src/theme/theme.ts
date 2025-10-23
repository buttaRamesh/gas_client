import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4169e1', // Royal Blue
      dark: '#2e4fa8',
      light: '#6a8aeb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d1b2a', // Navy Black
      dark: '#080f16',
      light: '#1a2e42',
      contrastText: '#ffffff',
    },
    info: {
      main: '#4169e1',
      dark: '#2e4fa8',
      light: '#6a8aeb',
      contrastText: '#ffffff',
    },
    success: {
      main: '#28a745',
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
      default: '#f4f6f9',
      paper: '#ffffff',
    },
    grey: {
      100: '#eceff4',
      200: '#e5e9f0',
      300: '#d8dee9',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
