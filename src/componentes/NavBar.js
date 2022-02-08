import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import {Navbar,Nav, NavDropdown,Container} from 'react-bootstrap'
import logo from '../multimedia/logo.png';
import Search from './Search';


function NavBar() {
  
  return (
      <>
     
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link}  to='/'>
      <img src={logo}
       width="100"
       height="40"
      alt='logo de lyon dor marca de medias'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/ItemListContainer'>Destacadas</Nav.Link>
        <NavDropdown title="Clases" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to='/ItemListContainer/calida'>calidas</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/ItemListContainer/algodon'>algodon</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to='/ItemListContainer/nailon'>
            nailon
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to='/Cart' >
        </Nav.Link>
      </Nav>
      <Nav.Link as={Link} to='/Cart' >
         <CartWidget/> 
        </Nav.Link>
        <Search/>
    </Navbar.Collapse>
  </Container>
</Navbar>
   </>
    )
}

export default NavBar
