import { useMemo, useState } from "react";

export function useOrderTable(data: any[]) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows,setSelectedRows]=useState<any[]>([]);

  const filteredData = useMemo(() => {
    return data?.filter((order) =>
      Object?.values(order)
        ?.join(" ")
        ?.toLowerCase()
        ?.includes(filterText.toLowerCase())
    );
  }, [filterText, data]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortBy, sortOrder]);

  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage, sortedData]);

  return {
    page,
    rowsPerPage,
    setPage,
    filterText,
    setFilterText,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
    paginatedData,
    totalRows: filteredData.length,
    selectedRows,
    setSelectedRows
  };
}
