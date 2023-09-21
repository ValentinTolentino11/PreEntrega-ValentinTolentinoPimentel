import React from 'react'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
      <Navbar className='navBar'>
      <Container fluid>
      <Nav className= "menu">
            <Link to="/category/remeras">Remeras</Link>
            <Link to="/category/bermudas">Bermudas</Link>
            <Navbar.Brand to="/"> <Logo/> </Navbar.Brand>
            <Link to="/category/jean">Jean</Link>
            <Link to="/category/gorras">Gorras</Link>
      </Nav>
          <Link to='/cart'> <CartWidget/> </Link>
      </Container>
      </Navbar>
    
  )
}

export default NavBar
