import React from 'react'
import './ferias.css'

export default function(){
    return(
        <div className="card carddefault">
            <div className="card-header cardferias">
                <h1>Calculo de ferias</h1>
            </div>
            <div className='card-body feriasform'>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Nome completo do colaborador:</label><br></br>
                        <input type="text" class="form-control" autoFocus required></input>
                        <label className="form-label">Informe Salario bruto do colaborador:</label><br></br>
                        <input type="text" class="form-control" required></input>
                        <label className="form-label">Informe a qtde de dias a usufruir de ferias:</label><br></br>
                        <input type="text" class="form-control" required></input><br></br>
                        <button className="btn btn-outline-primary">Calcular</button>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor proporcional de ferias:</label><br></br>
                        <input type="text" class="form-control"></input><br></br>
                        <label className="form-label">Valor do terço de ferias:</label><br></br>
                        <input type="text" class="form-control"></input><br></br>
                        <label className="form-label">Valor de total de ferias</label><br></br>
                        <input type="text" class="form-control"></input><br></br>
                     
                    </div>

                </div>

            </div>
            
        </div>
    )
}