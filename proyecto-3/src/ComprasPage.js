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
            mesJson: '',
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

            devolvermeFlag: false,

            jsonRespuesta: {
                'client': '',
                'date': '',
                'products': null
            }
        }

    }

    componentDidMount = async (e) => {
        this.ActualizartableData();
    }

    /*

    Función que realiza la compra

    */

    registrarCompraNueva = async () => {

        const url = `http://localhost:5000/add_purchase`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.jsonRespuesta)
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

    verificacionCompra = () => {
        this.creacionJsonRespuesta();
        if(this.state.selectDia === ''){
            Swal.fire(
                'Error',
                'Por favor indique el día de la compra',
                'error'
            );
        }else{
            if(this.state.selectMes === ''){
                Swal.fire(
                    'Error',
                    'Por favor indique el mes de la compra',
                    'error'
                );
            }else{
                if(this.state.selectAño === ''){
                    Swal.fire(
                        'Error',
                        'Por favor indique el año de la compra',
                        'error'
                    );
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
                            this.creacionJsonRespuesta();
                            this.registrarCompraNueva();
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

    creacionJsonRespuesta = () => {
        this.ActualizarFechaCompleta();
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        this.state.jsonRespuesta.client = userInfo.client;
        this.state.jsonRespuesta.date = this.state.fechaCompleta;
        this.state.jsonRespuesta.products = this.state.tableData;



        console.log();
        console.log("Este es el Json de la respuesta");
        console.log(this.state.jsonRespuesta);
        console.log();

    }

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
        if (this.state.selectMes === 'Enero') {
            this.setState({
                mesJson: '01'
            })
        } else {
            if (this.state.selectMes === 'Febrero') {
                this.setState({
                    mesJson: '02'
                })
            } else {
                if (this.state.selectMes === 'Marzo') {
                    this.setState({
                        mesJson: '03'
                    })
                } else {
                    if (this.state.selectMes === 'Abril') {
                        this.setState({
                            mesJson: '04'
                        })
                    } else {
                        if (this.state.selectMes === 'Mayo') {
                            this.setState({
                                mesJson: '05'
                            })
                        } else {
                            if (this.state.selectMes === 'Junio') {
                                this.setState({
                                    mesJson: '06'
                                })
                            } else {
                                if (this.state.selectMes === 'Julio') {
                                    this.setState({
                                        mesJson: '07'
                                    })
                                } else {
                                    if (this.state.selectMes === 'Agosto') {
                                        this.setState({
                                            mesJson: '08'
                                        })
                                    } else {
                                        if (this.state.selectMes === 'Septiembre') {
                                            this.setState({
                                                mesJson: '09'
                                            })
                                        } else {
                                            if (this.state.selectMes === 'Octubre') {
                                                this.setState({
                                                    mesJson: '10'
                                                })
                                            } else {
                                                if (this.state.selectMes === 'Noviembre') {
                                                    this.setState({
                                                        mesJson: '11'
                                                    })
                                                } else {
                                                    this.setState({
                                                        mesJson: '12'
                                                    })
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

    clickAño = (e) => {
        this.setState({
            selectAño: e.target.value
        })
    }

    ActualizarFechaCompleta = () => {
        this.setState({
            fechaCompleta: this.state.selectAño + this.state.mesJson + this.state.selectDia
        })
    }

    ActualizartableData = () => {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        this.setState({
            tableData: userInfo.products
        })
        console.log();
        console.log(userInfo.products);
        console.log();
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

        console.log('Me lo manda de la página principal');
        console.log(userInfo);

        const columns = [
            { dataField: 'name', text: 'Nombre del Producto' },
            { dataField: 'amount', text: 'Unidades del Producto' },
            { dataField: 'price', text: 'Precio del Producto' }
        ];
        return (
            <div className='ComprasPage'>
                {this.renderRedirect()}
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
                                                    {this.state.listaMes.map((Mes) => (
                                                        <Dropdown.Item eventKey={Mes}>{Mes}</Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                                <p>{this.state.selectMes}</p>
                                            </Col>
                                            <Col>
                                                <Input placeholder="Año" type="number" onChange={this.clickAño} />
                                            </Col>
                                        </Row>
                                        <br />
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
                                        <br />
                                        <Row>
                                            <Col>
                                                <Button
                                                    variant="dark" size="lg"
                                                    onClick={this.verificacionCompra}
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