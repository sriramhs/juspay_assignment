import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import upWhite from "../assets/dashboard/ArrowRise.svg";
import upDark from "../assets/dashboard/ArrowRiseDark.svg";
import downWhite from "../assets/dashboard/ArrowDown.svg";
import downDark from "../assets/dashboard/ArrowDownDark.svg";

const StatsGrid = () => {
  const mode = useSelector((state: RootState) => state.ui.mode);
  const MetricCard = ({ title, value, change, isPositive, index }: any) => (
    <Box
      sx={{
        p: 2.5,
        pt: 5,
        borderRadius: 2,
        height: "100%",
        backgroundColor:
          index === 1
            ? "#E3F5FF"
            : index === 4
            ? "#E5ECF6"
            : (theme) => theme.palette.custom.secondaryBg,
        color: index === 1 || index === 4 ? "black" : "",
        // minWidth:1
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
      {
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24", md: "24px" },
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {value}
          </Typography>
          <Box sx={{display:"flex",aligntItems:"center",alignText:"center"}}>
            {" "}
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "12px" },
                fontWeight: 400,
                mb: 0.5,
              }}
            >
              {change}
            </Typography>
            <Box
              component="img"
              src={
                index === 1 || index === 4
                  ? upWhite
                  : mode !== "dark"
                  ? isPositive
                    ? upWhite
                    : downWhite
                  : isPositive
                  ? upDark
                  : downDark
              }
              alt="Collapse"
            />
          </Box>
        </Box>
      }
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        width: {lg:"28vw",xl:"32vw"},
        height: 300,
      }}
    >
      <Box sx={{ width: { xs: "47%" } }}>
        <MetricCard
          title="Customers"
          value="3,781"
          change="+11.01%"
          isPositive
          index={1}
        />
      </Box>
      <Box sx={{ width: { xs: "47%" } }}>
        <MetricCard
          title="Orders"
          value="1,219"
          change="-0.03%"
          isPositive={false}
          index={2}
        />
      </Box>
      <Box sx={{ width: { xs: "47%" } }}>
        <MetricCard
          title="Revenue"
          value="$695"
          change="+15.03%"
          isPositive
          index={3}
        />
      </Box>
      <Box sx={{ width: { xs: "47%" } }}>
        <MetricCard
          title="Growth"
          value="30.1%"
          change="+6.08%"
          isPositive
          index={4}
        />
      </Box>
    </Box>
  );
};

export default StatsGrid;
