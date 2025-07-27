import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const topProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$5,087.36" },
];

const TopSellingProducts = () => {
  return (
    <Box
      sx={{
        flex: { xs: "1 1 100%", lg: "1 1 100%" },
        minWidth: { xs: "100%", lg: "662px",xl:"840px" },
        backgroundColor: (theme)=>theme.palette.custom.secondaryBg,
        borderRadius:"8px"
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Top Selling Products
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Box
            component="table"
            sx={{ width: "100%", borderCollapse: "collapse" }}
          >
            <Box component="thead">
              <Box component="tr">
                <Box
                  component="th"
                  sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#64748b",
                    fontSize: "0.75rem",
                    pb: 1.5,
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Name
                </Box>
                <Box
                  component="th"
                  sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#64748b",
                    fontSize: "0.75rem",
                    pb: 1.5,
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Price
                </Box>
                <Box
                  component="th"
                  sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#64748b",
                    fontSize: "0.75rem",
                    pb: 1.5,
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Quantity
                </Box>
                <Box
                  component="th"
                  sx={{
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#64748b",
                    fontSize: "0.75rem",
                    pb: 1.5,
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Amount
                </Box>
              </Box>
            </Box>
            <Box component="tbody">
              {topProducts.map((product, index) => (
                <Box component="tr" key={index}>
                  <Box
                    component="td"
                    sx={{
                      fontSize: "0.75rem",
                      py: 1.5,
                      borderBottom:
                        index < topProducts.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    {product.name}
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      fontSize: "0.75rem",
                      py: 1.5,
                      borderBottom:
                        index < topProducts.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    {product.price}
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      fontSize: "0.75rem",
                      py: 1.5,
                      borderBottom:
                        index < topProducts.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    {product.quantity}
                  </Box>
                  <Box
                    component="td"
                    sx={{
                      fontSize: "0.75rem",
                      py: 1.5,
                      fontWeight: 400,
                      borderBottom:
                        index < topProducts.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    {product.amount}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSellingProducts;
