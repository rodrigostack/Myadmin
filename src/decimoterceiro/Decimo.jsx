import React, {useState} from 'react'
import './Decimo.css'


export default function(){
     const [name, setname] = useState()
     const [salb, setSalb] = useState()
     const [meses, setMeses] = useState()
     const [valordec, setValordec] = useState()
     const [primeira, setPrimeira] = useState()
     const [segunda, setSegunda] = useState()

     const calculardec = () => {
        const vsalb = parseFloat(salb)
        const vmeses = parseInt(meses)
        const vvalordec = ((vsalb / 12) * vmeses)
        const vprimeira = (vvalordec / 2)
        const vsegunda = ( vprimeira - ((vprimeira * 8)/100))

        setValordec(vvalordec.toFixed(2))
        setPrimeira(vprimeira.toFixed(2))
        setSegunda(vsegunda.toFixed(2))

     }

     const limparcalc = () => {
        setname("") 
        setSalb("")
        setMeses("")
        setValordec("")
        setPrimeira("")
        setSegunda("")
     }


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
                        <input type="text" class="form-control" autoFocus required value={name}></input>
                        <label className="form-label">Informe Salario bruto do colaborador:</label><br></br>
                        <input type="text" class="form-control" required value={salb} onChange={e => setSalb(e.target.value)}
                            ></input>
                        <label className="form-label">Informe os meses trabalhados referente ao ano:</label><br></br>
                        <input type="text" class="form-control" required value={meses} onChange={e => setMeses(e.target.value)}
                            ></input><br></br>
                        <button className="btn btn-outline-primary" onClick={calculardec} >Calcular</button>
                        
                        <button className="btn btn-outline-secondary" onClick={limparcalc} >Refazer Calculo</button>
                        
                        
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor proporcional de 13º salario:</label><br></br>
                        <input type="text" class="form-control" value={valordec}></input><br></br>
                        <label className="form-label">Valor da 1ª parcela:</label><br></br>
                        <input type="text" class="form-control" value={primeira} ></input><br></br>
                        <label className="form-label">Valor da 2ª parcela:</label><br></br>
                        <input type="text" class="form-control" value={segunda}></input><br></br>
                        
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}