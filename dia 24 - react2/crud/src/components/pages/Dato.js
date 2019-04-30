import React,{Component} from 'react'
import Axios from 'axios'
// import Header from '../layout/Header'
// import Footer from '../layout/Footer'
import Tarjetas from '../tarjetas'

class Dato extends Component{
    state={
        dato:[]
    }
    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => {this.setState({dato:res.data})})
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div className="app">
                
                    <Tarjetas
                        name={this.state.dato.name}
                        urlFoto="https://i.pinimg.com/originals/df/7b/99/df7b99eb3f68eccefe9f2ca4e3936d8c.png"
                        description={this.state.dato.email}
                        id={`${this.state.dato.id}`}
                    />
            </div>
        )
    }
}
export default Dato
