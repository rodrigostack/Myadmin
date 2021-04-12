import React, {useState} from 'react'
import './Folha.css'

export default function(){

    const [name, setname] = useState()
    const [sb, setSb] = useState()
    const [va, setVa] = useState()
    const [qtde, setQtde] = useState()
    const [descfal, setDescfal] = useState()
    const [inss, setInss] = useState()
    const [vt, setVt] = useState()
    const [convenio, setConvenio] = useState()
    const [totaldesc, setTotaldesc] = useState()
    const [liquido, setLiquido] = useState()

    const calcularfolha = () => {
        const vsb = parseFloat(sb)
        const vva = parseFloat(va)
        const vqtde = parseInt(qtde)
        const vdescfal = parseFloat((vsb /30) * vqtde)
        const vinss = parseFloat((vsb * 8)/100)
        const vvt = parseFloat((vsb * 6) /100)
        const vconvenio = parseFloat((vsb * 7)/100)
        const vtotaldesc = parseFloat(vdescfal + vinss + vvt + vconvenio)
        const vliquido = parseFloat(vsb - vtotaldesc)

        setDescfal(vdescfal.toFixed(2))
        setInss(vinss.toFixed(2))
        setVt(vvt.toFixed(2))
        setConvenio(vconvenio.toFixed(2))
        setTotaldesc(vtotaldesc.toFixed(2))
        setLiquido(vliquido.toFixed(2))

    }

    const limparcalcfolha = () => {
        setname("")
        setSb("")
        setVa("")
        setQtde("")
        setDescfal("")
        setInss("")
        setVt("")
        setConvenio("")
        setTotaldesc("")
        setLiquido("")
    }


    return(
        <div>
            <div className="card carddefault">
            <div className="card-header cardferias">
                <h1>Calculo de folha de Pagamento</h1>
            </div>
            <div className='card-body feriasform'>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Nome completo do colaborador:</label><br></br>
                        <input type="text" class="form-control" autoFocus required value={name} onChange={e => setname(e.target.value)}></input>
                        <label className="form-label">Informe Salario bruto do colaborador:</label><br></br>
                        <input type="text" class="form-control" required  value={sb} onChange={e => setSb(e.target.value)}></input>
                        <label className="form-label">Informe a Valor do Adiantamento salarial:</label><br></br>
                        <input type="text" class="form-control" required value={va} onChange={e => setVa(e.target.value)}></input><br></br>
                        <label className="form-label">Informe qtde de faltas no mes:</label><br></br>
                        <input type="text" class="form-control" required value={qtde} onChange={e => setQtde(e.target.value)}></input><br></br>
                        <button className="btn btn-outline-primary" onClick={calcularfolha}>Calcular</button>
                        <button className="btn btn-outline-secondary" onClick={limparcalcfolha}>Refazer Calcular</button>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Valor descontado de faltas</label><br></br>
                        <input type="text" class="form-control" value={descfal}></input><br></br>
                        <label className="form-label">Desconto de INSS:</label><br></br>
                        <input type="text" class="form-control" value={inss}></input><br></br>
                        <label className="form-label">Desconto de Vale Transporte</label><br></br>
                        <input type="text" class="form-control" value={vt}></input><br></br>
                        <label className="form-label">Desconto de Convenio medico</label><br></br>
                        <input type="text" class="form-control" value={convenio}></input><br></br>
                        <label className="form-label">Valor Total de Desconto</label><br></br>
                        <input type="text" class="form-control" value={totaldesc}></input><br></br>
                        <label className="form-label">Valor Liquido a receber</label><br></br>
                        <input type="text" class="form-control"value={liquido} ></input><br></br>
                        
                    </div>

                </div>

            </div>
        </div>
        </div>
    )
}