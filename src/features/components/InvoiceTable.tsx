import { useInvoice } from "../hooks/useInvoice";

export function InvoiceTable() {
    const { invoices, isLoading } = useInvoice();
  
    if (isLoading) return <p>Cargando...</p>;
  
    return (
      <table>
        <tbody>
          {invoices.map((f) => (
            <tr key={f.id}>
              <td>{f.clave}</td>
              <td>{f.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }