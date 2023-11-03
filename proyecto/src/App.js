import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Banner from '../src/Components/Banner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'; // Importa el componente Cart
import CartProvider from '../src/Context/CartContext';
import Footer from './Components/Footer';
import Error404 from './Components/Error404';

function Home() {
  return (
    <div>
      <Banner />
      <ItemListContainer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} /> 
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;