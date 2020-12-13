import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Redirect }                              from 'react-router-dom';     

class PantallaPrincipal extends Component {

    constructor(props) {
        console.log("Entra a Pantalla Principal");
        super(props)
        this.state = {
            selectFlag: false,
            registerFlag: false,
            selectCliente: false,
            jsonLocalStorage: {
              client: 'Joseda8',
              date: '',
              products: null
            }
        }

    }

    renderRedirect = () => {
        if (this.state.selectFlag) {
          return <Redirect to='/SelectAdmin' />
        }else{
            if(this.state.registerFlag){
                return <Redirect to='/RegisterPageClient' />
            }else{
                if(this.state.selectCliente) {
                    return <Redirect to='/CatalogoCliente' />
                }
            }
        }
    }

    clickPresionado = (event) =>{
    	this.setState({
            selectFlag: true
        })
	}

    clickPresionadoRegister = (event) =>{
    	this.setState({
            registerFlag: true
        })
    }
    
    clickPresionadoCliente = (event) =>{
    	this.setState({
            selectCliente: true
        })
	}

    render() {

        localStorage.clear();

    if (!localStorage.getItem('user_info')) {
      localStorage.setItem('user_info', '');
    }


    localStorage.setItem('user_info', JSON.stringify(this.state.jsonLocalStorage));

        return (
            <div className='RegistrarArticulo'>
                {this.renderRedirect()}
                <Container>
                    <Row>
                        <Col>
                            <h1>Esta es la Pantalla Principal</h1>
                            <Button variant="dark" size="lg" onClick={this.clickPresionado}>Entrar Administrador</Button>
                            <Button variant="dark" size="lg" onClick={this.clickPresionadoCliente}>Entrar Cliente</Button>
                            <Button variant="dark" size="lg" onClick={this.clickPresionadoRegister}>Registrar</Button>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default PantallaPrincipal