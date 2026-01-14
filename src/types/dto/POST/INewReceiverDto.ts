import type { INewAddressDto } from "./INewAddressDto";

export interface INewReceiverDto {
    Name: string;
    CommercialName: string;
    IdType: string;
    Id: string;
    Email: string;
    Address: INewAddressDto;
  }
  