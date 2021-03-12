import React from 'react'
import './Navbar.css'
import Logo from '../imagens/myadmin.jpg'

export default function(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <div className="container-fluid">
                    <img src={Logo} className="img-fluid"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Calculos trabalhistas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Contatos</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}