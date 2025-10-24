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
        p: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(120, 53, 15, 0.1) 100%)',
        border: '2px solid',
        borderColor: 'rgba(212, 175, 55, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #d4af37 0%, #f4e4b0 50%, #d4af37 100%)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: description || showSearch ? 2 : 0 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e4b0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: description ? 1 : 0,
              letterSpacing: '-0.5px',
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
        {actions && <Box sx={{ ml: 2 }}>{actions}</Box>}
      </Box>

      {showSearch && (
        <TextField
          fullWidth
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          sx={{
            maxWidth: 600,
            '& .MuiOutlinedInput-root': {
              bgcolor: 'background.paper',
              borderRadius: 2,
              '& fieldset': {
                borderColor: 'rgba(212, 175, 55, 0.3)',
                borderWidth: '2px',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(212, 175, 55, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d4af37',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#d4af37' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    </Box>
  );
}
