import { useGetInvoicesQuery } from "../../services/invoiceApi";


export function useInvoice() {
  const query = useGetInvoicesQuery();

  // console.log("invoices Data ",query)

  return {
    invoices: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}