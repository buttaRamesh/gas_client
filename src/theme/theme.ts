import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d8659', // Forest Green
      dark: '#1e5e3d',
      light: '#48a574',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1f9d7a', // Teal
      dark: '#167a5f',
      light: '#4bb091',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0099cc', // Blue
      dark: '#007aa3',
      light: '#33add6',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2d8659',
      dark: '#1e5e3d',
      light: '#48a574',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffcc00', // Bright Yellow
      dark: '#cca300',
      light: '#ffd633',
      contrastText: '#000000',
    },
    error: {
      main: '#dc3545',
      dark: '#bd2130',
      light: '#e4606d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7faf8',
      paper: '#ffffff',
    },
    grey: {
      100: '#f0f5f2',
      200: '#e6eeea',
      300: '#d4e3db',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
