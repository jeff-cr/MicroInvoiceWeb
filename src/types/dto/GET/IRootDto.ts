import type { IIssuerDto } from "./IIssuerDto";
import type { IItemDto } from "./IItemDto";
import type { ILegalMonetaryTotalDto } from "./ILegalMonetaryTotalDto";
import type { IOriginSystemDto } from "./IOriginSystemDto";
import type { IPaymentMeansDto } from "./IPaymentMeansDto";
import type { IReceiverDto } from "./IReceiverDto";
import type { ITaxTotalDto } from "./ITaxTotalDto";

export interface IRootDto {
    rootId: number;
    documentType: string;
    issueDate: string; 
    currency: string;
    exchangeRate: number;
    conditionOfSale: string;
    referenceDocument: string;
    notesJson: string;
  
    issuer: IIssuerDto;
    receiver: IReceiverDto;
    legalMonetaryTotal: ILegalMonetaryTotalDto;
    paymentMeans: IPaymentMeansDto;
    originSystem: IOriginSystemDto;
  
    items: IItemDto[];
    taxTotals: ITaxTotalDto[];
  }
  