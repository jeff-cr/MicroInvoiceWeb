// import { useState } from "react";
// import { DataTable } from "../../components/DataTable";
// import { useInvoice } from "../hooks/useInvoice";
// import { IInvoiceDto } from "../../types/dto/View/IInvoiceDto";
// import mapTo from "../../helpers/mapping/mapper";
// import { IRootDto } from "../../types/dto/GET/IRootDto";
// import { Skeleton } from "@mui/material";

import { useState } from "react";
import { DataTable } from "../../components/DataTable";
import { IInvoiceDto } from "../../types/dto/View/IInvoiceDto";
import { useInvoice } from "../hooks/useInvoice";
import { IconButton, Skeleton, Tooltip } from "@mui/material";
import { IRootDto } from "../../types/dto/GET/IRootDto";
import mapTo from "../../helpers/mapping/mapper";
import CodeIcon from "@mui/icons-material/Code";

// export function InvoiceTable() {
//     const { invoices, isLoading } = useInvoice();
//     // const rows: IInvoiceDto[] = mapTo<IRootDto, IInvoiceDto>(invoices);
//     // const rows: IInvoiceDto[] = mapTo<IRootDto, IInvoiceDto>(invoices).map((item, index) => ({
//     //   id: index + 1, // MUI requiere un id único
//     //   ...item,
//     // }));
//     // const [page, setPage] = useState(0);

//     const [paginationModel, setPaginationModel] = useState({
//       pageNumber:0,
//       pageSize:5
//     })

//     const rows = mockInvoices

//     console.log("invoices ",invoices)

//     if (isLoading) return <Skeleton variant="rectangular" width={"auto"} height={400} />;

//     const columns= [
//       { field: 'documentType', headerName: 'Document Type', width: 150 },
//       { field: 'issueDate', headerName: 'Issue Date', width: 180 },
//       { field: 'currency', headerName: 'Currency', width: 90 },
//       { field: 'exchangeRate', headerName: 'Exchange Rate', width: 120 },
//       { field: 'conditionOfSale', headerName: 'Condition Of Sale', width: 150 },
//       { field: 'referenceDocument', headerName: 'Reference Document', width: 150 },
//       { field: 'notesJson', headerName: 'Notes Json', flex:1 },
//     ]

//     return (
//       <DataTable<IInvoiceDto>
//       // rows={rows}
//       rows={rows.map((item, index) => ({ id: index, ...item }))}
//       columns={columns}
//       pageNumber={paginationModel.pageNumber}
//       pageSize={paginationModel.pageSize}

//       />
//     )
//   }

const mockInvoices: IInvoiceDto[] = [
  {
    rootId: 1,
    documentType: "INVOICE",
    issueDate: "2026-01-01T10:00:00",
    currency: "USD",
    exchangeRate: 1,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-INV-001",
    notesJson: '{"note":"Pago inmediato"}',
  },
  {
    rootId: 2,
    documentType: "INVOICE",
    issueDate: "2026-01-02T11:30:00",
    currency: "CRC",
    exchangeRate: 540,
    conditionOfSale: "CREDITO",
    referenceDocument: "REF-INV-002",
    notesJson: '{"reason":"Pago a 30 días"}',
  },
  {
    rootId: 3,
    documentType: "CREDIT_NOTE",
    issueDate: "2026-01-03T09:15:00",
    currency: "USD",
    exchangeRate: 1,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-CN-003",
    notesJson: '{"note":"Devolución total"}',
  },
  {
    rootId: 4,
    documentType: "INVOICE",
    issueDate: "2026-01-04T14:45:00",
    currency: "EUR",
    exchangeRate: 0.92,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-INV-004",
    notesJson: '{"reason":"Cliente frecuente"}',
  },
  {
    rootId: 5,
    documentType: "INVOICE",
    issueDate: "2026-01-05T16:20:00",
    currency: "USD",
    exchangeRate: 1,
    conditionOfSale: "CREDITO",
    referenceDocument: "REF-INV-005",
    notesJson: '{"note":"Pago en dos cuotas"}',
  },
  {
    rootId: 6,
    documentType: "DEBIT_NOTE",
    issueDate: "2026-01-06T08:10:00",
    currency: "CRC",
    exchangeRate: 540,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-DN-006",
    notesJson: '{"reason":"Ajuste por diferencia de precio"}',
  },
  {
    rootId: 7,
    documentType: "INVOICE",
    issueDate: "2026-01-07T13:00:00",
    currency: "USD",
    exchangeRate: 1,
    conditionOfSale: "CREDITO",
    referenceDocument: "REF-INV-007",
    notesJson: '{"note":"Pago a 15 días"}',
  },
  {
    rootId: 8,
    documentType: "INVOICE",
    issueDate: "2026-01-08T17:40:00",
    currency: "MXN",
    exchangeRate: 17.2,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-INV-008",
    notesJson: '{"reason":"Promoción especial"}',
  },
  {
    rootId: 9,
    documentType: "CREDIT_NOTE",
    issueDate: "2026-01-09T12:25:00",
    currency: "USD",
    exchangeRate: 1,
    conditionOfSale: "CONTADO",
    referenceDocument: "REF-CN-009",
    notesJson: '{"note":"Devolución parcial"}',
  },
  {
    rootId: 10,
    documentType: "INVOICE",
    issueDate: "2026-01-10T09:50:00",
    currency: "CRC",
    exchangeRate: 540,
    conditionOfSale: "CREDITO",
    referenceDocument: "REF-INV-010",
    notesJson: '{"reason":"Pago contra entrega"}',
  },
];

import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";

export function InvoiceTable() {
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = useState({
    pageNumber: 0,
    pageSize: 5,
  });

  // const totalRows = mockInvoices.length;


  // const rows = mockInvoices
  //   .slice(
  //     paginationModel.pageNumber * paginationModel.pageSize,
  //     paginationModel.pageNumber * paginationModel.pageSize +
  //       paginationModel.pageSize
  //   )
  //   .map((item) => ({
  //     // id: item.rootId,
  //     ...item,
  //   }));
  const { response, isLoading } = useInvoice({
  pageNumber: paginationModel.pageNumber + 1,  
  pageSize: paginationModel.pageSize,
});
  if (!response?.items) return;

const rows: IInvoiceDto[] = response?.items
  ? mapTo<IRootDto, IInvoiceDto>(response.items)
  : [];



  const columns = [
    { field: "documentType", headerName: "Document Type", width: 150 },
    { field: "issueDate", headerName: "Issue Date", width: 180 },
    { field: "currency", headerName: "Currency", width: 90 },
    { field: "exchangeRate", headerName: "Exchange Rate", width: 120 },
    { field: "conditionOfSale", headerName: "Condition Of Sale", width: 150 },
    {
      field: "referenceDocument",
      headerName: "Reference Document",
      width: 150,
    },
    { field: "notesJson", headerName: "Notes Json", flex: 1 },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      sortable: false,
      filterable: false,

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderCell: (params: any) => (
        <>
          <Tooltip title="Detail">
            <IconButton
              color="inherit"
              onClick={() => {
                console.log("params ", params.row);
                navigate(`/invoices/${params.row.rootId}`);
              }}
            >
              <ArticleIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="XML">
            <IconButton
              color="inherit"
              onClick={() => {
                navigate(`/invoices/${params.row.rootId}/xml`);
              }}
            >
              <CodeIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  if (isLoading)
    return <Skeleton variant="rectangular" width={"auto"} height={400} />;
  return (
    <DataTable<IInvoiceDto>
      rows={rows}
      rowId={(row) => row.rootId}
      columns={columns}
      pageNumber={paginationModel.pageNumber}
      pageSize={paginationModel.pageSize}
      totalRows={response.totalCount}
      onPaginationChange={(page, pageSize) =>
        setPaginationModel({ pageNumber: page, pageSize })
      }
    />
  );
}
