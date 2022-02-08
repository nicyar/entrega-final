import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Model = ({ closeModal }) => {
    
    const [lastId, setLastId] = useState()
    const db = getFirestore();
    const { items } = useContext(CartContext)


    const [datos, setDatos] = useState({

        nombre: '',
        user: '',
        telefono: ''

    })

    const handleInput = (event) => {
        console.log(event.target.value)

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)

        const order = {
            buyer: {
                name: datos.nombre,
                email: datos.user,
                telefono: datos.telefono
            },
            items: items
        }

        const { id } = await addDoc(collection(db, "orders"), order);
        alert(`La compra fue exitosa id:  ${id}`)
    }


    return (
        <>
            <Modal.Dialog>
                <Modal.Header onClick={() => closeModal(false)}>
                    <Modal.Title>ticket de comprar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>para finalizar ingrese sus datos.</p>
                    <Form onSubmit={enviarDatos} >
                        <Form.Control required maxLength={14} minLength={3} onChange={handleInput} type="text" name="nombre" placeholder="nombre" />
                        <br />
                        <Form.Control onChange={handleInput} type="text" name="user" placeholder="email" />
                        <br />
                        <Form.Control onChange={handleInput} type="text" name="telefono" placeholder="numero de telefono" />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => closeModal(false)}>cerrar</Button>
                    <Button variant="primary" onClick={enviarDatos}>comprar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    )

}
export default Model;
