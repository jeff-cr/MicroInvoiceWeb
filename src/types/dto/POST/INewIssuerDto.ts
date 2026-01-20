import type { INewAddressDto } from "./INewAddressDto";
import type { INewSoftwareSupplierDto } from "./INewSoftwareSupplierDto";

export interface INewIssuerDto {
  name: string;
  commercialName: string;
  idType: string;
  id: string;
  branchId: string;
  email: string;
  address: INewAddressDto;
  softwareSupplier: INewSoftwareSupplierDto;
}
