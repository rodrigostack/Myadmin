import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'

export default function(){
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>Sejam Bem vindos ao MyAdmin!</h1><br></br>
                    <p>Temos soluçoes para o dia a dia das empresas com serviços de Departamento Pessoal e Gestao de Pessoas.</p>
                    <p>Serviços como: Folha de pagamentos, Calculos trabalhistas, Processos seletivos, Desligamentos, Treinamentos profissionais</p><br></br>
                    <Link to="/informacao"><button className="btn btn-primary">Saiba Mais</button></Link>
                </div>

            </div>
        </div>
    )
}
