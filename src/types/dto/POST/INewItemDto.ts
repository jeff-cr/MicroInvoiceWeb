import type { INewTaxisDto } from "./INewTaxisDto";

export interface INewItemDto {
  lineNumber: number;
  description: string;
  unitCode: string;
  quantity: number;
  unitPrice: number;
  totalLineAmount: number;
  taxes: INewTaxisDto[];
  discountAmount: number;
  productCode: string;
}
