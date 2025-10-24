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
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f5 100%)',
        border: '2px solid',
        borderColor: '#d4af37',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(212, 175, 55, 0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)',
        },
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Title */}
        <Box sx={{ flex: showSearch ? 0 : 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #b8860b 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              fontSize: { xs: '1.5rem', md: '2rem' },
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mt: 1,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {/* Right: Search Bar */}
        {showSearch && (
          <TextField
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            sx={{
              width: { xs: '100%', md: '400px' },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '& fieldset': {
                  borderColor: 'rgba(212, 175, 55, 0.25)',
                  borderWidth: '2px',
                },
                '&:hover': {
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.1)',
                  '& fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                  },
                },
                '&.Mui-focused': {
                  bgcolor: '#ffffff',
                  boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.12), 0 4px 12px rgba(212, 175, 55, 0.15)',
                  '& fieldset': {
                    borderColor: '#d4af37',
                  },
                },
                '& input': {
                  fontWeight: 500,
                  color: 'text.primary',
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.6,
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
                      bgcolor: 'rgba(212, 175, 55, 0.1)',
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
        )}

        {/* Actions */}
        {actions && <Box sx={{ ml: { md: 2 } }}>{actions}</Box>}
      </Box>
    </Box>
  );
}
