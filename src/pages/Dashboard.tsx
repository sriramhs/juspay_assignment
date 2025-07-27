
import { Box, Grid, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import RevenueChart from '../components/RevenueChart';
import TotalSalesChart from '../components/TotalSales';
import { ProjectionsVsActualsChart } from '../components/ProjectsionsBarChart';
import StatsGrid from '../components/StatsGrid';

// Sample data
const revenueData = [
  { month: 'Jan', current: 15, previous: 12 },
  { month: 'Feb', current: 18, previous: 15 },
  { month: 'Mar', current: 22, previous: 18 },
  { month: 'Apr', current: 20, previous: 22 },
  { month: 'May', current: 25, previous: 24 },
  { month: 'Jun', current: 28, previous: 26 }
];

const projectionData = [
  { month: 'Jan', value: 15 },
  { month: 'Feb', value: 18 },
  { month: 'Mar', value: 22 },
  { month: 'Apr', value: 20 },
  { month: 'May', value: 25 },
  { month: 'Jun', value: 28 }
];

const salesData = [
  { name: 'Direct', value: 68.5, color: '#1f2937' },
  { name: 'Affiliate', value: 20, color: '#6366f1' },
  { name: 'Sponsored', value: 8, color: '#8b5cf6' },
  { name: 'E-mail', value: 3.5, color: '#06b6d4' }
];

const topProducts = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$5,087.36' }
];

const locationData = [
  { city: 'New York', percentage: '72K' },
  { city: 'San Francisco', percentage: '39K' },
  { city: 'Sydney', percentage: '25K' },
  { city: 'Singapore', percentage: '61K' }
];



const DashBoard = () => {
  return (
    <Box sx={{
      p: 3,
      maxWidth: { xs: '100%', md: 1228 },
      mx: 'auto',
      minHeight: '100vh'
    }}>
      <Typography  sx={{ 
        mb: 3, 
        fontWeight: 600, 
        fontSize:"14px",
      }}>
        eCommerce
      </Typography>

      <Grid container spacing={2} columns={4}>
      {/* Row 1 */}
      <Grid item xs={2}>
         <StatsGrid/>
      </Grid>
      <Grid item xs={2}>
          <ProjectionsVsActualsChart/>
      </Grid>

      {/* Row 2 */}
      <Grid item xs={3}>
     <RevenueChart/>
      </Grid>
      <Grid item xs={1}>
          <Box sx={{ bgcolor: '#ede7f6', p: 2, borderRadius: 1 }}>
          <Typography>Item 5 (1 column)</Typography>
        </Box>
      </Grid>

      {/* Row 3 */}
      <Grid item xs={3}>
        <Box sx={{ bgcolor: '#ede7f6', p: 2, borderRadius: 1 }}>
          <Typography>Item 6 (1 column)</Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
         <TotalSalesChart/>
      </Grid>
    </Grid>
    </Box>
  );
};

export default DashBoard;