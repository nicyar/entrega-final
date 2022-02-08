import React, { useContext, useState } from 'react'
import { SearchContext } from './SearchContext';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import Model from './Model'

const Cart = () => {
    const { search } = useContext(SearchContext)
    const { items, removeItem } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)

    const view = items.map((i) =>
    <>
        <ol className='list-group list-group-numbered row justify-content-start  m-4'>
            <li className='list-group-item  list-group-item-secondary d-flex justify-content-betwen align-items-start '>
                <div className='ms-2 me-auto fs-6' key={i.id}>
                    <div className='fw-bold'>{i.title}: $ {i.price}</div>
                    <p> descripcion: {i.description}</p>
                    <p> cantidad: {i.cantidad} - <button  type="button" className='btn btn-secondary btn-sm' onClick={() => { removeItem(i) }}>Eliminar</button> </p>
                    <p> total:{i.cantidad * i.price}$</p> 
                </div>
            </li>
        </ol>
        

 </>        ) 
        
    return (<>
       
        {items.length === 0 &&
            <Link to={'/ItemListContainer'}> <p className='fst-italic text-decoration-none py-3 text-center'>usted debe selecionar las medias antes de comprarlas. volver a productos</p> </Link>
        }
        {!items.length <= 1 &&
            view }
        { items.length > 0 &&
        <>
            <button type="button" className='openModalBtn btn btn-outline-success mx-4' onClick={() => { setOpenModal(true) }}> terminar Compra</button>
         {openModal && <Model closeModal={setOpenModal} />} </>
       } 
        
    </>);
}

export default Cart

