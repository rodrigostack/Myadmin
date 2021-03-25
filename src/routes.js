import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Catalogo from './calculos/Catalogo'
import Contato from './contatos/contatos'

export default function() {
    return(
      
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/catalogo" component={Catalogo} />
                <Route exact path="/contato" component={Contato} />
                
            </Switch>
     
    )
}