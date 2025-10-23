import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';

export interface ColumnDef<T> {
  id: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => React.ReactNode;
  getValue?: (row: T) => any;
}

interface EnhancedTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  getRowKey: (row: T) => string | number;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export function EnhancedTable<T>({
  columns,
  data,
  getRowKey,
  onRowClick,
  emptyMessage = 'No data available',
  striped = true,
  hoverable = true,
}: EnhancedTableProps<T>) {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (columnId: string, getValue?: (row: T) => any) => {
    const newOrder = sortField === columnId && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(columnId);
    setSortOrder(newOrder);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    const column = columns.find(col => col.id === sortField);
    if (!column || !column.getValue) return 0;

    const aVal = column.getValue(a);
    const bVal = column.getValue(b);

    if (aVal == null) return 1;
    if (bVal == null) return -1;

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }

    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();

    if (aStr < bStr) return sortOrder === 'asc' ? -1 : 1;
    if (aStr > bStr) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: 'primary.main',
              '& .MuiTableCell-root': {
                color: 'white',
                fontWeight: 700,
                fontSize: '0.875rem',
                borderBottom: 'none',
              },
            }}
          >
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sx={{
                  cursor: column.sortable ? 'pointer' : 'default',
                  userSelect: 'none',
                  '&:hover': column.sortable ? { bgcolor: 'primary.dark' } : {},
                  transition: 'background-color 0.2s',
                }}
                onClick={() => column.sortable && handleSort(column.id, column.getValue)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {column.label}
                  {column.sortable && sortField === column.id && (
                    sortOrder === 'asc' ? (
                      <ArrowUpwardIcon fontSize="small" />
                    ) : (
                      <ArrowDownwardIcon fontSize="small" />
                    )
                  )}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center" sx={{ py: 8 }}>
                <Typography color="text.secondary">{emptyMessage}</Typography>
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((row, index) => (
              <TableRow
                key={getRowKey(row)}
                sx={{
                  bgcolor: striped && index % 2 === 0 ? 'background.paper' : 'action.hover',
                  '&:hover': hoverable ? {
                    bgcolor: 'primary.light',
                    transform: 'scale(1.01)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '& .MuiTableCell-root': {
                      color: 'primary.contrastText',
                    },
                  } : {},
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: onRowClick ? 'pointer' : 'default',
                }}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'left'}
                    sx={{ fontWeight: 500, fontSize: '0.9rem' }}
                  >
                    {column.render ? column.render(row) : String((row as any)[column.id] || '-')}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
