import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from 'recharts';
import { Box, Typography, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const data = [
  { name: 'Jan', current: 12, previous: 10 },
  { name: 'Feb', current: 9, previous: 17 },
  { name: 'Mar', current: 10, previous: 15 },
  { name: 'Apr', current: 15, previous: 12 },
  { name: 'May', current: 19, previous: 15 },
  { name: 'Jun', current: 20, previous: 23 },
];

export default function RevenueChart() {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 3,
        bgcolor: '#F9FAFB',
        width: '100%',
        // maxWidth: 600,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        Revenue
      </Typography>

      <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CircleIcon sx={{ fontSize: 8, color: 'black' }} />
          <Typography variant="body2">
            Current Week <b>$58,211</b>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <CircleIcon sx={{ fontSize: 8, color: '#B1D1F5' }} />
          <Typography variant="body2">
            Previous Week <b>$68,768</b>
          </Typography>
        </Stack>
      </Stack>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F2F2F2" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#A0AEC0"
            fontSize={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#A0AEC0"
            fontSize={12}
            domain={[0, 30]}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip formatter={(value) => `${value}M`} />
          <Area
            type="monotone"
            dataKey="previous"
            stroke="#B1D1F5"
            fill="#B1D1F5"
            fillOpacity={0.2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#B1D1F5"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            strokeDasharray={undefined}
            data={data.slice(0, 4)} // Only first 4 points solid
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
