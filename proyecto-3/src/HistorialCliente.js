import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HistorialCliente.css';
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

class HistorialCliente extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: { "query": "NAME", "name": "Jose Montoya Salazar" },
            dataTest: { "query": "", "name": "" },
            historial: null,
            tableData: [],
            usernameFlag: false,
            clientNamFlag: false,
            clientName: ''
        }

    }

    clickRealizarBusqueda = () => {
        if (this.state.usernameFlag) {
            this.state.data.query = "USERNAME";
            this.state.data.name = this.state.clientName;
            this.busquedaResultadosUsername();
        } else {
            if (this.state.clientNamFlag) {
                this.state.data.query = "NAME";
                this.state.data.name = this.state.clientName;
                this.busquedaResultadosName();
            }
        }
    }

    busquedaResultadosName = async () => {

        const url = `http://localhost:5000/client_history`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.data)
        };

        const response = await fetch(url, requestOptions);
        const dataImprimir = await response.json();
        this.testDatos(dataImprimir);

    }

    busquedaResultadosUsername = async () => {

        const url = `http://localhost:5000/client_history`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.data)
        };

        const response = await fetch(url, requestOptions);
        const dataImprimir = await response.json();
        this.testDatos(dataImprimir);

    }

    testDatos = (e) => {
        this.setState({
            historial: e
        })

        var temp = [];

        for (let i = 0; i < 50; i++) {

            if (this.state.historial[i] === undefined) {
            } else {

                for (let t = 0; t < this.state.historial[i].products.length; t++) {

                    temp.push({
                        'dia': this.state.historial[i].date,
                        'precio': this.state.historial[i].cost,
                        'nombre': this.state.historial[i].products[t].name,
                        'cantidad': this.state.historial[i].products[t].amount
                    });
                }

            }

        }
        this.actualizarTableData(temp);
    }

    clickBuscarHistorial = () => {
        if (this.state.clientNamFlag) {
            if (this.state.usernameFlag) {
                Swal.fire(
                    'Error',
                    'Por favor solo elegir un tipo de nombre del cliente',
                    'error'
                );
            } else {
                if (this.state.clientName === '') {
                    Swal.fire(
                        'Error',
                        'Por favor escribir el nombre del Cliente',
                        'error'
                    );
                } else {
                    this.clickRealizarBusqueda();
                    Swal.fire(
                        'Búsqueda Exitoso',
                        'La búsqueda se ha realizado de manera exitosa',
                        'success'
                    );
                }
            }
        } else {
            if (this.state.usernameFlag === false) {
                Swal.fire(
                    'Error',
                    'Por favor elegir un tipo de Cliente',
                    'error'
                );
            }
            else {
                if (this.state.clientName === '') {
                    Swal.fire(
                        'Error',
                        'Por favor escribir el nombre del Cliente',
                        'error'
                    );
                } else {
                    this.clickRealizarBusqueda();
                    Swal.fire(
                        'Búsqueda Exitoso',
                        'La búsqueda se ha realizado de manera exitosa',
                        'success'
                    );
                }
            }
        }
    }

    clickNombre = (e) => {
        this.setState({
            clientName: e.target.value
        })
    }

    clickTipoClienteNombre = () => {
        if (this.state.clientNamFlag) {
            this.setState({
                clientNamFlag: false
            })
        } else {
            this.setState({
                clientNamFlag: true
            })
        }
    }

    clickTipoClienteUsername = () => {
        if (this.state.usernameFlag) {
            this.setState({
                usernameFlag: false
            })
        } else {
            this.setState({
                usernameFlag: true
            })
        }
    }

    actualizarTableData(e) {
        this.setState({
            tableData: e
        })
    }

    render() {
        localStorage.clear();
        const columnsHistorial = [
            { dataField: 'dia', text: 'Fecha de la Compra' },
            { dataField: 'precio', text: 'Precio del Producto' },
            { dataField: 'nombre', text: 'Nombre del Producto' },
            { dataField: 'cantidad', text: 'Cantidad Comprada' }
        ];
        return (
            <div className='HistorialCliente'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

                    <Navbar.Brand className="m-auto">Bienvenid@</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="m-auto">
                            <Nav.Link href="./HistorialCliente">Historial del Cliente</Nav.Link>
                            <Nav.Link href="./VistaArticulos">Productos Adquiridos</Nav.Link>
                            <Nav.Link href="./BusquedaArticulo">Búsqueda Artículo</Nav.Link>
                            <Nav.Link href="./BusquedaClientexProducto">Búsqueda Cliente por Producto</Nav.Link>
                            <Nav.Link href="./SelectAdmin">Salir</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <Jumbotron className="jumbotronSetting">
                    <h1>Historial del Cliente</h1>
                    <p>
                        Buscar un cliente en particular (dado su nombre o su usuario) y mostrar
                        todo su historial de compras
                    </p>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Historial del Cliente</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Escribir el nombre del cliente</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Input
                                                    placeholder="Nombre"
                                                    type="text"
                                                    className="inputName"
                                                    onChange={this.clickNombre}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Escoger el tipo del nombre del cliente</label>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Form.Check type="checkbox" label="Nombre" onClick={this.clickTipoClienteNombre} />
                                            </Col>
                                            <Col>
                                                <Form.Check type="checkbox" label="UserName" onClick={this.clickTipoClienteUsername} />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    onClick={this.clickBuscarHistorial}
                                                >
                                                    Buscar Historial
                                                        </Button>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col>
                                                <BootstrapTable
                                                    keyField="dia"
                                                    data={this.state.tableData}
                                                    columns={columnsHistorial}
                                                    pagination={paginationfactory()} />
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                <br />

            </div>
        );
    }
}

export default HistorialCliente