import type { INewAddressDto } from "./INewAddressDto";
import type { INewSoftwareSupplierDto } from "./INewSoftwareSupplierDto";

export interface INewIssuerDto {
    Name: string;
    CommercialName: string;
    IdType: string;
    Id: string;
    BranchId: string;
    Email: string;
    Address: INewAddressDto;
    SoftwareSupplier: INewSoftwareSupplierDto;
  }
  