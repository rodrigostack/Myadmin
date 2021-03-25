import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import NavBar from './navbar/Navbar';
import Routes from './routes'


function App() {
  return (
    <HashRouter>
        <div className="container">
          <NavBar/>
          <Routes/>
        </div>
    </HashRouter>
  );
}

export default App;
