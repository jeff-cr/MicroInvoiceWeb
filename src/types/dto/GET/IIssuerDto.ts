import type { IAddressDto } from "./IAddressDto";
import type { ISoftwareSupplierDto } from "./ISoftwareSupplierDto";

export interface IIssuerDto {
  issuerId: number;
  name: string;
  commercialName: string;
  idType: string;
  id: string;
  branchId: string;
  email: string;
  address: IAddressDto;
  softwareSupplier: ISoftwareSupplierDto;
  }
  