import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Factura {
    id: string;
    clave: string;
    consecutivo: string;
    receptor: {
      nombre: string;
      identificacion: string;
    };
    total: number;
    estado: 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA';
    fechaEmision: string;
  }
  
  export interface CrearFacturaDTO {
    clave: string;
    consecutivo: string;
    receptor: any;
    detalleServicio: any[];
    resumenFactura: any;
  }

  
export const invoiceApi = createApi({
    reducerPath: 'invoiceApi',
    tagTypes: ['Invoices', 'Invoice'],
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
      // 📄 Listar facturas
      getInvoices: builder.query<Factura[], void>({
        query: () => '/invoice',
        providesTags: ['Invoices'],
      }),
  
      // 📄 Obtener factura por ID
      getInvoiceById: builder.query<Factura, string>({
        query: (id) => `/invoice/${id}`,
        providesTags: (_r, _e, id) => [{ type: 'Invoice', id }],
      }),
  
      // 🧾 Crear factura
      createInvoice: builder.mutation<void, CrearFacturaDTO>({
        query: (body) => ({
          url: '/facturas',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Invoices'],
      }),
  
      // 📥 Descargar XML
      getInvoiceXml: builder.query<Blob, string>({
        query: (id) => ({
          url: `/invoice/${id}/xml`,
          responseHandler: (response) => response.blob(),
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