import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0080ff', // Bright Blue
      dark: '#0066cc',
      light: '#3399ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a3a52', // Deep Navy
      dark: '#0f2433',
      light: '#2e5470',
      contrastText: '#ffffff',
    },
    info: {
      main: '#33cccc', // Cyan
      dark: '#29a3a3',
      light: '#5cd6d6',
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
      default: '#f5f8fa',
      paper: '#ffffff',
    },
    grey: {
      100: '#f0f4f7',
      200: '#e8edf2',
      300: '#d6dfe6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
