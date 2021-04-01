import React from 'react'
import './Decimo.css'
export default function(){
    return(
        <div>
            <div className='card cardmain'>
                <div className='card-header cardtitle'>
                    <h1>Calcular 13º salario</h1>
                </div>
                <div className="card-body cardformdec">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Nome completo do colaborador:</label><br></br>
                        <input type="text" class="form-control" autoFocus required ></input>
                        <label className="form-label">Informe Salario bruto do colaborador:</label><br></br>
                        <input type="text" class="form-control" required 
                            ></input>
                        <label className="form-label">Informe os meses trabalhados referente ao ano:</label><br></br>
                        <input type="text" class="form-control" required 
                            ></input><br></br>
                        <button className="btn btn-outline-primary" >Calcular</button>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor proporcional de 13º salario:</label><br></br>
                        <input type="text" class="form-control" ></input><br></br>
                        <label className="form-label">Valor da 1ª parcela:</label><br></br>
                        <input type="text" class="form-control" ></input><br></br>
                        <label className="form-label">Valor da 2ª parcela:</label><br></br>
                        <input type="text" class="form-control" ></input><br></br>
                        
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}