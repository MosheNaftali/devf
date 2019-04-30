import React from 'react'
import './layout/styles/header.css'
import './styles/styles.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Ejercicio1 from './pages/ejercicio1'
import Ejercicio2 from './pages/ejercicio2'
import Ejercicio3 from './pages/ejercicio3'
import Home from './pages/home'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ejercicio1" component={Ejercicio1} />
                <Route exact path="/ejercicio2" component={Ejercicio2} />
                <Route exact path="/ejercicio3" component={Ejercicio3} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes