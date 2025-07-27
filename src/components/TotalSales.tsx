import React from "react";
import { Box, Typography, List, ListItem, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

// Data for the chart
const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C", darkColor: "#C6C7F8" },
  { name: "Affiliate", value: 135.18, color: "#95A4FC", darkColor: "#95A4FC" },
  { name: "Sponsored", value: 154.02, color: "#B1E3FF", darkColor: "#B1E3FF" },
  { name: "E-mail", value: 48.96, color: "#BAEDBD", darkColor: "#BAEDBD" },
];

// Chart radii
const outerRadius = 70;
const innerRadius = 45;

// SX styles
const sxStyles = {
  card: {
    width: { lg: 245 },
    borderRadius: 2,
    p: 2,
    backgroundColor: (theme: any) => theme.palette.custom.secondaryBg,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    mb: 1,
  },
  chartContainer: {
    position: "relative" as const,
    width: "100%",
    height: 150,
    mb: 2,
  },
  tooltipBox: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "rgba(0,0,0,0.75)",
    color: "#fff",
    px: 1,
    py: 0.5,
    borderRadius: 1,
    pointerEvents: "none",
    fontSize: 12,
  },
  legendList: {
    p: 0,
    m: 0,
    listStyle: "none",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    py: 0.5,
  },
  legendIcon: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    mr: 1,
  },
  legendText: {
    fontSize: 12,
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

const TotalSalesChart: React.FC = () => {
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.ui.mode);
  return (
    <Box sx={sxStyles.card}>
      <Typography sx={sxStyles.title}>Total Sales</Typography>
      <Box sx={sxStyles.chartContainer}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={-180}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              paddingAngle={-10}
              dataKey="value"
              cornerRadius={100}
              stroke={theme.palette.custom.secondaryBg}
              strokeWidth={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={mode === "dark" ? entry.darkColor : entry.color}
                />
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
            <Box sx={{ ...sxStyles.legendIcon, bgcolor: mode === "dark" ? entry.darkColor : entry.color}} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography variant="body1" sx={sxStyles.legendText}>
                {entry.name}
              </Typography>
              <Typography variant="body1" sx={sxStyles.legendText}>
                {`$${entry.value.toFixed(2)}`}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TotalSalesChart;
