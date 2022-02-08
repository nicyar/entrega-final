import React, { useState } from 'react'

const ItemCount = ({ onAdd, amount }) => {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
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

