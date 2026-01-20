import type { INewAddressDto } from "./INewAddressDto";

export interface INewReceiverDto {
  name: string;
  commercialName: string;
  idType: string;
  id: string;
  email: string;
  address: INewAddressDto;
  }
  