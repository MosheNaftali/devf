import React, { Component } from 'react';

class Ciclo extends Component{
    
        constructor(props){
            super(props);
            this.state = {
                mensajein:'Hola desde el primer estado'
            }
        }
        componentDidMount(){
            console.log('En did mount');
            setTimeout(()=>{
                this.setState({
                    mensajein:'Ya pasaron 3 segundos y se cambió el estado'
                })
            },3000)
        }
        componentWillMount(){
            console.log('En will mount')
        }
        render(){
            console.log('En render')
        return(
            <div className="Ciclo">
                <h2>{this.state.mensajein}</h2>
            </div>
        )
    }
}
export default Ciclo