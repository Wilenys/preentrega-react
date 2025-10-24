import { Item } from "../Item/Item"

export const ItemDatail = ({detail}) => {

     return (
     <Item {...detail}>

        <button> Enviar al carrito </button>
        
     </Item>
     );

};