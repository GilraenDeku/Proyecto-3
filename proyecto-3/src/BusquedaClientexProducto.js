import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BusquedaClientexProducto.css';
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

class BusquedaClientexProducto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombreCliente: '',
            listaTabla: [],
            listaFinal: []
        }

    }

    llamadaAlAPI = async () => {
        const response = await fetch(`http://localhost:5000/common_purchase?username=${this.state.nombreCliente}`);

        console.log(response.status);
        if(response.status === 404){
            Swal.fire(
                'Error',
                'Ese nombre no existe, por favor elegir un username de un cliente existente',
                'error'
            );
        }else{
            const dataImprimir = await response.json();
            this.listData(dataImprimir);
            Swal.fire(
                'Búsqueda Exitoso',
                'La búsqueda se ha realizado de manera exitosa',
                'success'
            );
        }
    }

    listData = (e) => {
        this.setState({
            listaTabla: e
        })
    }

    renderListaFinal = () => {
        var temp = [];
        for (let w = 0; w < this.state.listaTabla.length; w++) {
            for (let q = 0; q < this.state.listaTabla[0].products.length; q++) {
                temp.push({
                    'name': this.state.listaTabla[w].name,
                    'username': this.state.listaTabla[w].username,
                    'producto': this.state.listaTabla[w].products[q]
                })
            }
        }
        this.actualizarData(temp);
    }

    actualizarData = (e) => {
        this.setState({
            listaFinal: e
        })
    }

    clickRealizarBusqueda = (e) => {
        if(this.state.nombreCliente === ''){
            Swal.fire(
                'Error',
                'Por favor escribir el nombre del Cliente',
                'error'
            );
        }else{
            this.llamadaAlAPI();
            this.renderListaFinal();
        }
    }

    clickName = (e) => {
        this.setState({
            nombreCliente: e.target.value
        })
    }

    render() {
        localStorage.clear();
        const columns = [
            { dataField: 'username', text: 'Username del Cliente' },
            { dataField: 'name', text: 'Nombre del Cliente' },
            { dataField: 'producto', text: 'Producto' }
        ];
        return (
            <div className='BusquedaClientexProducto'>

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
                    <h1>Búsqueda Clientes en Común</h1>
                    <p>
                        Dado un cliente en particular mostrar todos los demás clientes que hayan adquirido al menos un producto en común con ese cliente.
                    </p>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Búsqueda Clientes en Común</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Escribir el nombre del Cliente</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Input
                                                    placeholder="Nombre"
                                                    type="text"
                                                    className="inputName"
                                                    onChange={this.clickName}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    onClick={this.clickRealizarBusqueda}
                                                >
                                                    Buscar Artículo
                                                        </Button>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <BootstrapTable
                                                    keyField="name"
                                                    data={this.state.listaFinal}
                                                    columns={columns} />
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

export default BusquedaClientexProducto