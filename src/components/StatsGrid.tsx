import { Box, Typography } from "@mui/material";

const StatsGrid = () => {
  const MetricCard = ({ title, value, change, isPositive,index }: any) => (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 2,
        height: "100%",
        backgroundColor : index === 1 ? '#E3F5FF': index === 4 ? '#E5ECF6'  : (theme) => theme.palette.custom.secondaryBg ,
        color : index === 1 || index ===4 ? 'black' : ''
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "24px" },
          fontWeight: 600,
          mb: 0.5,
        }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          fontSize: "0.75rem",
          fontWeight: 500,
          color: isPositive ? "#059669" : "#dc2626",
        }}
      >
        {change}
      </Box>
    </Box>
  );

  return (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
  <Box sx={{ width: { xs: '40%' } }}>
    <MetricCard title="Customers" value="3,781" change="+11.01%" isPositive index={1}/>
  </Box>
  <Box sx={{ width: { xs: '40%' } }}>
    <MetricCard title="Orders" value="1,219" change="-0.03%" isPositive={false} index={2}/>
  </Box>
  <Box sx={{ width: { xs: '40%' } }}>
    <MetricCard title="Revenue" value="$695" change="+15.03%" isPositive index={3}/>
  </Box>
  <Box sx={{ width: { xs: '40%' } }}>
    <MetricCard title="Growth" value="30.1%" change="+6.08%" isPositive index={4}/>
  </Box>
</Box>
  );
};

export default StatsGrid;
