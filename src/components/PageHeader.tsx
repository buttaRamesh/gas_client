import { ReactNode } from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface PageHeaderProps {
  title: string;
  description?: string;
  showSearch?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  description,
  showSearch = false,
  searchValue = '',
  searchPlaceholder = 'Search...',
  onSearchChange,
  actions,
}: PageHeaderProps) {
  return (
    <Box
      sx={{
        mb: 4,
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        border: '2px solid',
        borderColor: '#d4af37',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(212, 175, 55, 0.2)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: showSearch ? 3 : 0, position: 'relative', zIndex: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #fbbf24 0%, #f4e4b0 50%, #fbbf24 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              fontSize: { xs: '1.5rem', md: '2rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #d4af37 0%, transparent 100%)',
                borderRadius: '2px',
              }
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              sx={{
                color: '#a8a8a8',
                fontWeight: 500,
                mt: 2,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
        {actions && <Box sx={{ ml: 2 }}>{actions}</Box>}
      </Box>

      {showSearch && (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <TextField
            fullWidth
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            sx={{
              maxWidth: 600,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '& fieldset': {
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  borderWidth: '2px',
                },
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  '& fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.6)',
                  },
                },
                '&.Mui-focused': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                  '& fieldset': {
                    borderColor: '#d4af37',
                  },
                },
                '& input': {
                  color: '#ffffff',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: '#a8a8a8',
                    opacity: 1,
                  },
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      bgcolor: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                    }}
                  >
                    <SearchIcon sx={{ color: '#d4af37', fontSize: 20 }} />
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    </Box>
  );
}
