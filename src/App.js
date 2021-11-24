import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import {ItemListContainer} from "./components/itemsCatalogo"



function App() {
  return (
    <div className="App">
       <NavBar />
      <header className="App-header">
      
      <ItemListContainer greeting="Mi ItemListContainer"/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a  <code>Mi Tienda en React Js</code>, en construcción.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Tienda
        </a>
      </header>
    </div>
  );
}

export default App;
