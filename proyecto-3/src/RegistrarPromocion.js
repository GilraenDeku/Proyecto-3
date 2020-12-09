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
import "./RegistrarPromocion.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationfactory from 'react-bootstrap-table2-paginator';

class RegistrarPromocion extends Component {

    constructor(props) {
        console.log("Entra a RegistrarPromocion");
        super(props)
        this.state = {

            nombreArticulo: '',

            itemsBrand: [],
            BrandListDrop: [
            ],
            brandSelect: '',

            precioArticulo: 0,

            unidadDisponibleArticulo: 0,

            itemsSport: [],
            SportListDrop: [],
            sportSelect: '',
            listaDeportesSeleccionados: [],
            listaTempDeportes: [],

            itemsProduct_Type: [],
            Product_TypeListDrop: [],
            product_TypeSelect: '',

            limitadaFlag: "false",
            estandarFlag: "false",
            limitArticulo: false,

            profileImg: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
            imageFlag: false,

            jsonFile: {
                name: '',
                brand: '',
                price: 0,
                sports: [],
                limit: false,
                units: 0,
                img: null,
                type: ''
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


    createJsonFile = () => {
        this.state.jsonFile.name = this.state.nombreArticulo;
        this.state.jsonFile.brand = this.state.brandSelect;
        this.state.jsonFile.price = this.state.precioArticulo;
        this.state.jsonFile.sports = this.state.listaTempDeportes;
        this.state.jsonFile.limit = this.state.limitArticulo;
        this.state.jsonFile.units = this.state.unidadDisponibleArticulo;
        this.state.jsonFile.img = this.state.profileImg;
        this.state.jsonFile.type = this.state.product_TypeSelect;

        console.log("El JsonFile");
        console.log(this.state.jsonFile);
    }

    render() {
        localStorage.clear();

        return (

            <div className='RegistrarPromocion'>
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
                            <h1>Agregar Promoción</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Agregar una promoción a un artículo</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>{/*Primera Fila*/}
                                            <Col>{/*Primera Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Nombre de la promoción</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Nombre"
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Primera Columna*/}
                                            <Col>{/*Segunda Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Porcentaje</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input placeholder="Porcentaje" type="number" />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Segunda Columna*/}
                                            <Col>{/*Tercera Columna*/}
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
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Tercera Columna*/}
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
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>{/*Segunda Fila*/}
                                        <br />
                                        <Row>{/*Tercera Fila*/}
                                            <Col>
                                                <label className="labelSetting">Fechas</label>
                                            </Col>
                                        </Row>{/*Tercera Fila*/}
                                        <br />
                                        <Row>{/*Cuarta Fila*/}
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
                                                                >
                                                                    {this.state.listaDia.map((dia) => (
                                                                        <Dropdown.Item eventKey={dia}>{dia}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
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
                                                                >
                                                                    {this.state.listaMes.map((mes) => (
                                                                        <Dropdown.Item eventKey={mes}>{mes}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
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
                                                                <Input placeholder="Año" type="number" />
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
                                                                >
                                                                    {this.state.listaDia.map((dia) => (
                                                                        <Dropdown.Item eventKey={dia}>{dia}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
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
                                                                >
                                                                    {this.state.listaMes.map((mes) => (
                                                                        <Dropdown.Item eventKey={mes}>{mes}</Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
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
                                                                <Input placeholder="Año" type="number" />
                                                            </Col>
                                                        </Row>
                                                    </Col>{/*Mes*/}
                                                </Row>
                                            </Col>{/*Segunda Columna*/}
                                        </Row>{/*Cuarta Fila*/}
                                        <br />
                                        <Row>{/*Quinta Fila*/}
                                            <Col>
                                            <Button
                                                            className="btn-round"
                                                            color="primary"
                                                        >
                                                            Registrar Promoción
                                                        </Button>
                                            </Col>
                                        </Row>{/*Quinta Fila*/}
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default RegistrarPromocion