import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Input,
} from "reactstrap";
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./RegistrarRegalia.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationfactory from 'react-bootstrap-table2-paginator';

class RegistrarRegalia extends Component {

    constructor(props) {
        console.log("Entra a RegistrarRegalia");
        super(props)
        this.state = {

            nombreRegalia: '',
            nombreProducto: '',
            descripcion: '',
            descripcionRegalia: '',

            fechaInitJson: '',
            fechaInitDia: '',
            fechaInitMes: '',
            fechaInitAño: '',

            fechaFinalJson: '',
            fechaFinalDia: '',
            fechaFinalMes: '',
            fechaFinalAño: '',

            jsonFile: {
                name: '',
                description: '',
                info: {
                    type: 'Regalia',
                    condition: '',
                },
                start: '',
                end: ''
            },

            listaDia: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
            ],

            listaMes: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo",
                "Junio", "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"
            ]
        }

    }

    registrarArticuloNuevo = async () => {

        const url = `http://localhost:5000/add_offer?product_name=${this.state.nombreProducto}`;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.jsonFile)
        };



        const response = await fetch(url, requestOptions);
        if(response.status === 400){
            Swal.fire(
                'Error',
                'El registro no se realizó de la manera correcta',
                'error'
            );
        }else{
            Swal.fire(
                'Registro Exitoso',
                'El registro se ha realizado de manera exitosa',
                'success'
            );
        }

    }

    clickNombreRegalia = (e) => {
        this.setState({
            nombreRegalia: e.target.value
        })
    }

    clickNombreProducto = (e) => {
        this.setState({
            nombreProducto: e.target.value
        })
    }

    clickNombreDescripcion = (e) => {
        this.setState({
            descripcion: e.target.value
        })
    }

    clickDescripcionRegalia = (e) => {
        this.setState({
            descripcionRegalia: e.target.value
        })
    }

    clickDiaFechaInit = (e) => {
        this.setState({
            fechaInitDia: e
        })
    }

    clickMesFechaInit = (e) => {
        this.setState({
            fechaInitMes: e
        })
    }

    clickAñoFechaInit = (e) => {
        this.setState({
            fechaInitAño: e.target.value
        })
    }

    clickDiaFechaFinal = (e) => {
        this.setState({
            fechaFinalDia: e
        })
    }

    clickMesFechaFinal = (e) => {
        this.setState({
            fechaFinalMes: e
        })
    }

    clickAñoFechaFinal = (e) => {
        this.setState({
            fechaFinalAño: e.target.value
        })
    }

    crearFechaInitJson = () => {
        var tem = '';
        var temMes = '';
        if (this.state.fechaInitMes === "Enero") {
            temMes = '01';
        } else {
            if (this.state.fechaInitMes === "Febrero") {
                temMes = '02';
            } else {
                if (this.state.fechaInitMes === "Marzo") {
                    temMes = '03';
                } else {
                    if (this.state.fechaInitMes === "Abril") {
                        temMes = '04';
                    } else {
                        if (this.state.fechaInitMes === "Mayo") {
                            temMes = '05';
                        } else {
                            if (this.state.fechaInitMes === "Junio") {
                                temMes = '06';
                            } else {
                                if (this.state.fechaInitMes === "Julio") {
                                    temMes = '07';
                                } else {
                                    if (this.state.fechaInitMes === "Agosto") {
                                        temMes = '08';
                                    } else {
                                        if (this.state.fechaInitMes === "Septiembre") {
                                            temMes = '09';
                                        } else {
                                            if (this.state.fechaInitMes === "Octubre") {
                                                temMes = '10';
                                            } else {
                                                if (this.state.fechaInitMes === "Noviembre") {
                                                    temMes = '11';
                                                } else {
                                                    if (this.state.fechaInitMes === "Diciembre") {
                                                        temMes = '12';
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
        this.setState({
            fechaInitJson: this.state.fechaInitAño + temMes + this.state.fechaInitDia
        })
    }

    crearFechaFinalJson = () => {
        var tem = '';
        var temMes = '';
        if (this.state.fechaFinalMes === "Enero") {
            temMes = '01';
        } else {
            if (this.state.fechaFinalMes === "Febrero") {
                temMes = '02';
            } else {
                if (this.state.fechaFinalMes === "Marzo") {
                    temMes = '03';
                } else {
                    if (this.state.fechaFinalMes === "Abril") {
                        temMes = '04';
                    } else {
                        if (this.state.fechaFinalMes === "Mayo") {
                            temMes = '05';
                        } else {
                            if (this.state.fechaFinalMes === "Junio") {
                                temMes = '06';
                            } else {
                                if (this.state.fechaFinalMes === "Julio") {
                                    temMes = '07';
                                } else {
                                    if (this.state.fechaFinalMes === "Agosto") {
                                        temMes = '08';
                                    } else {
                                        if (this.state.fechaFinalMes === "Septiembre") {
                                            temMes = '09';
                                        } else {
                                            if (this.state.fechaFinalMes === "Octubre") {
                                                temMes = '10';
                                            } else {
                                                if (this.state.fechaFinalMes === "Noviembre") {
                                                    temMes = '11';
                                                } else {
                                                    if (this.state.fechaFinalMes === "Diciembre") {
                                                        temMes = '12';
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
        tem = this.state.fechaFinalAño + temMes + this.state.fechaFinalDia;
        this.setState({
            fechaFinalJson: tem
        })
    }


    createJsonFile = () => {
        this.state.jsonFile.name = this.state.nombreRegalia;
        this.state.jsonFile.description = this.state.descripcion;
        this.state.jsonFile.info.condition = this.state.descripcionRegalia;
        this.state.jsonFile.start = this.state.fechaInitJson;
        this.state.jsonFile.end = this.state.fechaFinalJson;

        this.registrarArticuloNuevo();
    }

    clickRegistrarRegalia = () => {
        this.crearFechaInitJson();
        this.crearFechaFinalJson();
        if (this.state.fechaInitJson === "") {
            if (this.state.fechaFinalJson === "") {
                if (this.state.nombreRegalia === "") {
                    Swal.fire(
                        'Error',
                        'Por favor indique el nombre de la regalía',
                        'error'
                    );
                } else {
                    if (this.state.descripcion === '') {
                        Swal.fire(
                            'Error',
                            'Por favor indique la descripcion de la promoción',
                            'error'
                        );
                    } else {
                        if (this.state.descripcionRegalia === '') {
                            Swal.fire(
                                'Error',
                                'Por favor indique la descripcion de la regalía',
                                'error'
                            );
                        } else {
                            if (this.state.nombreProducto === '') {
                                Swal.fire(
                                    'Error',
                                    'Por favor indique el nombre del producto que se le va a asignar la regalía',
                                    'error'
                                );
                            } else {

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
                                        this.crearConsultaFinal();
                                    } else if (
                                        /* Read more about handling dismissals below */
                                        result.dismiss === Swal.DismissReason.cancel
                                    ) {
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }else{
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
                    this.crearConsultaFinal();
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                }
              })
        }
    }

    crearConsultaFinal = () => {
        this.crearFechaInitJson();
        this.crearFechaFinalJson();
        this.createJsonFile();
    }

    render() {
        localStorage.clear();

        return (

            <div className='RegistrarRegalia'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

                    <Navbar.Brand className="m-auto">Bienvenid@</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="m-auto">
                            <Nav.Link href="./RegistrarArticulo">Registrar Artículo</Nav.Link>
                            <Nav.Link href="./RegistrarPromocion">Registrar Promoción</Nav.Link>
                            <Nav.Link href="./RegistarRegalia">Registrar Regalía</Nav.Link>
                            <Nav.Link href="./SelectAdmin">Salir</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <h1>Agregar Regalía</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Agregar una regalía a un artículo</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>{/*Primera Fila*/}
                                            <Col>{/*Primera Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Nombre de la regalía</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Nombre"
                                                            type="text"
                                                            onSelect={this.clickNombreRegalia}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Primera Columna*/}
                                            <Col>{/*Segunda Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Nombre del producto al que aplica</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Nombre"
                                                            type="text"
                                                            onSelect={this.clickNombreProducto}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Segunda Columna*/}
                                        </Row>{/*Primera Fila*/}
                                        <br />
                                        <Row>{/*Segunda Fila*/}
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Descripción de la Promoción</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control as="textarea" rows={3} onSelect={this.clickNombreDescripcion}/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>{/*Segunda Fila*/}
                                        <br />
                                        <Row>{/*Tercera Fila*/}
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Descripción de la Regalía</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control as="textarea" rows={3} onSelect={this.clickDescripcionRegalia}/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>{/*Tercera Fila*/}
                                        <br />
                                        <Row>{/*Cuarta Fila*/}
                                            <Col>
                                                <label className="labelSetting">Fechas</label>
                                            </Col>
                                        </Row>{/*Cuarta Fila*/}
                                        <br />
                                        <Row>{/*Quinta Fila*/}
                                            <Col>{/*Primera Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Fecha de inicio</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>{/*Día*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Día</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Día"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickDiaFechaInit}
                                                                >
                                                                    {this.state.listaDia.map((dia) => (
                                                                        <Dropdown.Item eventKey={dia}>{dia}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                    <p>{this.state.fechaInitDia}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Día*/}
                                                    <Col>{/*Mes*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Mes</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Mes"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickMesFechaInit}
                                                                >
                                                                    {this.state.listaMes.map((mes) => (
                                                                        <Dropdown.Item eventKey={mes}>{mes}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                    <p>{this.state.fechaInitMes}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Mes*/}
                                                    <Col>{/*Mes*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Año</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="Año" type="number" onChange={this.clickAñoFechaInit}/>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Mes*/}
                                                </Row>
                                            </Col>{/*Primera Columna*/}
                                            <Col>{/*Segunda Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Fecha Final</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>{/*Día*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Día</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Día"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickDiaFechaFinal}
                                                                >
                                                                    {this.state.listaDia.map((dia) => (
                                                                        <Dropdown.Item eventKey={dia}>{dia}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                    <p>{this.state.fechaFinalDia}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Día*/}
                                                    <Col>{/*Mes*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Mes</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <DropdownButton
                                                                    as={ButtonGroup}
                                                                    title={"Mes"}
                                                                    className='scrollDelDrop'
                                                                    onSelect={this.clickMesFechaFinal}
                                                                >
                                                                    {this.state.listaMes.map((mes) => (
                                                                        <Dropdown.Item eventKey={mes}>{mes}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                                    <p>{this.state.fechaFinalMes}</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Mes*/}
                                                    <Col>{/*Mes*/}
                                                        <Row>
                                                            <Col>
                                                                <label className="labelSetting">Año</label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="Año" type="number" onChange={this.clickAñoFechaFinal}/>
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Mes*/}
                                                </Row>
                                            </Col>{/*Segunda Columna*/}
                                        </Row>{/*Quinta Fila*/}
                                        <br />
                                        <Row>{/*Sexta Fila*/}
                                            <Col>
                                            <Button
                                                            className="btn-round"
                                                            color="primary"
                                                            onClick={this.clickRegistrarRegalia}
                                                        >
                                                            Registrar Regalía
                                                        </Button>
                                            </Col>
                                        </Row>{/*Sexta  Fila*/}
                                    </Form>
                                </CardBody>
                            </Card>
                            <br />
                        </Col>
                    </Row>
                </Container>
                

            </div>
        )
    }
}
export default RegistrarRegalia