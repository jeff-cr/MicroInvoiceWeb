import type { IAddressDto } from "./IAddressDto";
import type { ISoftwareSupplierDto } from "./ISoftwareSupplierDto";

export interface IIssuerDto {
    IssuerId: number;
    Name: string;
    CommercialName: string;
    IdType: string;
    Id: string;
    BranchId: string;
    Email: string;
    Address: IAddressDto;
    SoftwareSupplier: ISoftwareSupplierDto;
  }
  