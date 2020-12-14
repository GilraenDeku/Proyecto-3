import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import './PantallaPrincipal.css';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Input,
} from "reactstrap";
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import logo from './esports_logo.png';


class PantallaPrincipal extends Component {

    constructor(props) {
        console.log("Entra a Pantalla Principal");
        super(props)
        this.state = {
            selectFlag: false,
            registerFlag: false,
            selectCliente: false,
            jsonLocalStorage: {
                client: '',
                products: null
            },
            username: '',
            contraseña: '',
            jsonLogIn: {
                username: '',
                password: ''
            },
            profileImg: logo,
        }

    }

    llamadaALaBase = async () => {

        const url = `http://localhost:5000/login`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.jsonLogIn)
        };



        const response = await fetch(url, requestOptions);
        if (response.status === 401) {
            Swal.fire(
                'Error',
                'El Username o la contraseña están incorrectos por favor ',
                'error'
            );
        } else {
            this.clickPresionadoCliente();
            Swal.fire(
                'Ingreso Exitoso',
                'Bienvenid@',
                'success'
            );
        }

    }

    renderRedirect = () => {
        if (this.state.selectFlag) {
            return <Redirect to='/SelectAdmin' />
        } else {
            if (this.state.registerFlag) {
                return <Redirect to='/RegisterPageClient' />
            } else {
                if (this.state.selectCliente) {
                    return <Redirect to='/CatalogoCliente' />
                }
            }
        }
    }

    clickPresionado = (event) => {
        this.setState({
            selectFlag: true
        })
    }

    clickPresionadoRegister = (event) => {
        this.setState({
            registerFlag: true
        })
    }

    clickPresionadoCliente = (event) => {
        this.setState({
            selectCliente: true
        })
    }

    clickUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    clickContraseña = (event) => {
        this.setState({
            contraseña: event.target.value
        })
    }

    verificarJson = () => {
        if(this.state.username === ''){
            Swal.fire(
                'Error',
                'Por favor escribir el nombre del usuario',
                'error'
            );
        }else{
            if(this.state.contraseña === ''){
                Swal.fire(
                    'Error',
                    'Por favor escribir la contraseña',
                    'error'
                );
            }else{
                if(this.state.username === 'Admin'){
                    this.clickPresionado();
                }else{
                    this.state.jsonLocalStorage.client = this.state.username;
                    this.state.jsonLogIn.username = this.state.username;
                    this.state.jsonLogIn.password = this.state.contraseña;

                    this.llamadaALaBase();
                }
            }
        }
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
                <br />
                <Container>
                    <Row>
                        <Col>
                            <br />
                            <img src={this.state.profileImg} alt="Imagen de Perfil" className="testImage"></img>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardBody>
                                    <Form>
                                        <br />
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Nombre de usuario</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Input
                                                    placeholder="Username"
                                                    type="text"
                                                    className="inputName"
                                                    onChange={this.clickUsername}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Contraseña</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Input
                                                    placeholder="Contraseña"
                                                    type="password"
                                                    className="inputName"
                                                    onChange={this.clickContraseña}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    onClick={this.verificarJson}
                                                >
                                                    Ingresar
                                                        </Button>
                                            </Col>
                                            <Col>
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    onClick={this.clickPresionadoRegister}
                                                >
                                                    Registrarme
                                                        </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default PantallaPrincipal