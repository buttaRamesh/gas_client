import { Container, Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useTheme } from '@/contexts/ThemeContext';

const themes = [
  {
    id: 'professional-blue' as const,
    name: 'Professional Blue',
    description: 'Trustworthy & Corporate',
    colors: ['#0080ff', '#1a3a52', '#33cccc'],
  },
  {
    id: 'energy-green' as const,
    name: 'Energy Green',
    description: 'Eco-Friendly & Fresh',
    colors: ['#2d8659', '#1f9d7a', '#ffcc00'],
  },
  {
    id: 'deep-blue-tech' as const,
    name: 'Deep Blue Tech',
    description: 'Modern & Sophisticated',
    colors: ['#4169e1', '#0d1b2a', '#a855f7'],
  },
  {
    id: 'calm-slate' as const,
    name: 'Calm Slate',
    description: 'Minimal & Elegant',
    colors: ['#475569', '#94a3b8', '#0d9488'],
  },
];

export default function Settings() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Customize your application preferences
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Theme Selection
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 3,
              }}
            >
              {themes.map((theme) => (
                <Card
                  key={theme.id}
                  elevation={currentTheme === theme.id ? 8 : 2}
                  sx={{
                    position: 'relative',
                    border: currentTheme === theme.id ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea onClick={() => setTheme(theme.id)}>
                    <CardContent>
                      {currentTheme === theme.id && (
                        <CheckCircle
                          color="primary"
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                          }}
                        />
                      )}
                      
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {theme.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {theme.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {theme.colors.map((color, index) => (
                          <Box
                            key={index}
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: 1,
                              bgcolor: color,
                              border: '1px solid',
                              borderColor: 'grey.300',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              EnergyPath Portal - Gas Cylinder Management System
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Version 1.0.0
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
