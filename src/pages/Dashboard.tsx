import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import {
  LocalShipping as RoutesIcon,
  People as ConsumersIcon,
  Person as DeliveryPersonIcon,
  Inventory as ProductsIcon,
  Place as AreasIcon,
  Analytics as StatsIcon,
} from '@mui/icons-material';

const dashboardCards = [
  {
    title: 'Routes',
    description: 'Manage delivery routes and assignments',
    icon: RoutesIcon,
    path: '/routes',
    color: '#d4af37',
  },
  {
    title: 'Route Areas',
    description: 'Configure and manage route areas',
    icon: AreasIcon,
    path: '/route-areas',
    color: '#c9a961',
  },
  {
    title: 'Consumers',
    description: 'Manage consumer information',
    icon: ConsumersIcon,
    path: '/consumers',
    color: '#b8860b',
  },
  {
    title: 'Delivery Persons',
    description: 'Manage delivery personnel',
    icon: DeliveryPersonIcon,
    path: '/delivery-persons',
    color: '#daa520',
  },
  {
    title: 'Products',
    description: 'Manage product inventory',
    icon: ProductsIcon,
    path: '/products',
    color: '#c5a572',
  },
  {
    title: 'Statistics',
    description: 'View analytics and reports',
    icon: StatsIcon,
    path: '/routes/statistics',
    color: '#a67c00',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      py: 4,
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e4b0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            EnergyPath Portal
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#a8a8a8',
              textAlign: 'center',
            }}
          >
            Gas Cylinder Management System
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {dashboardCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Box key={card.title}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(42, 42, 42, 0.8) 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 24px rgba(212, 175, 55, 0.3)`,
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                    },
                  }}
                >
                  <CardActionArea 
                    onClick={() => navigate(card.path)}
                    sx={{ p: 3 }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${card.color}33 0%, ${card.color}11 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          border: `2px solid ${card.color}`,
                        }}
                      >
                        <IconComponent 
                          sx={{ 
                            fontSize: 32,
                            color: card.color,
                          }} 
                        />
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#d4af37',
                          mb: 1,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: '#a8a8a8' }}
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
