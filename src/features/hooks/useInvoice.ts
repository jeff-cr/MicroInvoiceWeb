import { useGetInvoicesQuery } from "../../services/invoiceApi";
import { PaginationParams } from "../../types/dto/Params/PaginationParams";


export function useInvoice(params:PaginationParams) {
  const query = useGetInvoicesQuery(params);

  // console.log("invoices Data ",query)

  return {
    response: query.data || null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}