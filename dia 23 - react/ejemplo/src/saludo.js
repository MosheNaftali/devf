import React, { Component } from 'react';

class Saludo extends Component{
    render(){
        return(
            <h3>Hola {this.props.nombre} {this.props.apellido}</h3>
        )
    }
}
export default Saludo