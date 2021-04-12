import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Catalogo from './calculos/Catalogo'
import Contato from './contatos/contatos'
import Ferias from './ferias/ferias'
import Informacao from './informacao/informacao'
import Decimo from './decimoterceiro/Decimo'
import Cadastro from './cadastro/Cadastro'

export default function() {
    return(
      
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/catalogo" component={Catalogo} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/ferias" component={Ferias} />
                <Route exact path="/informacao"component={Informacao}/>
                <Route exact path="/decimo" component={Decimo}/>
                <Route exact path="/cadastro" component={Cadastro}/>

            </Switch>
     
    )
}
