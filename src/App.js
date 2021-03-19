import './App.css';
import NavBar from './navbar/Navbar'
import Home from './home/Home'
import Catalogo from './calculos/Catalogo'

function App() {
  return (
    <div className="container">
     <NavBar/>
     <Home/>
     <Catalogo/>
    </div>
  );
}

export default App;
