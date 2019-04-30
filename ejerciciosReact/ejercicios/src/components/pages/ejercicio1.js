import React, {Component} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
class Ejercicio1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            mensaje:'Primer estado de inicialisación'
        }
    }
    componentDidMount(){
        console.log('Dispositivo Montado')
        setTimeout(() => {
            this.setState({
                mensaje:'Estado cambiado después de 5 segundos, checa la consola'
            })
        }, 5000);
        setTimeout(()=>{
            this.setState({
                mensaje: 'Estado cambiado después de 2 segundos'
            })
        },2000)
    }
    componentWillMount(){
        console.log('Estado Will Mount')
    }
    render(){
        console.log('En Render')
        return(
            <div>
                <Header />
                <p>Hola, mi nombre es {this.props.nombre} {this.props.apellido}, y tengo {this.props.edad} años</p>
                <p>{this.state.mensaje}</p>
                <Footer />
            </div>
        )
    }
}
export default Ejercicio1