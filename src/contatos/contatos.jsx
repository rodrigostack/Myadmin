import React from 'react'
import Facebook from '../imagens/facebook.png'
import Instagram from '../imagens/instagram.jpg'
import Twiter from '../imagens/twiter.png'


export default function(){
    return(
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Telefone: 4785-2587</li>
                        <li className="list-group-item">Email: myadminservices@gmail.com</li>
                        <li className="list-group-item">Whatsapp: 9 7475-8695</li>
                    </ul>
                </div>
                <div className="col-md-3 icon">
                    <img src={ Facebook }/>
                </div>  
                 <div className="col-md-3 icon">
                    <img src={ Instagram }/>
                </div>
                <div className="col-md-2 icon"> 
                      <img src={ Twiter }/>
                 </div>
                
            </div>
        </div>
    )
}