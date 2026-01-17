import { useGetInvoicesQuery } from "../../services/invoiceApi";


export function useInvoice() {
  const query = useGetInvoicesQuery();

  return {
    invoices: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}