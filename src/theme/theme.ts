import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#475569', // Slate Blue
      dark: '#334155',
      light: '#64748b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#94a3b8', // Light Slate
      dark: '#64748b',
      light: '#cbd5e1',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0891b2', // Teal
      dark: '#06748c',
      light: '#22d3ee',
      contrastText: '#ffffff',
    },
    success: {
      main: '#0d9488',
      dark: '#0a7269',
      light: '#2dd4bf',
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
      100: '#f8fafc',
      200: '#f1f5f9',
      300: '#e2e8f0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
