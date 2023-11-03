import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const { totalProducts } = useCartContext(); 

  return (
    <Navbar className='navBar'>
      <Container fluid className='containerNav'>
        <Nav className= "menu">
          <ul>
            <Link to="/category/remeras" className='navLink'>Remeras</Link>
            <Link to="/category/bermudas" className='navLink'>Bermudas</Link>
            <Navbar.Brand to="/" className='navLogo'> <Logo/> </Navbar.Brand>
            <Link to="/category/jean" className='navLink'>Jean</Link>
            <Link to="/category/gorras" className='navLink'>Gorras</Link>
          </ul>
        </Nav>
        <Link to='/cart' className="cart-link"> <CartWidget /> ({totalProducts()})</Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
