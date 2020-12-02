import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Test.css';

class Test extends Component {

    constructor(props) {
        console.log("Entra a Test");
        super(props)
        this.state = {
        }

    }

    render() {
        localStorage.clear();

        return (
            <div className='Test'><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-auto'>

                <Navbar.Brand className="m-auto">Bienvenid@</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="m-auto">
                        <Nav.Link >Registrar Artículo</Nav.Link>
                        <Nav.Link >Registrar Promoción</Nav.Link>
                        <Nav.Link >Búsqueda de Cliente</Nav.Link>
                        <Nav.Link >Vista Artículos</Nav.Link>
                        <Nav.Link >Búsqueda Artículo</Nav.Link>
                        <Nav.Link >Búsqueda Cliente por Producto</Nav.Link>
                        <Nav.Link >Salir</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            
                <Container>
                    <Row>
                        <Col>
                            <h1>This is a test</h1>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default Test