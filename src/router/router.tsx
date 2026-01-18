import { Routes, Route } from "react-router-dom";
import InvoicePage from "../pages/InvoicePage";
import { InvoiceDetail } from "../pages/InvoiceDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/invoices" element={<InvoicePage/>} />
      <Route path="/invoices/:id" element={<InvoiceDetail />} />
    </Routes>
  );
}
