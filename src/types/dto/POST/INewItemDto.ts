import type { INewTaxisDto } from "./INewTaxisDto";

export interface INewItemDto {
    LineNumber: number;
    Description: string;
    UnitCode: string;
    Quantity: number;
    UnitPrice: number;
    TotalLineAmount: number;
    Taxes: INewTaxisDto[];
    DiscountAmount: number;
    ProductCode: string;
  }
  