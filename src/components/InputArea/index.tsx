import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const handleAddEven = () => {
    let newItem: Item = {
      date: new Date(2022, 2, 27),
      category: "salary",
      title: "extrazinho",
      value: 1250.28,
    };
      onAdd(newItem)
  };
  return (
    <C.Container>
      <button onClick={handleAddEven}>Adicionar</button>
    </C.Container>
  );
};

export default InputArea;
