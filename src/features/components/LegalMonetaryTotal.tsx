import { DataInfo } from "../../components/DataInfo";
import { ILegalMonetaryTotalDto } from "../../types/dto/GET/ILegalMonetaryTotalDto";

interface LegalMonetaryTotalProps {
  data: ILegalMonetaryTotalDto;
}

export const LegalMonetaryTotal = ({data}:LegalMonetaryTotalProps) => {
 return <DataInfo data={data}/>
}
