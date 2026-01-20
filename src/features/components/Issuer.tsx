

import { IIssuerDto } from "../../types/dto/GET/IIssuerDto";
import { DataInfo } from "../../components/DataInfo";

interface IssuerProps {
  data: IIssuerDto;
}

export const Issuer = ({ data }: IssuerProps) => {

 return <DataInfo data={data}/>
}