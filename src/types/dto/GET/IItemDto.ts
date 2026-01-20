import type { ITaxisDto } from "./ITaxisDto";

export interface IItemDto {
  itemId: number;
  lineNumber: number;
  description: string;
  unitCode: string;
  quantity: number;
  unitPrice: number;
  totalLineAmount: number;
  taxes: ITaxisDto[];
  discountAmount: number;
  productCode: string;
  }
  