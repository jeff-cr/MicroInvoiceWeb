import { useGetInvoiceXmlQuery } from "../../services/invoiceApi";

export function useInvoiceXml(id:number) {
  const query = useGetInvoiceXmlQuery(id);
  return {
    invoiceXml: query.data || null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}