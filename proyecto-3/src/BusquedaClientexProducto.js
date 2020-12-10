import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Test.css';

class BusquedaClientexProducto extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        localStorage.clear();

        return (
            <div className='BusquedaClientexProducto'>

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

                <Container>
                    <Row>
                        <Col>
                            <h1>This is Busqueda Cliente por Producto Page</h1>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default BusquedaClientexProducto