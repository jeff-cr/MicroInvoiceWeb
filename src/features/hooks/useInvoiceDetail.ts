import { useGetInvoiceByIdQuery } from "../../services/invoiceApi";

export function useInvoiceDetail(id:number) {
  const query = useGetInvoiceByIdQuery(id);
  return {
    invoice: query.data || null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}