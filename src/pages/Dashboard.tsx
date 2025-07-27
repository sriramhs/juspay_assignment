
import { Box, Grid, Typography } from '@mui/material';
import RevenueChart from '../components/RevenueChart';
import TotalSalesChart from '../components/TotalSales';
import { ProjectionsVsActualsChart } from '../components/ProjectsionsBarChart';
import StatsGrid from '../components/StatsGrid';
import TopSellingProducts from '../components/TopSellingProducts';
import RevenueByLocation from '../components/RevenueByLocation';

// Sample data
{/* @ts-ignore */}
const revenueData = [
  { month: 'Jan', current: 15, previous: 12 },
  { month: 'Feb', current: 18, previous: 15 },
  { month: 'Mar', current: 22, previous: 18 },
  { month: 'Apr', current: 20, previous: 22 },
  { month: 'May', current: 25, previous: 24 },
  { month: 'Jun', current: 28, previous: 26 }
];
{/* @ts-ignore */}
const projectionData = [
  { month: 'Jan', value: 15 },
  { month: 'Feb', value: 18 },
  { month: 'Mar', value: 22 },
  { month: 'Apr', value: 20 },
  { month: 'May', value: 25 },
  { month: 'Jun', value: 28 }
];
{/* @ts-ignore */}
const salesData = [
  { name: 'Direct', value: 68.5, color: '#1f2937' },
  { name: 'Affiliate', value: 20, color: '#6366f1' },
  { name: 'Sponsored', value: 8, color: '#8b5cf6' },
  { name: 'E-mail', value: 3.5, color: '#06b6d4' }
];

{/* @ts-ignore */}
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
      maxWidth: { xs: '100vw', md: 1228 },
      mx: 'auto',
      minHeight: '100vh',
      ml:{xs:5,md:10,lg:'auto',xl:'auto'}
    }}>
      <Typography  sx={{ 
        mb: 3, 
        fontWeight: 600, 
        fontSize:"14px",
      }}>
        eCommerce
      </Typography>

      <Grid container spacing={3} columns={4} >
      {/* @ts-ignore */}
      <Grid item xs={2}>
         <StatsGrid/>
      </Grid>
      {/* @ts-ignore */}
      <Grid item xs={2}>
          <ProjectionsVsActualsChart/>
      </Grid>

      {/* Row 2 */}
      {/* @ts-ignore */}
      <Grid item xs={3}>
     <RevenueChart/>
      </Grid>
      {/* @ts-ignore */}
      <Grid item xs={1}>
          <RevenueByLocation/>
      </Grid>

      {/* Row 3 */}
      {/* @ts-ignore */}
      <Grid item xs={3}>
        
        <TopSellingProducts/>
      </Grid>
      {/* @ts-ignore */}
      <Grid item xs={1}>
         <TotalSalesChart/>
      </Grid>
    </Grid>
    </Box>
  );
};

export default DashBoard;