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
    Form,
    Input,
} from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./RegistrarArticulo.css";

/*
LINKS IMPORTANTES

IMAGEN
https://www.youtube.com/watch?v=o2nmgbZaGMw


BASE 64
https://github.com/renanbastos93/image-to-base64


*/

class RegistrarArticulo extends Component {

    constructor(props) {
        console.log("Entra a RegistrarArticulo");
        super(props)
        this.state = {
            itemsBrand: [],
            BrandListDrop: [],

            itemsSport: [],
            SportListDrop: [],

            itemsProduct_Type: [],
            Product_TypeListDrop: []
        }

    }

    componentDidMount = async (e) => {

        await fetch(`http://localhost:5000/get_collection?collection=brand`).catch(err => alert(err))
            .then(response => response.json())
            .then(response => this.brandList(response))
            .catch(err => this.errorHandler(err))

        await fetch(`http://localhost:5000/get_collection?collection=sport`).catch(err => alert(err))
            .then(response => response.json())
            .then(response => this.sportList(response))
            .catch(err => this.errorHandler(err))

        await fetch(`http://localhost:5000/get_collection?collection=product_type`).catch(err => alert(err))
            .then(response => response.json())
            .then(response => this.product_TypeList(response))
            .catch(err => this.errorHandler(err))
    }

    brandList = (res) => {

        this.setState({
            itemsBrand: res
        })

        this.crearBrandListDropdown();
    }

    crearBrandListDropdown = () => {
        var temp = [];
        for (let i = 0; i < this.state.itemsBrand.length; i++) {
            temp.push(this.state.itemsBrand[i].name);
            this.actualizarBrandListDropdown(temp);
        }
    }

    actualizarBrandListDropdown = (res) => {
        this.setState({
            BrandListDrop: res
          })
    }

    sportList = (res) => {
        this.setState({
            itemsSport: res
        })
        this.crearSportListDropdown();
    }

    crearSportListDropdown = () => {
        var temp = [];
        for (let i = 0; i < this.state.itemsSport.length; i++) {
            temp.push(this.state.itemsSport[i].name);
            this.actualizarSportListDropdown(temp);
        }
    }

    actualizarSportListDropdown = (res) => {
        this.setState({
            SportListDrop: res
          })
    }

    product_TypeList = (res) => {

        this.setState({
            itemsProduct_Type: res
        })
        this.crearProduct_TypeListDropdown();
    }

    crearProduct_TypeListDropdown = () => {
        var temp = [];
        for (let i = 0; i < this.state.itemsProduct_Type.length; i++) {
            temp.push(this.state.itemsProduct_Type[i].name);
            this.actualizarProduct_TypeListDropdown(temp);
        }
    }

    actualizarProduct_TypeListDropdown = (res) => {
        this.setState({
            Product_TypeListDrop: res
          })
    }

    render() {
        localStorage.clear();

        return (
            <div className='RegistrarArticulo'><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

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
                        <Col md="12">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Registrar un nuevo artículo</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-1" md="5">
                                                <FormGroup>
                                                    <label>Nombre</label>
                                                    <Input
                                                        placeholder="Nombre"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="3">
                                                <FormGroup>
                                                    <label>Marca</label>
                                                    <DropdownButton
                                                        as={ButtonGroup}
                                                        title={"Marca a seleccionar"}
                                                        className='scrollDelDrop'
                                                    >
                                                        {this.state.BrandListDrop.map((name) => (
                                                            <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                        ))}
                                                    </DropdownButton>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <FormGroup>
                                                    <FormGroup>
                                                        <label>Precio</label>
                                                        <Input placeholder="Precio" type="number" />
                                                    </FormGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="5">
                                                <FormGroup>
                                                    <label>Deportes</label>
                                                    <DropdownButton
                                                        as={ButtonGroup}
                                                        title={"Deporte a seleccionar"}
                                                        className='scrollDelDrop'
                                                    >
                                                        {this.state.SportListDrop.map((name) => (
                                                            <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                        ))}
                                                    </DropdownButton>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="3">
                                                <FormGroup>
                                                    <label>Edicion</label>
                                                    <Input
                                                        placeholder="Edicion"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <FormGroup>
                                                    <FormGroup>
                                                        <label>Unidades Disponibles</label>
                                                        <Input placeholder="Numero de unidades" type="number" />
                                                    </FormGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="px-1" md="12">
                                                <FormGroup>
                                                    <label>Tipo</label>
                                                    <DropdownButton
                                                        as={ButtonGroup}
                                                        title={"Tipo del producto"}
                                                        className='scrollDelDrop'
                                                    >
                                                        {this.state.Product_TypeListDrop.map((name) => (
                                                            <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                        ))}
                                                    </DropdownButton>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>About Me</label>
                                                    <Input
                                                        type="textarea"
                                                        defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Update Profile
                        </Button>
                                            </div>
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

export default RegistrarArticulo