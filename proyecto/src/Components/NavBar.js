import React from 'react'
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
            <Nav.Link href="#action1">Servicios</Nav.Link>
            <Nav.Link href="#action2">Colecciones</Nav.Link>
            <Navbar.Brand href="#"> <Logo/> </Navbar.Brand>
            <Nav.Link href="#action1">Nosotros</Nav.Link>
            <Nav.Link href="#action2">Contactanos</Nav.Link>
          </Nav>
          <Form className="d-flex">
            < CartWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
  )
}

export default NavBar