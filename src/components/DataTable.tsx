import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowIdGetter,
} from "@mui/x-data-grid";

interface DataTableProps<T> {
  rows: T[];
  columns: GridColDef[]; 
  pageSize?: number;
  pageNumber?: number;
  totalRows: number;
  checkboxSelection?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowId: GridRowIdGetter<any>;
}

export const DataTable = <T,>({
  rows,
  columns,
  pageSize = 5,
  pageNumber = 0,
  totalRows,
  checkboxSelection = true,
  onPaginationChange,
  rowId,
}: DataTableProps<T>) => {
  const handlePaginationChange = (model: GridPaginationModel) => {
    if (onPaginationChange) {
      onPaginationChange(model.page, model.pageSize);
    }
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        getRowId={rowId}
        columns={columns}
        paginationMode="server"
        rowCount={totalRows}
        paginationModel={{ page: pageNumber, pageSize: pageSize }}
        onPaginationModelChange={handlePaginationChange}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
