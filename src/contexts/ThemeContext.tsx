import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { 
  professionalBlueTheme, 
  energyGreenTheme, 
  deepBlueTechTheme, 
  calmSlateTheme 
} from '@/theme/theme';

type ThemeOption = 'professional-blue' | 'energy-green' | 'deep-blue-tech' | 'calm-slate';

interface ThemeContextType {
  currentTheme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const themeMap = {
  'professional-blue': professionalBlueTheme,
  'energy-green': energyGreenTheme,
  'deep-blue-tech': deepBlueTechTheme,
  'calm-slate': calmSlateTheme,
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(() => {
    const saved = localStorage.getItem('app-theme') as ThemeOption;
    return saved || 'calm-slate';
  });

  const setTheme = (theme: ThemeOption) => {
    setCurrentTheme(theme);
    localStorage.setItem('app-theme', theme);
  };

  const muiTheme = themeMap[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
