import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const locationData = [
  { city: "New York", percentage: "72K" },
  { city: "San Francisco", percentage: "39K" },
  { city: "Sydney", percentage: "25K" },
  { city: "Singapore", percentage: "61K" },
];
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Define three marker locations (longitude, latitude)
const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
];

const RevenueByLocation = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: { xs: "1 1 100%", lg: "1 1 calc(33.333% - 12px)" },
        minWidth: { xs: "100%", lg: "250px",xl:"300px" },
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: (theme: any) => theme.palette.custom.secondaryBg,
          // height: { },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Revenue by Location
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: theme.palette.custom.secondaryBg,
            borderRadius: 1,
            mb: 2,
            position: "relative",
          }}
        >
          <ComposableMap projectionConfig={{ scale: 150 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#A8C5DA"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>

            {markers.map(({ name, coordinates }) => (
              // @ts-ignore
              <Marker key={name} coordinates={coordinates}>
                <circle r={6} fill="#F53" stroke="#FFF" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: "system-ui",
                    fill: theme.palette.custom.secondary,
                    fontSize: "12px",
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </Box>
        <Box>
          {locationData.map((location, index) => (
            <Box>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                  fontSize: "12px",
                }}
              >
                <Typography sx={{ fontWeight: 400 }}>
                  {location.city}
                </Typography>
                <Typography sx={{ fontWeight: 400 }}>
                  {location.percentage}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={80}
                sx={{
                  width: "100%",
                  backgroundColor: "#eee",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#A8C5DA",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RevenueByLocation;
