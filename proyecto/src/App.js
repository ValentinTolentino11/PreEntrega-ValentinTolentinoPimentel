import './App.css';
import NavBar from '../src/Components/NavBar'
import ItemListContainer from '../src/Components/ItemListContainer'
import Banner from './Components/Banner';
import Cards from './Components/Cards'
import Footer from './Components/Footer'


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

export default App;
