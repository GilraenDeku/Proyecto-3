import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './VistaArticulos.css';
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

class VistaArticulos extends Component {

    constructor(props) {
        console.log("entra a VistaArticulos");
        super(props)
        this.state = {
            tableData: []
        }

    }

    componentDidMount = async (e) => {
        fetch(`http://localhost:5000/count_sales`).catch(err => alert(err))
            .then(response => response.json())
            .then(response => this.listData(response))
            .catch(err => this.errorHandler(err))
    }

    listData = (e) => {
        this.setState({
            tableData: e
        })
    }

    render() {
        localStorage.clear();
        const columns = [
            { dataField: 'name', text: 'Nombre del Producto' },
            { dataField: 'products', text: 'Cantidad total de unidades vendidas' }
        ];
        return (
            <div className='VistaArticulos'>

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
                    <h1>Productos Adquiridos</h1>
                    <p>
                        Ver todos los productos adquiridos. Se debe mostrar el nombre del
                        artículo y la cantidad total de unidades vendidas para cada artículo.
                    </p>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Productos Adquiridos</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <BootstrapTable
                                                    keyField="dia"
                                                    data={this.state.tableData}
                                                    columns={columns}
                                                    pagination={paginationfactory()} />
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

export default VistaArticulos