import { Routes, Route } from "react-router-dom";
import InvoicePage from "../pages/InvoicePage";
import { InvoiceDetailPage } from "../pages/InvoiceDetailPage";
import { InvoiceXmlPage } from "../pages/InvoiceXmlPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/invoices" element={<InvoicePage/>} />
      <Route path="/invoices/:id" element={<InvoiceDetailPage />} />
         <Route path="/invoices/:id/xml" element={<InvoiceXmlPage />} />
    </Routes>
  );
}
