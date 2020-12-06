import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Test.css';

class RegistarPromocion extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        localStorage.clear();

        return (
            <div className='RegistarPromocion'><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

                <Navbar.Brand className="m-auto">Bienvenid@</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="m-auto">
                        <Nav.Link href="./RegistrarArticulo">Registrar Artículo</Nav.Link>
                        <Nav.Link href="./RegistrarPromocion">Registrar Promoción</Nav.Link>
                        <Nav.Link href="./BusquedaCliente">Búsqueda de Cliente</Nav.Link>
                        <Nav.Link href="./VistaArticulos">Vista Artículos</Nav.Link>
                        <Nav.Link href="./BusquedaArticulo">Búsqueda Artículo</Nav.Link>
                        <Nav.Link href="./BusquedaClientexProducto">Búsqueda Cliente por Producto</Nav.Link>
                        <Nav.Link href="./Test">Salir</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

                <Container>
                    <Row>
                        <Col>
                            <h1>This is Registrar Promocion Page</h1>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default RegistarPromocion