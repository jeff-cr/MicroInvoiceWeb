import type { ITaxisDto } from "./ITaxisDto";

export interface IItemDto {
    ItemId: number;
    LineNumber: number;
    Description: string;
    UnitCode: string;
    Quantity: number;
    UnitPrice: number;
    TotalLineAmount: number;
    Taxes: ITaxisDto[];
    DiscountAmount: number;
    ProductCode: string;
  }
  