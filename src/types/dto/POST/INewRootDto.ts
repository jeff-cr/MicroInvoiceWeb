import type { INewIssuerDto } from "./INewIssuerDto";
import type { INewItemDto } from "./INewItemDto";
import type { INewLegalMonetaryTotalDto } from "./INewLegalMonetaryTotalDto";
import type { INewOriginSystemDto } from "./INewOriginSystemDto";
import type { INewPaymentMeansDto } from "./INewPaymentMeansDto";
import type { INewReceiverDto } from "./INewReceiverDto";
import type { INewTaxTotalDto } from "./INewTaxTotalDto";

export interface INewRootDto {
    DocumentType: string;
    IssueDate: string; // ISO Date
    Currency: string;
    ExchangeRate: number;
    ConditionOfSale: string;
    ReferenceDocument: string;
    NotesJson: string;
  
    Issuer: INewIssuerDto;
    Receiver: INewReceiverDto;
    LegalMonetaryTotal: INewLegalMonetaryTotalDto;
    PaymentMeans: INewPaymentMeansDto;
    OriginSystem: INewOriginSystemDto;
  
    Items: INewItemDto[];
    TaxTotals: INewTaxTotalDto[];
  }
  