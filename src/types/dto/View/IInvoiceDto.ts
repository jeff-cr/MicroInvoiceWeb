export interface IInvoiceDto {
    rootId: number;
    documentType: string;
    issueDate: string; 
    currency: string;
    exchangeRate: number;
    conditionOfSale: string;
    referenceDocument: string;
    notesJson: string;
}