import React from 'react';
import { Card, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Data for the chart
const data = [
  { name: 'Direct', value: 300.56, color: '#070707' },
  { name: 'Affiliate', value: 135.18, color: '#90EE90' },
  { name: 'Sponsored', value: 154.02, color: '#7B68EE' },
  { name: 'E-mail', value: 48.96, color: '#ADD8E6' },
];

// Chart radii
const outerRadius = 70;
const innerRadius = 50;
{/* @ts-ignore */}
const strokeWidth = outerRadius - innerRadius;

// SX styles
const sxStyles = {
  card: {
    width: 200,
    borderRadius: 2,
    p: 2,
    boxShadow: 1,
    bgcolor: 'background.paper',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    mb: 1,
  },
  chartContainer: {
    position: 'relative' as const,
    width: '100%',
    height: 150,
    mb: 2,
  },
  tooltipBox: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgba(0,0,0,0.75)',
    color: '#fff',
    px: 1,
    py: 0.5,
    borderRadius: 1,
    pointerEvents: 'none',
    fontSize: 12,
  },
  legendList: {
    p: 0,
    m: 0,
    listStyle: 'none',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    py: 0.5,
  },
  legendIcon: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    mr: 1,
  },
  legendText: {
    fontSize: 14,
  },
};

const renderTooltipContent = (value: number) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  return (
    <Box sx={sxStyles.tooltipBox}>
      {`${((value / total) * 100).toFixed(1)}%`}
    </Box>
  );
};

const TotalSalesChart: React.FC = () => (
  <Card sx={sxStyles.card}>
    <Typography sx={sxStyles.title}>Total Sales</Typography>
    <Box sx={sxStyles.chartContainer}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            paddingAngle={2} // Adds some space between segments
            dataKey="value"
            cornerRadius={5} // <<<--- This is the key for rounded ends
            // shapeRendering={}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ payload }) =>
              payload && payload[0]
                ? renderTooltipContent(payload[0].value as number)
                : null
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
    <List sx={sxStyles.legendList}>
      {data.map((entry) => (
        <ListItem key={entry.name} disablePadding sx={sxStyles.legendItem}>
          <Box sx={{ ...sxStyles.legendIcon, bgcolor: entry.color }} />
          <ListItemText
            primary={entry.name}
            secondary={`$${entry.value.toFixed(2)}`}
            primaryTypographyProps={{ sx: sxStyles.legendText }}
            secondaryTypographyProps={{ sx: sxStyles.legendText }}
          />
        </ListItem>
      ))}
    </List>
  </Card>
);

export default TotalSalesChart;