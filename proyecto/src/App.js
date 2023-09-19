import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../src/Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import Banner from '../src/Components/Banner';
import Footer from '../src/Components/Footer';
import Servicios from '../src/Components/Servicios';
import Colecciones from '../src/Components/Colecciones';
import Contactanos from '../src/Components/Contactanos';
import Nosotros from '../src/Components/Nosotros';
import Error from '../src/Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer';


export default function App() {
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/Banner' element={<Banner/>}/>
    <Route path='/' element={<ItemListContainer greeting="Acá van las nuevas cards"/>} />
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/servicios' element={<Servicios/>}/>
    <Route path='/colecciones' element={<Colecciones/>} />
    <Route path='/contactanos' element={<Contactanos/>} />
    <Route path='/nosotros' element={<Nosotros/>} />
    <Route path='/footer' element={<Footer/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
}

/*
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ItemListContainer greeting="Acá van las nuevas cards"/>
      <Cards/>
      <Footer/>

    </div>
  );
}*/
