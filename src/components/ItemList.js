import  Item from "./Item";
import getProducts from "../productos/products.js";
import { useEffect, useState } from "react";

export const ItemList = () => {
  
const [products, setProduct] = useState ([])

useEffect(() =>{
  getProducts().then((products) => {
    setProduct(products);
  })
},[])

return(
  <div>
    <ul>
      {products.map(product =><Item key = {product.nombre} product={product} />)}
    </ul>
  </div>
)
}

export default ItemList