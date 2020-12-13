import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HistorialPageCliente.css';
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

class HistorialPageCliente extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: { "query": "USERNAME", "name": "Joseda8" },
            historial: null,
            tableData: [],
            usernameFlag: false,
            clientNamFlag: false,
            clientName: ''
        }

    }

    componentDidMount = async () => {

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
        console.log("entra");
        this.setState({
            historial: e
        })

        var temp = [];

        var contador = 1;

        for (let i = 0; i < 50; i++) {

            if (this.state.historial[i] === undefined) {
            } else {

                for (let t = 0; t < this.state.historial[i].products.length; t++) {

                    temp.push({
                        'id': contador,
                        'dia': this.state.historial[i].date,
                        'precio': this.state.historial[i].cost,
                        'nombre': this.state.historial[i].products[t].name,
                        'cantidad': this.state.historial[i].products[t].amount
                    });
                }
                contador = contador + 1;

            }

        }
        this.actualizarTableData(temp);
    }

    clickBuscarHistorial = () => {
        this.clickRealizarBusqueda();
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

        const userInfo = JSON.parse(localStorage.getItem('user_info'))

        console.log('Me lo manda de la página principal');
        console.log(userInfo);


        const columnsHistorial = [
            { dataField: 'id', text: 'ID de la compra' },
            { dataField: 'dia', text: 'Fecha de la Compra' },
            { dataField: 'precio', text: 'Precio total de la compra' },
            { dataField: 'nombre', text: 'Nombre del Producto' },
            { dataField: 'cantidad', text: 'Cantidad Comprada' }
        ];
        return (
            <div className='HistorialPageCliente'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

                    <Navbar.Brand className="m-auto">Bienvenid@</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="m-auto">
                            <Nav.Link href="./HistorialPageCliente">Mi Historial</Nav.Link>
                            <Nav.Link href="./CatalogoCliente">Catálogo</Nav.Link>
                            <Nav.Link href="./">Salir</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <Jumbotron className="jumbotronSetting">
                    <h1>Mi Historial de compras</h1>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Historial de compras</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
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

export default HistorialPageCliente