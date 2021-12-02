import React, {useState} from "react";

const ItemCount = ({onAdd, stock, initial}) => {
    const [count, setCount] = useState(1);
    const Incrementar = () => {
        if (count < 5){
            setCount (count + 1);
        }
    }

    const Decrementar = () => {
        if (count > 1){
            setCount (count - 1);
        } 
        else {
            setCount(0); 
            alert('No ingresar numeros negativos')
        }
    }

return (
    <div>
    <button onClick={Decrementar} type='button' className='btn btn-primary btn-lg'> - </button>
    <span>{count}</span>
    <button onClick={Incrementar} type='button' className='btn btn-primary btn-lg'> + </button>

    <div>
     <button onClick={onAdd} type='button' className='btn btn-warning btn-lg'> Add to Cart </button>
    </div>
            <span>Stock: {stock} Initial: {initial}</span>
    </div>
)
}

export default ItemCount