import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { 
  professionalBlueTheme, 
  energyGreenTheme, 
  deepBlueTechTheme, 
  calmSlateTheme,
  industrialOrangeTheme
} from '@/theme/theme';

type ThemeOption = 'professional-blue' | 'energy-green' | 'deep-blue-tech' | 'calm-slate' | 'industrial-orange';

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
  'industrial-orange': industrialOrangeTheme,
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

  // Update CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const palette = muiTheme.palette;
    
    // Convert RGB to HSL and update CSS variables
    const bgColor = palette.background.default;
    const textColor = palette.text.primary;
    
    root.style.setProperty('--background', bgColor);
    root.style.setProperty('--foreground', textColor);
  }, [currentTheme, muiTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
