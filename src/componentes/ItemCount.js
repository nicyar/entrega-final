import React, { useState } from 'react'
//import arrayProductos from "../arrayProductos"
/* y que con un evento onClick en ItemCount ejecutes esa funcion de ItemDetail y*/

const ItemCount = ({ onAdd, amount }) => {
    const [counter, setCounter] = useState(0);

    function incrementCounter(/* {onAdd} de itemCount */) {
        if (counter < amount) {
            setCounter(counter + 1);
        }
    }
    function decrementCounter() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div>
                <button type="button" className='btn btn-outline-secondary' onClick={decrementCounter}>-</button>
                <span className='px'>{counter}</span>
                <button type="button" className='btn btn-outline-secondary' onClick={incrementCounter}>+</button>
            </div>
            <button onClick={() => onAdd(counter)} type="button" className='btn btn-outline-secondary'>Comprar</button>

        </>
    )
}

export default ItemCount

