import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SelectAdmin.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class SelectAdmin extends Component {

    constructor(props) {
        console.log("Entra a SelectAdmin");
        super(props)
        this.state = {
            pantallaPrincipalFlag: false,
            registroArticuloFlag: false,
            clienteFlag: false,
        }

    }

    renderRedirect = () => {
        if (this.state.pantallaPrincipalFlag) {
            return <Redirect to='/PantallaPrincipal' />
        } else {
            if (this.state.registroArticuloFlag) {
                return <Redirect to='/RegistrarArticulo' />
            }else{
                if(this.state.clienteFlag) {
                    return <Redirect to='/HistorialCliente' />
                }
            }
        }
    }

    clickPresionado = (event) => {
        this.setState({
            pantallaPrincipalFlag: true
        })
    }

    clickPresionadoRegistro = (event) => {
        this.setState({
            registroArticuloFlag: true
        })
    }

    clickPresionadoCliente = (event) => {
        this.setState({
            clienteFlag: true
        })
    }

    render() {
        localStorage.clear();

        return (
            <div className='SelectAdmin'>
                {this.renderRedirect()}
                <Container>
                    <h1>Elija la opción a realizar</h1>
                    <br />
                    <br />
                    <Row>
                        <Col md={{ span: 3, offset: 1 }}>
                            <Card border="primary" style={{ width: '20rem' }} className='SoloParaCard'>
                                <Card.Header className='ParaCardHeader'>Registro</Card.Header>
                                <Card.Body>
                                    <Card.Title>Registo de Artículos y Promociones/Regalía</Card.Title>
                                    <Card.Text>
                                        Se cuenta con 2 opciones de registros:
                                        Registro de un artículo nuevo
                                        o el Registro de una promoción o regalía/descuento sobre
                                        un artículo existente
                                    </Card.Text>
                                    <Button variant="dark" size="lg" onClick={this.clickPresionadoRegistro}>Entrar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{ span: 0, offset: 3 }}>
                            <Card border="warning" style={{ width: '18rem' }} className='SoloParaCard'>
                                <Card.Header className='ParaCardHeader'>Consulta</Card.Header>
                                <Card.Body>
                                    <Card.Title>Consultas</Card.Title>
                                    <Card.Text>
                                        Hay 4 tipos de consultas: Búsqueda del historial de un cliente en particular,
                                        Ver todos los productos adquiridos, Buscar un producto en específico
                                        y Búsqueda de al menos un producto en común entre clientes a partir
                                        de un cliente.
                                    </Card.Text>
                                    <Button variant="dark" size="lg" onClick={this.clickPresionadoCliente}>Entrar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col md={{ span: 11, offset: 0 }}>
                            <Button variant="dark" size="lg" onClick={this.clickPresionado}>Salir</Button>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default SelectAdmin