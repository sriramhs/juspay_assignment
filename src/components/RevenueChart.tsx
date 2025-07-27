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
import { Box, Typography, Stack, useTheme, Divider } from '@mui/material';
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
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 3,
       backgroundColor: (theme:any) => theme.palette.custom.secondaryBg,
        width: '100%',
        // maxWidth: 600,
         minWidth: { xs: "100%", lg: "662px" },
         height:"100%"
      }}
    >
    

      <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        Revenue
      </Typography>
      <Divider flexItem orientation="vertical" />
        <Stack direction="row" spacing={1} alignItems="center">
          
          <CircleIcon sx={{ fontSize: 8, color: theme?.palette?.custom?.secondary }} />
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

      <ResponsiveContainer width="100%" height={"90%"}>
        <LineChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid  vertical={false} stroke="#F2F2F2" />
          <XAxis
            dataKey="name"
            axisLine={true}
            tickLine={false}
            stroke="#A0AEC0"
            fontSize={12}
             dy={4}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#A0AEC0"
            fontSize={12}
            domain={[0, 30]}
            tickFormatter={(value) => `${value}M`}
            dx={-2}
          />
          <Tooltip formatter={(value) => `${value}M`} />
          <Area
            type="monotone"
            dataKey="previous"
            stroke="#A8C5DA"
            fill="#A8C5DA"
            fillOpacity={0.2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#A8C5DA"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={theme?.palette?.custom?.secondary}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
            strokeDasharray={undefined}
            data={data.slice(0, 4)} // Only first 4 points solid
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
