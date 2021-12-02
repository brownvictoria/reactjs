import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import {ItemListContainer} from "./components/ItemListContainer"



function App() {
  return (
    <div className="App">
       <NavBar />
      <header className="App-header">
      <ItemListContainer greeting="Texto provisorio catalogo" />
      {
        <main className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
        </main>
      }{" "}
      </header>
    </div>
  );
}

export default App;
