import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React from "react";

function Item({ item }) {

  return (
    <>
      <div className='d-flex pb-3 px-3'>
        <Card style={{ width: '20rem' }} className='box'>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}  {item.id}</Card.Title>
            <Card.Text>
              <p><Badge bg="danger"> NUEVO</Badge></p>
            </Card.Text>
            <Link to={`/ItemdetailContainer/${item.id}`}><Button variant="primary">descripcion</Button></Link>

          </Card.Body>
        </Card>
      </div>
    </>);
};
export default Item;