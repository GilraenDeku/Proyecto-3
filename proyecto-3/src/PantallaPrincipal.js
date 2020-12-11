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
            registerFlag: false
        }

    }

    renderRedirect = () => {
        if (this.state.selectFlag) {
          return <Redirect to='/SelectAdmin' />
        }else{
            if(this.state.registerFlag){
                return <Redirect to='/RegisterPageClient' />
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

    render() {
        localStorage.clear();

        return (
            <div className='RegistrarArticulo'>
                {this.renderRedirect()}
                <Container>
                    <Row>
                        <Col>
                            <h1>Esta es la Pantalla Principal</h1>
                            <Button variant="dark" size="lg" onClick={this.clickPresionado}>Entrar</Button>
                            <Button variant="dark" size="lg" onClick={this.clickPresionadoRegister}>Registrar</Button>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default PantallaPrincipal