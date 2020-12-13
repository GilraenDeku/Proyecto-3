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

class CatalogoCliente extends Component {

    constructor(props) {
        console.log("entra a CatalogoCliente");
        super(props)
        this.state = {
            tableData: [],
            carrito: [],
            carritoItems: 0,
            modalShow: false,
            closeModal: false,
            idCarrito: 0,
            unidadesCarrito: 0
        }

    }



    componentDidMount = async (e) => {
        fetch(`http://localhost:5000/get_collection?collection=product`)
            .then(response => response.json())
            .then(response => this.listData(response))
    }

    listData = (e) => {
        this.setState({
            tableData: e
        })
    }

    ActualizarCarritoItems = (idDelCarrito) => {
        this.setState({
            carritoItems: this.state.carritoItems + 1
        })
        this.ActualizarCarrito(idDelCarrito);
    }

    ActualizarCarrito = (idDelCarrito) => {
        this.state.carrito.push({
            'name': this.state.tableData[idDelCarrito].name,
            'amount': this.state.unidadesCarrito
        });
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

    render() {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        var test = '';

        console.log('Me lo manda de la página principal');
        console.log(userInfo);
        const columns = [
            { dataField: 'name', text: 'Nombre del Producto' },
            { dataField: 'unidad', text: 'Unidades del Producto' }
        ];
        return (
            <div className='CatalogoCliente'>

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
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
              </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalCLose}>Realizar compra</Button>
                            <Button onClick={this.modalCLose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </Container>

            </div>
        );
    }
}

export default CatalogoCliente