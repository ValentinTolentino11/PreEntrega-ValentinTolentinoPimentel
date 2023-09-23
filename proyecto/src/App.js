import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Banner from '../src/Components/Banner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './Components/Error404';
import Footer from './Components/Footer';


function App() {
  return (
        <div >      
          <BrowserRouter >
            <NavBar />
            <Banner/>
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>
            <Footer/>         
          </BrowserRouter>
        
        </div>
  );
}

export default App;
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
}
---


import Banner from '../src/Components/Banner';
import Footer from '../src/Components/Footer';



export default function App() {
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/Banner' element={<Banner/>}/>
    <Route path='/' element={<ItemListContainer greeting="Acá van las nuevas cards"/>} />
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/footer' element={<Footer/>}/>
  </Routes>
  </BrowserRouter>
}






*/
