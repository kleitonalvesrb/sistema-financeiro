import { Item } from "../../types/Item";
import TableItem from "../TableItem";
import * as C from "./styels";

type Props ={
    list: Item[]
}
export const TableArea = ({list}: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TablheHeadColumn width={100}>Data</C.TablheHeadColumn>
          <C.TablheHeadColumn width={130}>Categoria</C.TablheHeadColumn>
          <C.TablheHeadColumn>Título</C.TablheHeadColumn>
          <C.TablheHeadColumn width={150}>Valor</C.TablheHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item,index)=>(
            <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </C.Table>
  );
};

export default TableArea;
