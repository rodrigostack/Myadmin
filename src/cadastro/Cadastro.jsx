import React,{useState} from 'react'
import './Cadastro.css'
import Axios from 'axios'

export default function(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [descricao, setDescricao] = useState();


    const submit = () => {
        Axios.post("http://localhost:3001/api",{
            nome: name, email: email, descricao: descricao
        }).then(()=>{
            alert('Mensagem cadastrada com sucesso')
        });
    };

    return(
        <div>
            <div className="card carddefault">
                <div className="card-header cardtitlecad">
                    <h2 className="h3">Cadastre-se em nosso sistema e entraremos em contato.</h2>
                </div>
                <div className="card-body">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Clique aqui para se cadastrar</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Digite suas informaçoes </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label for="recipient-name" className="col-form-label">Nome Completo:</label>
                            <input type="text" className="form-control" name="name" 
                            onChange={e => setName(e.target.value)} id="recipient-name" autoFocus required/>
                        </div>
                        <div className="mb-3">
                            <label for="recipient-email" className="col-form-label">E-mail:</label>
                            <input type="email" className="form-control" name="email" 
                            onChange={e => setEmail(e.target.value)} id="recipient-email" required/>
                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Mensagem:</label>
                            <textarea className="form-control" name="descricao" 
                            onChange={e => setDescricao(e.target.value)} id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={submit} className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                        <button type="button" className="btn btn-primary">Enviar Mensagem</button>
                    </div>
                    </div>
                </div>
                </div>

                </div>

            </div>
        </div>
    )
}