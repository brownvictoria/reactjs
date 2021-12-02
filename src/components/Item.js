import './Item.css';
const Item = ({product}) => {
  return (
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Nombre: {product.nombre}</h5>
    <p class="card-text">Descripción: {product.descripcion}</p>
    <p class="card-text">Precio: {product.precio}</p>
    <p class="card-text">Stock: {product.stock}</p>
    <a href="#" class="btn btn-primary">Añadir al Carrito</a>
  </div>
</div>
  )  
}

export default Item;
