import { useState } from "react";
import { IItemDto } from "../../types/dto/GET/IItemDto";
import { DataTable } from "../../components/DataTable";

interface ITemProps {
  data: IItemDto[];
}

export const Items = ({ data }: ITemProps) => {
  console.log("items ", data);
  const [paginationModel, setPaginationModel] = useState({
    pageNumber: 0,
    pageSize: 5,
  });

  const totalRows = 3;

  const rows = data;

  const columns = [
    { field: "itemId", headerName: "Item Id", width: 90 },
    { field: "unitCode", headerName: "Code", width: 80 },
    { field: "description", headerName: "Description", flex:1 },
    { field: "discountAmount", headerName: "Disccount", width: 180 },
    { field: "lineNumber", headerName: "Line Number", width: 120 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    { field: "totalLineAmount", headerName: "Total", width: 150 },

    {
      field: "unitPrice",
      headerName: "Unit Price",
      width: 80,
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <DataTable<IItemDto>
      rows={rows}
      rowId={(row) => row.itemId}
      columns={columns}
      pageNumber={paginationModel.pageNumber}
      pageSize={paginationModel.pageSize}
      totalRows={totalRows}
      onPaginationChange={(page, pageSize) =>
        setPaginationModel({ pageNumber: page, pageSize })
      }
    />
  );
};
