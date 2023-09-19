import React from 'react'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartWidget from './CartWidget';




const NavBar = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/servicios">Servicios</Link>
            <Link to="/colecciones">Colecciones</Link>
            <Navbar.Brand to="/"> <Logo/> </Navbar.Brand>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/contactanos">Contactanos</Link>
          </Nav>
          <Form className="d-flex">
          <Link to='/cart'> <CartWidget/> </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
  )
}

export default NavBar