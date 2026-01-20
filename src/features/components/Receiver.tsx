import { DataInfo } from "../../components/DataInfo";
import { IReceiverDto } from "../../types/dto/GET/IReceiverDto";

interface ReceiverProps {
  data: IReceiverDto;
}

export const Receiver = ({data}:ReceiverProps) => {
 return <DataInfo data={data}/>
}
