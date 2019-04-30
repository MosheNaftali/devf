import React,{Component} from 'react'
import Axios from 'axios'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'
import Tarjetas from '../tarjetas'

class Datos extends Component{
    state={
        datos:[]
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {this.setState({datos:res.data})})
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div className="app">
      <div className="cards">
      <h1>Algunos de los gatos favoritos de todos</h1>
        {this.state.datos.map(dato=> 
        <Tarjetas 
            name={dato.name}
            urlFoto="https://i.pinimg.com/originals/df/7b/99/df7b99eb3f68eccefe9f2ca4e3936d8c.png"
            description={dato.email}
            id={`dato/${dato.id}`}
        />)}
      
        </div>
            </div>
        )
    }
}
export default Datos
