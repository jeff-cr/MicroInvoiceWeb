import { useNavigate, useParams } from "react-router-dom";
import { DataXml } from "../../components/DataXml";
import { useInvoiceXml } from "../hooks/useInvoiceXml";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const InvoiceXml = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, invoiceXml } = useInvoiceXml(Number(id));

  if (isLoading) return <div>Cargando...</div>;
  if (!invoiceXml) return <div>No se encontró XML</div>;

  return (
     <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "30px", display:"flex", alignItems:"center",justifyContent:"space-between" }}>
        <IconButton
          color="primary"
          onClick={() => {
            navigate(`/invoices`);
          }}
        >
          <ArrowBackIosIcon /> Back
        </IconButton>
        <Typography variant="h5" sx={{ minWidth: 160, textAlign: "end" }}>
          XML Document {id}
        </Typography>
      </div>
      <DataXml xmlText={invoiceXml} />;
    </div>
  )
};
