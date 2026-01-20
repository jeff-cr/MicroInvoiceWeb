import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRootDto } from "../types/dto/GET/IRootDto";
import { INewRootDto } from "../types/dto/POST/INewRootDto";

// export interface Factura {
//   id: string;
//   clave: string;
//   consecutivo: string;
//   receptor: {
//     nombre: string;
//     identificacion: string;
//   };
//   total: number;
//   estado: "PENDIENTE" | "ACEPTADA" | "RECHAZADA";
//   fechaEmision: string;
// }

// export interface CrearFacturaDTO {
//   clave: string;
//   consecutivo: string;
//   receptor: any;
//   detalleServicio: any[];
//   resumenFactura: any;
// }

// const apiUrl = import.meta.env.development.VITE_API_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  tagTypes: ["Invoices", "Invoice"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getInvoices: builder.query<IRootDto[], void>({
      query: () => "/document",
      providesTags: ["Invoices"],
    }),

    getInvoiceById: builder.query<IRootDto, number>({
      query: (id: number) => `/document/${id}`,
      providesTags: (_r, _e, id) => [{ type: "Invoice", id }],
    }),

    createInvoice: builder.mutation<void, INewRootDto>({
      query: (body) => ({
        url: "/document",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Invoices"],
    }),

    getInvoiceXml: builder.query<string, number>({
      query: (id) => ({
        url: `/document/${id}/xml`,
        // responseHandler: (response) => response.blob(),
        responseHandler: async (response) => {
          const text = await response.text(); // convertir Blob a string
          return text; // ahora el payload es string
        },
      }),
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetInvoiceByIdQuery,
  useCreateInvoiceMutation,
  useGetInvoiceXmlQuery,
} = invoiceApi;
