import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo">
                </div>
                <div className="botones">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/categorias">Categorias</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}