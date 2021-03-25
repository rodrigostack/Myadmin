import React from 'react'
import './Catalogo.css'
import Ferias from '../imagens/ferias.jpg'
import Decimoterceiro from '../imagens/13-salario.jpg'
import Folha from '../imagens/folha.jpg'
import Rescisao from '../imagens/rescicao.jpg'

import { Link } from 'react-router-dom'



export default function(){
    return(
        <div>
            <div className="card cardmain">
                <div className="card-header cardtitle">
                    <h2>Catalogo de calculos trabalhistas</h2>
                </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card cardmain">
                        <div className='card-body'>
                            <img src={ Ferias }  className="fly"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <Link to='/ferias'><h2 className="h4">Ferias</h2></Link>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card cardmain">
                        <div className='card-body'>
                             <img src={ Decimoterceiro } className="fly"/>
                        </div>
                        <div className="card-footer cardfooter">
                                <a href='#'><h2 className="h4">13º Salario</h2></a>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card cardmain">
                        <div className='card-body'>
                            <img src={ Folha }  className="fly"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <a href='#'><h2 className="h4">Folha de pgto</h2></a>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card cardmain">
                        <div className='card-body'>
                            <img src={ Rescisao }  className="fly"/>
                        </div>
                        <div className="card-footer cardfooter">
                            <a href='#'><h2 className="h5">Rescisao Contratual</h2></a>
                        </div>

                    </div>
                </div>

            </div>
            <div className="card-footer footer">
                <p>Myadmin acessoria em Departamento pessoal</p>
            </div>
            </div> 

        </div>
    )
}