import React,{Component} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

class Ejercicio3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:'20'
        }
    }
    contador = e =>{
        this.setState({
            contador: 20 - e.target.value.length
        })
    }

    // if(this.state.contador === 1){
    //     this.setState({
    //         contador: 'Cero'
    //     })
    // }else{
    //     this.setState({
    //         contador: e.target.value.length
    //     }    
    //     )
    // }
    // console.log(this.state)

    render(){
        if(this.state.contador === 0){
            this.setState({
                contador: 'Cero'
            })
        }
        return(
            
            <div>
                <Header />
            <input 
            onChange={this.contador}
            type="text"
            placeholder="Texto"
            maxLength="20"
            />
            <h3>{this.state.contador}</h3>
            <Footer />
            </div>
            
        )
    }
}
export default Ejercicio3