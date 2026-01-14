import type { IAddressDto } from "./IAddressDto";

export interface IReceiverDto {
    ReceiverId: number;
    Name: string;
    CommercialName: string;
    IdType: string;
    Id: string;
    Email: string;
    Address: IAddressDto;
  }
  