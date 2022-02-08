import React, { useEffect, useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

function ItemDetail({ id, img, title, description, price, amount }) {

    const [added, setAdded] = useState()
    const { addItem } = useContext(CartContext)
 

    const onAdd = (counter) => {
        setAdded(true)
        addItem({ id, title, description, amount, price, img }, counter)
    }

    useEffect(() => {
        console.log('agregado', added)
    }, [added])



    return (
        <div>
            <div className='card mb-3 my-3  ' style={{ maxWidth: "540px" }}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={img} className='img-fluid rounded-start' alt="..." />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{description} id:{id}</p>
                            <p className='card-text'>Stock: {amount}</p>
                            <p className='card-text'>$ {price}</p>
                        </div>
                        {!added &&
                            < ItemCount onAdd={onAdd} amount={amount} />
                        }
                        {added > 0 &&
                            <Link to={'/Cart'}><Button variant="succes">terminar Compra</Button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
