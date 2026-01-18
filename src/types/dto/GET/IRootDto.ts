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
  
    Issuer: IIssuerDto;
    Receiver: IReceiverDto;
    LegalMonetaryTotal: ILegalMonetaryTotalDto;
    PaymentMeans: IPaymentMeansDto;
    OriginSystem: IOriginSystemDto;
  
    Items: IItemDto[];
    TaxTotals: ITaxTotalDto[];
  }
  