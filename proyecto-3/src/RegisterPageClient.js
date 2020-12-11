import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './RegisterPageClient.css';
import Swal from 'sweetalert2';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Input,
} from "reactstrap";
import Form from 'react-bootstrap/Form'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationfactory from 'react-bootstrap-table2-paginator';
import { Redirect } from 'react-router-dom';


class RegisterPageClient extends Component {

    constructor(props) {
        console.log("entra a RegisterPageClient");
        super(props)
        this.state = {
            tableData: [],
            selectFlag: false,
            nombreCliente: '',
            apellidoCliente: '',
            nombreCompleto: '',
            fechaNacimiento: '',
            diaS: '',
            mesS: '',
            añoS: '',
            generoCliente: '',
            mujerFlag: false,
            hombreFlag: false,
            indefinidoFlag: false,
            usernameCliente: '',
            passwordCliente: '',
            jsonFile: {
                username: '',
                password: '',
                name: '',
                birthday: '',
                gender: ''
            }


        }

    }

    renderRedirect = () => {
        if (this.state.selectFlag) {
            return <Redirect to='/' />
        }
    }

    clickPresionado = (event) => {
        this.setState({
            selectFlag: true
        })
    }

    clickName = (e) => {
        this.setState({
            nombreCliente: e.target.value
        })
    }

    clickApellidos = (e) => {
        this.setState({
            apellidoCliente: e.target.value
        })
    }

    ActualizarNombreCompleto = () => {
        this.setState({
            nombreCompleto: this.state.nombreCliente + this.state.apellidoCliente
        })
        console.log();
        console.log(this.state.nombreCompleto);
        console.log();
    }

    clickMujerCheck = () => {
        if (mujerFlag) {
            this.setState({
                mujerFlag: false,
                generoCliente: ''
            })
        } else {
            this.setState({
                mujerFlag: true,
                generoCliente: 'F'
            })
        }
    }

    clickHombreCheck = () => {
        if (hombreFlag) {
            this.setState({
                hombreFlag: false,
                generoCliente: ''
            })
        } else {
            this.setState({
                hombreFlag: true,
                generoCliente: 'M'
            })
        }
    }

    clickIndefinidoCheck = () => {
        if (indefinidoFlag) {
            this.setState({
                indefinidoFlag: false,
                generoCliente: ''
            })
        } else {
            this.setState({
                indefinidoFlag: true,
                generoCliente: 'I'
            })
        }
    }

    clickUsername = (e) => {
        this.setState({
            username = e.target.value
        })
    }

    clickPassword = (e) => {
        this.setState({
            password = e.target.value
        })
    }

    clickDia = (e) => {
        this.setState({
            diaS = e.target.value
        })
    }

    clickMes = (e) => {
        this.setState({
            mesS = e.target.value
        })
    }

    clickAño = (e) => {
        this.setState({
            añoS = e.target.value
        })
    }

    ActualizarFechaCumpleaños = () => {
        this.setState({
            fechaNacimiento = this.state.añoS + this.state.mesS + this.state.diaS
        })
        console.log();
        console.log(this.state.fechaNacimiento);
        console.log();
    }

    clickRegistrarCliente = () => {

    }

    render() {
        localStorage.clear();
        return (
            <div className='RegisterPageClient'>
                {this.renderRedirect()}
                <Jumbotron className="jumbotronSetting">
                    <h1>Registro</h1>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Registro del Cliente</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Nombre</label>
                                                    </Col>
                                                    <Col>
                                                        <label className="labelSetting">Apellidos</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Nombre"
                                                            type="text"
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Input
                                                            placeholder="Apellidos"
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <br />
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Fecha de nacimiento</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Día</label>
                                                            </Col>
                                                            <Col>
                                                                <label className="labelSetting">Mes</label>
                                                            </Col>
                                                            <Col>
                                                                <label className="labelSetting">Año</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input
                                                                    placeholder="Día"
                                                                    type="text"
                                                                />
                                                            </Col>
                                                            <Col>
                                                                <Input
                                                                    placeholder="Mes"
                                                                    type="text"
                                                                />
                                                            </Col>
                                                            <Col>
                                                                <Input
                                                                    placeholder="Año"
                                                                    type="text"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Género</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Form.Check type="checkbox" label="Mujer" />
                                                            </Col>
                                                            <Col>
                                                                <Form.Check type="checkbox" label="Hombre" />
                                                            </Col>
                                                            <Col>
                                                                <Form.Check type="checkbox" label="Indefinido" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
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
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Contraseña</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Contraseña"
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button variant="dark" size="lg" >Registrarme</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                            <br />
                            <Row>
                                <Col>
                                    <Button variant="dark" size="lg" onClick={this.clickPresionado}>Salir</Button>
                                </Col>
                            </Row>
                            <br />
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default RegisterPageClient