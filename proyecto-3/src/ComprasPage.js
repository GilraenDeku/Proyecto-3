import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './ComprasPage.css';
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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Redirect } from 'react-router-dom';

class ComprasPage extends Component {

    constructor(props) {
        console.log("entra a ComprasPage");
        super(props)
        this.state = {
            tableData: [],
            nombreCliente: '',
            selectDia: '',
            selectMes: '',
            selectAño: '',
            fechaCompleta: '',
            listaDia: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
            ],

            listaMes: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo",
                "Junio", "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"
            ],

            devolvermeFlag: false
        }

    }

    /*

    Función que realiza la compra

    registrarCompraNueva = async () => {

        const url = `http://localhost:5000/add_purchase`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.jsonFile)
        };



        const response = await fetch(url, requestOptions);
        if(response.status === 409){
            Swal.fire(
                'Error',
                'Ya no hay inventario disponible para ese artículo, por favor escoja otro artículo',
                'error'
            );
        }else{
            if(response.status === 404){
                Swal.fire(
                    'Error',
                    'Hubo un error al realizar la compra, por favor intente más tarde',
                    'error'
                );
            }else{
                Swal.fire(
                    'Compra Exitosa',
                    'La compra se ha realizado de manera exitosa',
                    'success'
                );
            }
        }

    }
    */

    listData = (e) => {
        this.setState({
            tableData: e
        })
    }

    clickDia = (e) => {
        this.setState({
            selectDia: e
        })
    }

    clickMes = (e) => {
        this.setState({
            selectMes: e
        })
    }

    clickAño = (e) => {
        this.setState({
            selectAño: e.target.value
        })
    }

    ActualizarFechaCompleta = () => {
        this.setState({
            fechaCompleta: this.state.selectAño + this.state.selectMes + this.state.selectDia
        })
    }

    clickAtras = () => {
        this.setState({
            devolvermeFlag: true
        })
    }

    renderRedirect = () => {
        if (this.state.devolvermeFlag) {
            return <Redirect to='/CatalogoCliente' />
        }
    }

    render() {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));

        this.state.tableData = userInfo.products;


        const columns = [
            { dataField: 'name', text: 'Nombre del Producto' },
            { dataField: 'amount', text: 'Unidades del Producto' }
        ];
        return (
            <div className='ComprasPage'>

                <Jumbotron className="jumbotronSetting">
                    <h1>Realizar la compra</h1>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Realizar la compra</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Seleccione la fecha de la compra</label>
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
                                                <p>{this.state.selectDia}</p>
                                            </Col>
                                            <Col>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    title={"Mes"}
                                                    className='scrollDelDrop'
                                                    onSelect={this.clickMes}
                                                >
                                                    {this.state.listaDia.map((Mes) => (
                                                        <Dropdown.Item eventKey={Mes}>{Mes}</Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                                <p>{this.state.selectMes}</p>
                                            </Col>
                                            <Col>
                                                <Input placeholder="Año" type="number" onChange={this.clickAño} />
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                            <label className="labelSetting">Mi carrito de compras</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <BootstrapTable
                                                    keyField="dia"
                                                    data={this.state.tableData}
                                                    columns={columns}
                                                    pagination={paginationfactory()} />
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                            <Button
                                                    variant="dark" size="lg"
                                                >
                                                    Realizar la compra
                                                        </Button>
                                            </Col>
                                            <Col>
                                            <Button
                                                    variant="dark" size="lg"
                                                    onClick={this.clickAtras}
                                                >
                                                    Atrás
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

export default ComprasPage