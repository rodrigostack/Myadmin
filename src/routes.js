import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Catalogo from './calculos/Catalogo'
import Contato from './contatos/contatos'
import Ferias from './ferias/ferias'
import Informacao from './informacao/informacao'

export default function() {
    return(
      
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/catalogo" component={Catalogo} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/ferias" component={Ferias} />
                <Route exact path="/informacao"component={Informacao}/>
                
            </Switch>
     
    )
}
