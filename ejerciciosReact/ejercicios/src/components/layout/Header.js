import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <li className="headerLi"><Link className="headerLinks" to="/">Inicio</Link></li>
                <li className="headerLi"><Link className="headerLinks" to="/ejercicio1">Ejercicio 1</Link></li>
                <li className="headerLi"><Link className="headerLinks" to="/ejercicio2">Ejercicio 2</Link></li>
                <li className="headerLi"><Link className="headerLinks" to="/ejercicio3">Ejercicio 3</Link></li>
            </div>
        )
    }
}
export default Header;