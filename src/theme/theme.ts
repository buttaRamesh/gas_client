import { createTheme } from '@mui/material/styles';

// Professional Blue Theme
export const professionalBlueTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0080ff',
      dark: '#0066cc',
      light: '#3399ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a3a52',
      dark: '#0f2433',
      light: '#2e5470',
      contrastText: '#ffffff',
    },
    info: {
      main: '#33cccc',
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

// Energy Green Theme
export const energyGreenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d8659',
      dark: '#1e5e3d',
      light: '#48a574',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1f9d7a',
      dark: '#167a5f',
      light: '#4bb091',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0099cc',
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
      main: '#ffcc00',
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

// Deep Blue Tech Theme
export const deepBlueTechTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4169e1',
      dark: '#2e4fa8',
      light: '#6a8aeb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d1b2a',
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

// Calm Slate Theme
export const calmSlateTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#475569',
      dark: '#334155',
      light: '#64748b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#94a3b8',
      dark: '#64748b',
      light: '#cbd5e1',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0891b2',
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

// Default export for backward compatibility
export const theme = calmSlateTheme;
