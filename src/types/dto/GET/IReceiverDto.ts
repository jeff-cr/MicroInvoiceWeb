import type { IAddressDto } from "./IAddressDto";

export interface IReceiverDto {
  receiverId: number;
  name: string;
  commercialName: string;
  idType: string;
  id: string;
  email: string;
  address: IAddressDto;
  }
  