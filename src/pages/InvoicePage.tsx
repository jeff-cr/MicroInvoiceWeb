import { Typography } from "@mui/material";
import { InvoiceTable } from "../features/components/InvoiceTable";

export default function InvoicePage() {
  return (
    <div style={{padding:"50px", }}>
     <div style={{marginBottom:"30px"}}>
       <Typography variant="h4" sx={{ minWidth: 160 }}>
        Invoices
      </Typography>
     </div>
      <InvoiceTable />
    </div>
  );
}
