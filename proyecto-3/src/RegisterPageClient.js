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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
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
            },
            entraP: false,
            listaDia: [
                '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                '31'
            ],

            listaMes: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo",
                "Junio", "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"
            ]


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
    }

    clickMujerCheck = () => {
        if (this.state.mujerFlag) {
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
        if (this.state.hombreFlag) {
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
        if (this.state.indefinidoFlag) {
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
            usernameCliente: e.target.value
        })
    }

    clickPassword = (e) => {
        this.setState({
            passwordCliente: e.target.value
        })
    }

    clickDia = (e) => {
        this.setState({
            diaS: e
        })
    }

    clickMes = (e) => {
        this.setState({
            mesS: e
        })
    }

    clickAño = (e) => {
        this.setState({
            añoS: e.target.value
        })
    }

    ActualizarFechaCumpleaños = () => {
        this.setState({
            fechaNacimiento: this.state.añoS + this.state.mesS + this.state.diaS
        })
    }

    llamadaApi = () => {
        console.log();
        console.log("Entra a llamadaApi");
        console.log();
    }

    createJsonFile = () => {
        this.state.jsonFile.name = this.state.nombreCompleto;
        this.state.jsonFile.username = this.state.usernameCliente;
        this.state.jsonFile.password = this.state.passwordCliente;
        this.state.jsonFile.birthday = this.state.fechaNacimiento;
        this.state.jsonFile.gender = this.state.generoCliente;

        console.log(this.state.jsonFile);
    }

    ActualizarCumpleYNombre = () => {
        this.ActualizarFechaCumpleaños();
        this.ActualizarNombreCompleto();
        if (this.state.entraP) {
            this.createJsonFile();
        } else {
            this.setState({
                entraP: true
            })
        }
    }

    clickRegistrarCliente = () => {
        if (this.state.entraP) {
            if (this.state.nombreCliente === '') {
                Swal.fire(
                    'Error',
                    'Por favor escriba su nombre',
                    'error'
                );
            } else {
                if (this.state.apellidoCliente === '') {
                    Swal.fire(
                        'Error',
                        'Por favor escriba sus apellidos',
                        'error'
                    );
                } else {
                    if (this.state.diaS === '') {
                        Swal.fire(
                            'Error',
                            'Por favor seleccione el día en que nació',
                            'error'
                        );
                    } else {
                        if (this.state.mesS === '') {
                            Swal.fire(
                                'Error',
                                'Por favor seleccione el mes en que nació',
                                'error'
                            );
                        } else {
                            if (this.state.añoS === '') {
                                Swal.fire(
                                    'Error',
                                    'Por favor escriba el año en que nació',
                                    'error'
                                );
                            } else {
                                if (this.state.usernameCliente === '') {
                                    Swal.fire(
                                        'Error',
                                        'Por favor escriba su nombre de usuario',
                                        'error'
                                    );
                                } else {
                                    if (this.state.passwordCliente === '') {
                                        Swal.fire(
                                            'Error',
                                            'Por favor escriba su contraseña',
                                            'error'
                                        );
                                    } else {
                                        if (this.state.mujerFlag) {
                                            if (this.state.hombreFlag) {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                }
                                            } else {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }
                                            }
                                        } else {
                                            if (this.state.hombreFlag) {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }
                                            } else {
                                                if (this.state.indefinidoFlag) {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }else{
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor elegir un género',
                                                        'error'
                                                    );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (this.state.nombreCliente === '') {
                Swal.fire(
                    'Error',
                    'Por favor escriba su nombre',
                    'error'
                );
            } else {
                if (this.state.apellidoCliente === '') {
                    Swal.fire(
                        'Error',
                        'Por favor escriba sus apellidos',
                        'error'
                    );
                } else {
                    if (this.state.diaS === '') {
                        Swal.fire(
                            'Error',
                            'Por favor seleccione el día en que nació',
                            'error'
                        );
                    } else {
                        if (this.state.mesS === '') {
                            Swal.fire(
                                'Error',
                                'Por favor seleccione el mes en que nació',
                                'error'
                            );
                        } else {
                            if (this.state.añoS === '') {
                                Swal.fire(
                                    'Error',
                                    'Por favor escriba el año en que nació',
                                    'error'
                                );
                            } else {
                                if (this.state.usernameCliente === '') {
                                    Swal.fire(
                                        'Error',
                                        'Por favor escriba su nombre de usuario',
                                        'error'
                                    );
                                } else {
                                    if (this.state.passwordCliente === '') {
                                        Swal.fire(
                                            'Error',
                                            'Por favor escriba su contraseña',
                                            'error'
                                        );
                                    } else {
                                        if (this.state.mujerFlag) {
                                            if (this.state.hombreFlag) {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                }
                                            } else {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }
                                            }
                                        } else {
                                            if (this.state.hombreFlag) {
                                                if (this.state.indefinidoFlag) {
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor solo elegir un género',
                                                        'error'
                                                    );
                                                } else {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }
                                            } else {
                                                if (this.state.indefinidoFlag) {
                                                    this.ActualizarCumpleYNombre();
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger'
                                                        },
                                                        buttonsStyling: false
                                                    })

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Confirmar registro',
                                                        text: "Desea registrar esta promoción?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Si, deseo registrar',
                                                        cancelButtonText: 'No',
                                                        reverseButtons: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            this.ActualizarCumpleYNombre();
                                                            this.llamadaApi();
                                                        } else if (
                                                            /* Read more about handling dismissals below */
                                                            result.dismiss === Swal.DismissReason.cancel
                                                        ) {
                                                        }
                                                    })
                                                }else{
                                                    Swal.fire(
                                                        'Error',
                                                        'Por favor elegir un género',
                                                        'error'
                                                    );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
                                                            onSelect={this.clickName}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Input
                                                            placeholder="Apellidos"
                                                            type="text"
                                                            onSelect={this.clickApellidos}
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
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Día"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickDia}
                                                                >
                                                                    {this.state.listaDia.map((dia) => (
                                                                        <Dropdown.Item eventKey={dia}>{dia}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                <p>{this.state.diaS}</p>
                                                            </Col>
                                                            <Col>
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Mes"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickMes}
                                                                >
                                                                    {this.state.listaMes.map((mes) => (
                                                                        <Dropdown.Item eventKey={mes}>{mes}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                <p>{this.state.mesS}</p>
                                                            </Col>
                                                            <Col>
                                                                <Input
                                                                    placeholder="Año"
                                                                    type="text"
                                                                    onSelect={this.clickAño}
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
                                                                <Form.Check type="checkbox" label="Mujer" onClick={this.clickMujerCheck} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Check type="checkbox" label="Hombre" onClick={this.clickHombreCheck} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Check type="checkbox" label="Indefinido" onClick={this.clickIndefinidoCheck} />
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
                                                            onSelect={this.clickUsername}
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
                                                            onSelect={this.clickPassword}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button variant="dark" size="lg" onClick={this.clickRegistrarCliente}>Registrarme</Button>
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