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
import "./RegistrarArticulo.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationfactory from 'react-bootstrap-table2-paginator';

class RegistrarArticulo extends Component {

    constructor(props) {
        console.log("Entra a RegistrarArticulo");
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
            }
        }

    }

    registrarArticuloNuevo = async () => {

        const url = `http://localhost:5000/insert_product`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.jsonFile)
        };



        const response = await fetch(url, requestOptions);
        if(response.status === 400){
            Swal.fire(
                'Error',
                'El registro no se realizó de la manera correcta',
                'error'
            );
        }else{
            Swal.fire(
                'Registro Exitoso',
                'El registro se ha realizado de manera exitosa',
                'success'
            );
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

        this.registrarArticuloNuevo();
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

    setListaDeportes = () => {
        this.state.listaDeportesSeleccionados.push({ 'name': this.state.sportSelect })
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

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    profileImg: reader.result,
                    imageFlag: true
                })
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    convertBase64Image = (file) => {
        return new Promise((resolve, reject) => {
            const filereader = new FileReader();
            filereader.readAsDataURL(file);

            filereader.onload = () => {
                resolve(filereader.result)
            }

            filereader.onerror = (error) => {
                reject(error);
            }
        });

    }

    clickSelectBrand = (event) => {
        this.setState({
            brandSelect: event
        })
    }

    clickSelectSport = async (event) => {
        this.setState({
            sportSelect: event
        })
        await this.actualizarListaDeportesTemp();
    }

    actualizarListaDeportesTemp = () => {
        if (this.state.sportSelect === "") {

        } else {
            this.state.listaTempDeportes.push(this.state.sportSelect);
        }
    }

    clickSelectProduct_Type = (event) => {
        this.setState({
            product_TypeSelect: event
        })
    }

    clickLimitada = (event) => {
        if (this.state.limitadaFlag === "true") {
            this.setState({
                limitadaFlag: "false",
                limitArticulo: false
            })
        } else {
            this.setState({
                limitadaFlag: "true",
                limitArticulo: true
            })
        }
    }

    clickEstandar = (event) => {
        if (this.state.estandarFlag === "true") {
            this.setState({
                estandarFlag: "false",
                limitArticulo: false
            })
        } else {
            this.setState({
                estandarFlag: "true",
                limitArticulo: false
            })
        }
    }

    clickRegistrar = (event) => {
        if (this.state.nombreArticulo === '') {
            Swal.fire(
                'Error',
                'Por favor introduzca el nombre del artículo',
                'error'
            );
        } else {
            if (this.state.brandSelect === '') {
                Swal.fire(
                    'Error',
                    'Por favor seleccione la marca del artículo',
                    'error'
                );
            } else {
                if (this.state.precioArticulo <= 0) {
                    Swal.fire(
                        'Error',
                        'Por favor introduzca el precio del artículo',
                        'error'
                    );
                }
                else {
                    if (this.state.limitadaFlag === "false") {
                        if (this.state.estandarFlag === "false") {
                            Swal.fire(
                                'Error',
                                'Por favor seleccionar un tipo de edición',
                                'error'
                            );
                        } else {
                            if (this.state.unidadDisponibleArticulo === 0) {
                                Swal.fire(
                                    'Error',
                                    'Por favor indique las unidades disponibles del artículo',
                                    'error'
                                );
                            } else {
                                if (this.state.product_TypeSelect === '') {
                                    Swal.fire(
                                        'Error',
                                        'Por favor indique el tipo de producto del artículo',
                                        'error'
                                    );
                                } else {
                                    if (this.state.listaDeportesSeleccionados.length === 0) {
                                        Swal.fire(
                                            'Error',
                                            'Por favor seleccione un Deporte asociado con el artículo',
                                            'error'
                                        );
                                    } else {
                                        if (this.state.imageFlag) {
                                            this.createJsonFile();
                                        } else {
                                            Swal.fire(
                                                'Error',
                                                'Por favor seleccione una imagen',
                                                'error'
                                            );
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (this.state.estandarFlag === "false") {
                            if (this.state.unidadDisponibleArticulo <= 0) {
                                Swal.fire(
                                    'Error',
                                    'Por favor indique las unidades disponibles del artículo',
                                    'error'
                                );
                            } else {
                                if (this.state.product_TypeSelect === '') {
                                    Swal.fire(
                                        'Error',
                                        'Por favor indique el tipo de producto del artículo',
                                        'error'
                                    );
                                } else {
                                    if (this.state.listaDeportesSeleccionados.length === 0) {
                                        Swal.fire(
                                            'Error',
                                            'Por favor seleccione un Deporte asociado con el artículo',
                                            'error'
                                        );
                                    } else {
                                        if (this.state.imageFlag) {
                                            this.createJsonFile();
                                        } else {
                                            Swal.fire(
                                                'Error',
                                                'Por favor seleccione una imagen',
                                                'error'
                                            );
                                        }
                                    }
                                }
                            }
                        } else {
                            Swal.fire(
                                'Error',
                                'Por favor solo seleccionar un tipo de edición',
                                'error'
                            );
                        }
                    }
                }
            }
        }
    }

    clickNombre = (e) => {
        this.setState({
            nombreArticulo: e.target.value
        })
    }

    clickPrecio = (e) => {
        this.setState({
            precioArticulo: Number(e.target.value)
        })
    }

    clickUnidadesDisponibles = (e) => {
        this.setState({
            unidadDisponibleArticulo: Number(e.target.value)
        })
    }

    render() {
        localStorage.clear();
        const columnsDeportes = [
            { dataField: 'name', text: 'Deporte Seleccionado' }
        ];

        return (

            <div className='RegistrarArticulo'>
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
                            <h1>Agregar Artículo</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h3">Registrar un nuevo artículo</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        {/*Primera Fila*/}
                                        <Row>
                                            {/*Primera Columna*/}
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Nombre</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input
                                                            placeholder="Nombre"
                                                            type="text"
                                                            onSelect={this.clickNombre}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col> {/*Primera Columna*/}
                                            {/*Segunda Columna*/}
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Marca</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <DropdownButton
                                                            as={ButtonGroup}
                                                            title={"Marca a seleccionar"}
                                                            className='scrollDelDrop'
                                                            onSelect={this.clickSelectBrand}
                                                        >
                                                            {this.state.BrandListDrop.map((name) => (
                                                                <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                            ))}
                                                        </DropdownButton>
                                                        <p>{this.state.brandSelect}</p>
                                                    </Col>
                                                </Row>
                                            </Col> {/*Segunda Columna*/}
                                            {/*Tercera Columna*/}
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Precio</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input placeholder="Precio" type="number" onChange={this.clickPrecio} />
                                                    </Col>
                                                </Row>
                                            </Col> {/*Tercera Columna*/}
                                        </Row> {/*Primera Fila*/}
                                        <br />
                                        <Row>{/*Segunda Fila*/}
                                            <Col>{/*Primera Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Edición</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Check type="checkbox" label="Limitada" onClick={this.clickLimitada} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Check type="checkbox" label="Estándar" onClick={this.clickEstandar} />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Primera Columna*/}
                                            <Col>{/*Segunda Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Unidades Disponibles</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Input placeholder="Unidades" type="number" onChange={this.clickUnidadesDisponibles} />
                                                    </Col>
                                                </Row>
                                            </Col>{/*Segunda Columna*/}
                                            <Col>{/*Tercera Columna*/}
                                                <Row>
                                                    <Col>
                                                        <label className="labelSetting">Tipo</label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <DropdownButton
                                                            as={ButtonGroup}
                                                            title={"Tipo del producto"}
                                                            className='scrollDelDrop'
                                                            onSelect={this.clickSelectProduct_Type}
                                                        >
                                                            {this.state.Product_TypeListDrop.map((name) => (
                                                                <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                            ))}
                                                        </DropdownButton>
                                                        <p>{this.state.product_TypeSelect}</p>
                                                    </Col>
                                                </Row>
                                            </Col>{/*Tercera Columna*/}
                                        </Row>{/*Segunda Fila*/}
                                        <Row>{/*Tercera Fila*/}
                                            <Col>{/*Única Columna*/}
                                                <Row>{/*Primera Fila*/}
                                                    <Col>
                                                        <label className="labelSetting">Deportes</label>
                                                    </Col>
                                                </Row>{/*Primera Fila*/}
                                                <Row>{/*Segunda Fila*/}
                                                    <Col xs={1} md={12}>
                                                        <DropdownButton
                                                            as={ButtonGroup}
                                                            title={"Deporte a seleccionar"}
                                                            className='scrollDelDrop'
                                                            onSelect={this.clickSelectSport}
                                                        >
                                                            {this.state.SportListDrop.map((name) => (
                                                                <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                                                            ))}
                                                        </DropdownButton>
                                                        <p>{this.state.sportSelect}</p>
                                                        <Button
                                                            className="btn-round"
                                                            color="primary"
                                                            onClick={this.setListaDeportes}
                                                        >
                                                            Añadir
                                                        </Button>
                                                    </Col>
                                                </Row>{/*Segunda Fila*/}
                                                <br />
                                                <Row>{/*Tercera Fila*/}
                                                    <Col>
                                                        <BootstrapTable
                                                            keyField="name"
                                                            data={this.state.listaDeportesSeleccionados}
                                                            columns={columnsDeportes} />
                                                    </Col>
                                                </Row>{/*Tercera Fila*/}
                                            </Col>{/*Única Columna*/}
                                        </Row>{/*Tercera Fila*/}
                                        <br />
                                        <Row>{/*Cuarta Fila*/}
                                            <Col>{/*Única Columna*/}
                                                <Row>{/*Primera Fila*/}
                                                    <Col>
                                                        <label className="labelSetting">Seleccione la imagen</label>
                                                    </Col>
                                                </Row>{/*Primera Fila*/}
                                                <Row>{/*Segunda Fila*/}
                                                    <Col>
                                                        <img src={this.state.profileImg} alt="Imagen de Perfil" className="testImage"></img>
                                                    </Col>
                                                </Row>{/*Segunda Fila*/}
                                                <Row>{/*Tercera Fila*/}
                                                    <Col>
                                                        <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}></input>
                                                    </Col>
                                                </Row>{/*Tercera Fila*/}
                                            </Col>{/*Única Columna*/}
                                        </Row>{/*Cuarta Fila*/}
                                        <br />
                                        <Row>{/*Quinta Fila*/}
                                            <Col>{/*Única Columna*/}
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    onClick={this.clickRegistrar}
                                                >
                                                    Registrar Artículo
                                                        </Button>
                                            </Col>{/*Única Columna*/}
                                        </Row>{/*Quinta Fila*/}
                                    </Form>
                                </CardBody>
                            </Card>
                            <br />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default RegistrarArticulo