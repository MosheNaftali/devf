import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Datos from './pages/Datos'
import Dato from './pages/Dato'
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/datos" component={Datos} />
                <Route exact path="/dato/:id" component={Dato} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;