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
import './Test.css';

class RegistarRegalia extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        localStorage.clear();

        return (
            <div className='RegistarRegalia'><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

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
            <br/>

                <Container>
                    <Row>
                        <Col md="12">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Registrar una nueva regalía</CardTitle>
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
                                                    <Input
                                                        placeholder="Marca"
                                                        type="text"
                                                    />
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
                                                    <Input
                                                        placeholder="Deportes"
                                                        type="text"
                                                    />
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
                                                    <Input
                                                        placeholder="Tipo"
                                                        type="text"
                                                    />
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

export default RegistarRegalia