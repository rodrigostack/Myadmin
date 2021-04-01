import React from 'react'
import './informacao.css'

export default function(){
    return(
        <div>
            <div className="card cardpr">
                <div className="card-header cardcab">
                    <h2>Empresa MyAdmin</h2>
                </div>
               <div className="card-body">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed cardbutton" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Quem somos?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Somos uma empresa especializada em serviços de Departamento pessoal, contamos com profissionais 
                            experientes com anos no mercado de gestao de pessoas.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed cardbutton" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Objetivos
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Oferecer Serviços de departamento pessoal auxiliando nos 
                            calculos trabalhistas de empresas e processos de contrataçoes.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed cardbutton" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Publico Alvo
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">A todas as empresas que precisem de serviços administrativos de RH e Departamento Pessoal.</div>
                        </div>
                    </div>
                 </div>
             </div>

            </div>
        </div>
    )
}