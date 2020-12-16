import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './CatalogoCliente.css';
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
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';

class CatalogoCliente extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            carrito: [],
            carritoItems: 0,
            modalShow: false,
            closeModal: false,
            idCarrito: 0,
            unidadesCarrito: 0,
            comprasFlag: false,
            jsonLocalStorage: {
                client: '',
                products: null
            },
            nombreCliente: ''
        }

    }



    componentDidMount = async (e) => {
        this.setState({
            carrito: JSON.parse(window.localStorage.getItem('cart')),
            carritoItems: JSON.parse(window.localStorage.getItem('cart')).length
        })
        fetch(`http://localhost:5000/get_collection?collection=product`)
            .then(response => response.json())
            .then(response => this.listData(response))

            
    }

    listData = (e) => {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        this.setState({
            tableData: e,
            nombreCliente: userInfo.client
        })
    }

    ActualizarCarritoItems = (idDelCarrito) => {
        if (this.state.unidadesCarrito === 0) {
            Swal.fire(
                'Error',
                'Por favor indique las unidades que quiere comprar del artículo',
                'error'
            );
        } else {
            this.setState({
                carritoItems: this.state.carritoItems + 1
            })
            this.ActualizarCarrito(idDelCarrito);
        }

    }

    ActualizarCarrito = (idDelCarrito) => {
        this.state.carrito.push({
            'name': this.state.tableData[idDelCarrito].name,
            'amount': this.state.unidadesCarrito,
            'price': this.state.tableData[idDelCarrito].price
        });
        this.state.jsonLocalStorage.products = this.state.carrito;
        this.state.jsonLocalStorage.client = this.state.nombreCliente;
        Swal.fire(
            'Artículo añadido',
            'El artículo ' + this.state.tableData[idDelCarrito].name + ' se a añadido a su carrito',
            'success'
        );
        localStorage.setItem('user_info', JSON.stringify(this.state.jsonLocalStorage));
        localStorage.setItem('cart', JSON.stringify(this.state.carrito));
    }

    VerCarrito = (e) => {
        this.setState({
            modalShow: true
        })
    }

    modalCLose = (e) => {
        this.setState({
            modalShow: false
        })
    }

    ActualizarUnidadesCarrito = (e) => {
        this.setState({
            unidadesCarrito: Number(e.target.value)
        })
    }

    realizarCompra = () => {
        this.setState({
            comprasFlag: true
        })
    }

    renderRedirect = () => {
        if (this.state.comprasFlag) {
            return <Redirect to='/ComprasPage' />
        }
    }

    render() {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        var test = '';

        const columns = [
            { dataField: 'name', text: 'Nombre del Producto' },
            { dataField: 'amount', text: 'Unidades del Producto' },
            { dataField: 'price', text: 'Precio del Producto' }
        ];

        if(window.localStorage.getItem('cart') ===null){
            window.localStorage.setItem('cart', JSON.stringify([]))
        }

        return (
            <div className='CatalogoCliente'>
                {this.renderRedirect()}
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
                    <h1>Catálogo</h1>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Catálogo</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Carrito: {this.state.carritoItems}</label>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button
                                                    variant="dark" size="lg"
                                                    onClick={this.VerCarrito}
                                                >
                                                    Ver Carrito
                                                        </Button>
                                            </Col>
                                        </Row>
                                        <br />

                                        <Row>
                                            <Col>
                                                <label className="labelSetting">Seleccione el producto que desea comprar</label>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                            <br />
                            <Row>
                                <Col>
                                    {this.state.tableData.map((character, index) => {
                                        const handler = function (e) {
                                            test = e.target.getAttribute("data-index");
                                            this.ActualizarCarritoItems(test);
                                        }.bind(this);
                                        return (
                                            <div className="card-container"
                                                style={{
                                                    width: "50%",
                                                    border: "solid 3px #d3d3d3",
                                                    margin: "10px auto"
                                                }}
                                                key={index}
                                            >
                                                <p>
                                                    <strong>{character.name}</strong>
                                                </p>
                                                <br />
                                                <img src={character.img} alt="Imagen de Perfil" className="testImage"></img>
                                                <br />
                                                <br />
                                                <p>Marca: {character.brand}</p>
                                                <p>Precio: ₡{character.price}</p>
                                                <p>Unidades disponibles: {character.units}</p>
                                                <p>Ofertas: {character.offer!==undefined ? JSON.stringify(character.offer.map((offer, index) => {
                                                    return JSON.stringify(offer.name) + ': ' + JSON.stringify(offer.description) + ' '
                                                })).replaceAll("\"", "").replaceAll("\[", "").replaceAll("\]", "").replaceAll("\\", "") : 'None'}</p>
                                                <br />
                                                <p>Unidades a comprar</p>
                                                <Input className="mb-2 mr-sm-2" placeholder="Unidades" type="number" onChange={this.ActualizarUnidadesCarrito} />
                                                <Button
                                                    variant="dark" size="lg"
                                                    onClick={handler}
                                                    data-index={index}
                                                >
                                                    Añadir al Carrito
                                                        </Button>
                                                <br />
                                                <br />
                                            </div>
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.modalShow}
                    >
                        <Modal.Header closeButton onClick={this.modalCLose}>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Mi carrito
              </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Mis artículos en el carrito</h4>
                            <br />
                            <BootstrapTable
                                keyField="name"
                                data={this.state.carrito}
                                columns={columns} />
                            <br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.realizarCompra}>Realizar compra</Button>
                            <Button onClick={this.modalCLose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </Container>

            </div>
        );
    }
}

export default CatalogoCliente