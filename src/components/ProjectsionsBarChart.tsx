import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from 'recharts'

type DataPoint = {
  month: string
  actual: number
  projection: number
}

const data: DataPoint[] = [
  { month: 'Jan', actual: 16, projection: 4 },
  { month: 'Feb', actual: 20, projection: 5 },
  { month: 'Mar', actual: 18, projection: 3 },
  { month: 'Apr', actual: 22, projection: 6 },
  { month: 'May', actual: 14, projection: 3 },
  { month: 'Jun', actual: 20, projection: 5 },
]

export const ProjectionsVsActualsChart: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.custom.secondaryBg,
        borderRadius: 2,
        p: 3,
        height: 300,          
        minWidth: 483,        
        overflow: 'hidden',  
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Projections vs Actuals
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 20,      // ↑ added bottom margin
          }}
        >
          <CartesianGrid stroke={theme.palette.grey[200]} vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9fa0a3', fontSize: 14 }}
            dy={4}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9fa0a3', fontSize: 14 }}
            ticks={[0, 10, 20, 30]} 
            dx={-4}
            tickFormatter={(v) => `${v}M`}
          />

          <Bar dataKey="actual" stackId="a" radius={[0, 0, 0, 0]} barSize={20}>
            {data.map((_, idx) => (
              <Cell key={`actual-${idx}`} fill={'#A8C5DA'} />
            ))}
          </Bar>

          <Bar dataKey="projection" stackId="a" radius={[6, 6, 0, 0]} barSize={20}>
            {data.map((_, idx) => (
              <Cell key={`proj-${idx}`} fill={'#cfdfeb'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
