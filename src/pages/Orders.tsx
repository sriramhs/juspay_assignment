// OrderPage.tsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  Typography,
  Pagination,
  Checkbox,
  InputBase,
  styled,
  tableCellClasses,
  Button,
} from "@mui/material";
import { useOrderTable } from "../utils/orders";
import {
  containerSx,
  headerSx,
  searchContainer,
  searchIcon,
  searchInput,
  statusSx,
  tableContainerSx,
  titleSx,
  toolbarSx,
} from "../styles/Orders";
import Search from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import add from "../assets/ordersicons/add.svg";
import addDark from "../assets/ordersicons/addDark.svg";
import filter from "../assets/ordersicons/filter.svg";
import filterDark from "../assets/ordersicons/filterDark.svg";
import sort from "../assets/ordersicons/sort.svg";
import sortDark from "../assets/ordersicons/sortDark.svg";
import calendar from "../assets/ordersicons/calendar.svg";
import calendarDark from "../assets/ordersicons/calendarDark.svg";
const OrderPage: React.FC = () => {
  const orders: any[] = [
    {
      id: "#CMP801",
      user: "Natall Craig",
      avatar: "/avatar1.png",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "inProgress",
    },
    {
      id: "#CMP802",
      user: "Kate Morrison",
      avatar: "/avatar2.png",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "complete",
    },
    {
      id: "#CMP803",
      user: "Drew Cano",
      avatar: "/avatar3.png",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "pending",
    },
    {
      id: "#CMP804",
      user: "Orlando Diggs",
      avatar: "/avatar4.png",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "approved",
    },
    {
      id: "#CMP805",
      user: "Andi Lane",
      avatar: "/avatar5.png",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "rejected",
    },
  ];
  const {
    page,
    setPage,
    filterText,
    setFilterText,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
    paginatedData,
    totalRows,
    selectedRows,
    setSelectedRows,
  } = useOrderTable(orders);

  const handleSort = (property: string) => {
    const isAsc = sortBy === property && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortBy(property);
  };

  const handleSelect = (id: string) => {
    selectedRows?.includes(id)
      ? setSelectedRows((prev) => prev?.filter((x) => x !== id))
      : setSelectedRows((prev) => [...prev, id]);
  };
  const mode = useSelector((state: RootState) => state.ui.mode);
  const [HoverId, setHoverId] = useState<any>(null);

  return (
    <Box sx={containerSx}>
      {/* Main Heading */}
      <Box sx={headerSx}>
        <Typography sx={titleSx}>Order List</Typography>
      </Box>

      {/* Toolbar with actions and search */}
      <Box sx={toolbarSx}>
        <Box>
          <IconButton size="small">
            {" "}
            <Box
              component="img"
              src={mode === "dark" ? addDark : add}
              alt="Collapse"
            />
          </IconButton>
          <IconButton size="small" onClick={() => handleSort("id")}>
            {" "}
            <Box
              component="img"
              src={mode === "dark" ? filterDark : filter}
              alt="Collapse"
            />
          </IconButton>
          <IconButton size="small" onClick={() => handleSort("project")}>
            {" "}
            <Box
              component="img"
              src={mode === "dark" ? sortDark : sort}
              alt="Collapse"
            />
          </IconButton>
        </Box>

        <Box sx={searchContainer}>
          <Search sx={searchIcon} />
          <InputBase
            placeholder="Search"
            value={filterText}
            onChange={(e: any) => setFilterText(e.target.value)}
            sx={searchInput}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Box>

      {/* Table */}
      <TableContainer sx={tableContainerSx}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Checkbox checked={false} disabled size="small" />
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                {/* <TableSortLabel
                  active={sortBy === "id"}
                  direction={sortBy === "id" ? sortOrder : "asc"}
                  onClick={() => handleSort("id")}
                > */}
                Order ID
                {/* </TableSortLabel> */}
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                User
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                {/* <TableSortLabel
                  active={sortBy === "project"}
                  direction={sortBy === "project" ? sortOrder : "asc"}
                  onClick={() => handleSort("project")}
                > */}
                Project
                {/* </TableSortLabel> */}
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                Address
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                Date
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#9e9e9e", fontSize: "12px" }}>
                Status
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row: any, i: number) => (
              <TableRow key={i} hover  onMouseOver={() => {
                    setHoverId(row.id);
                  }}>
                <StyledTableCell>
                  <Checkbox
                    checked={selectedRows?.includes(row?.id)}
                    onClick={() => {
                      handleSelect(row?.id);
                    }}
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.user}</StyledTableCell>
                <StyledTableCell>{row.project}</StyledTableCell>
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={mode === "dark" ? calendarDark : calendar}
                    alt="Collapse"
                  />
                  {row.date}
                </StyledTableCell>
                <StyledTableCell sx={statusSx[row.status]}>
                  <FiberManualRecordIcon sx={{ fontSize: 8, mr: 1 }} />
                  {row.status}
                </StyledTableCell>
                <StyledTableCell
                 sx={{}}
                >
                 
                    <Button>
                     {HoverId === row.id && (  <Box
                        component="img"
                        src={mode === "dark" ? calendarDark : calendar}
                        alt="Collapse"
                      />)}
                    </Button>
                  
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", flexDirection: "row-reverse", mt: 2 }}>
        {" "}
        <Pagination
          count={totalRows / 10}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(_e, newPage) => setPage(newPage)}
        />
      </Box>
    </Box>
  );
};

export default OrderPage;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    padding: "0 15px",
    height: "40px",
    fontWeight: 400,
    color: "#9e9e9e",
    fontSize: "12px",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "0 15px",
    height: "40px",
    borderBottom: "1px solid",
    borderColor: "#E5E7EB",
    fontSize: "12px",
    fontWeight: 400,
  },
}));
