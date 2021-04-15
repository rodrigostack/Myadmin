import React, { useState } from 'react';
import './ferias.css'


export default function(){
    const [name, setname] = useState()
    const [sb, setSb ] = useState()
    const [dias, setDias ] = useState()
    const [adc, setAdc ] = useState()
    const [vp, setVp ] = useState()
    const [terco, setTerco ] = useState()
    const [total, setTotal ] = useState()

    const calcularferias = () => {
        const vsb = parseFloat(sb)
        const vdias = parseInt(dias)
        const vadc = parseFloat(adc)
        const vvp = parseInt(( vsb + vadc) /30 * vdias )
        const vterco = parseInt(vvp / 3)
        const vtotal = ( vvp + vterco )
        
        setVp( vvp.toFixed(2) )

        setTerco( vterco.toFixed(2) )

        setTotal( vtotal.toFixed(2) ) 

    }

    const limparcalcfe = () => {
        setname("")
        setSb("")
        setDias("")
        setAdc("")
        setVp("")
        setTerco("")
        setTotal("")
    }

  

    return(
        <div className="card carddefault">
            <div className="card-header cardferias">
                <h1>Calculo de ferias</h1>
            </div>
            <div className='card-body feriasform'>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Nome completo do colaborador:</label><br></br>
                        <input type="text" class="form-control" autoFocus required value={name}></input>
                        <label className="form-label">Informe Salario bruto do colaborador:</label><br></br>
                        <input type="text" class="form-control" required value={sb} 
                            onChange={e => setSb(e.target.value)}></input>
                        <label className="form-label">Informe a qtde de dias a usufruir de ferias:</label><br></br>
                        <input type="text" class="form-control" required value={dias} 
                            onChange={e => setDias(e.target.value)}></input><br></br>
                        <label className="form-label">Informe Media de adicional:</label><br></br>
                        <input type="text" class="form-control" required value={adc} 
                            onChange={e => setAdc(e.target.value)}></input><br></br>
                        <button className="btn btn-outline-primary" onClick={calcularferias}>Calcular</button>
                        <button className="btn btn-outline-secondary" onClick={limparcalcfe}>Refazer Calcular</button>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor proporcional de ferias:</label><br></br>
                        <input type="text" class="form-control" value={vp}></input><br></br>
                        <label className="form-label">Valor do terço de ferias:</label><br></br>
                        <input type="text" class="form-control" value={terco}></input><br></br>
                        <label className="form-label">Valor de total de ferias</label><br></br>
                        <input type="text" class="form-control" value={total}></input><br></br>
                        
                    </div>

                </div>

            </div>
            
        </div>
    )
}