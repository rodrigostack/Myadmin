import React from 'react'
import './Navbar.css'
import Logo from '../imagens/myadmin.jpg'

import { Link } from 'react-router-dom'

export default function(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <div className="container-fluid">
                    <img src={Logo} className="img-fluid"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-white" to="/catalogo">Calculos trabalhistas</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-white" to="/contato">Contatos</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}