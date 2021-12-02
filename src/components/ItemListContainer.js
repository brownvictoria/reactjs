import React from "react";
import ItemCount from "./ItemCount"
import {ItemList} from "./ItemList"

export const ItemListContainer = (props) =>
{
return (
<div>
<h2>{props.greeting}</h2>
<ItemList product='products'/>
<ItemCount stock='5' initial='1' onAdd='¡Gracias!'/>
</div>
)
};

export default ItemListContainer;




