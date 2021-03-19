import React from 'react';
import './App.css';
import NavBar from './navbar/Navbar';
import Routes from './routes'

function App() {
  return (
    <div className="container">
     <NavBar/>
     <Routes/>
    </div>
  );
}

export default App;
