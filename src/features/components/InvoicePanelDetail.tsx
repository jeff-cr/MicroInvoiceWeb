import TabPanel from "../../components/TabPanel";
import { useInvoiceDetail } from "../hooks/useInvoiceDetail";
import { useNavigate, useParams } from "react-router-dom";
import { Issuer } from "./Issuer";
import { Items } from "./Items";
import { LegalMonetaryTotal } from "./LegalMonetaryTotal";
import { Receiver } from "./Receiver";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const InvoicePanelDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, invoice } = useInvoiceDetail(Number(id));

  // const [data, setData] = useState([{
  //   issuer:invoice.,
  //   items:[],
  //   legalMonetaryTotal:{},
  //   originSystem:{},
  //   paymentMeans:{},
  //   receiver:{},
  //   taxTotals:{}
  // }])

  console.log("invoice ", invoice);
  if (!invoice) return;
  const tabs = [
    {
      label: "Issuer",
      component: <Issuer data={invoice?.issuer} />,
    },
    {
      label: "Items",
      component: <Items data={invoice?.items} />,
    },
    {
      label: "Legal Monetary Total",
      component: <LegalMonetaryTotal data={invoice?.legalMonetaryTotal} />,
    },
    {
      label: "Receiver",
      component: <Receiver data={invoice?.receiver} />,
    },
  ];
  // const tabs = [
  //   // {
  //   //   label: "Issuer",
  //   //   component: <Issuer data={invoice.}/>
  //   // },
  //   {
  //     label: "Items",
  //     component: <Items />
  //   },
  //       {
  //     label: "legal Monetary Total",
  //     component: <LegalMonetaryTotal />
  //   },
  //       {
  //     label: "Receiver",
  //     component: <Receiver />
  //   },
  // ];
  // return <TabPanel tabs={tabs} />
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
          Document {id}
        </Typography>
      </div>
      <TabPanel tabs={tabs} />
    </div>
  );
};
