import React, {Component} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

class Ejercicio2 extends Component{
    render(){
        return(
            <div>
                <Header />
                    <p>{this.props.fruta}</p>
                <Footer />
            </div>
        )
    }
}
export default Ejercicio2