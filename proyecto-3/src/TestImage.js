import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"

class TestImage extends Component {
    constructor(props) {
        console.log("Entra a TestImage");
        super(props)
        this.state = {
            profileImg: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'
        }
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    profileImg: reader.result
                })
                console.log(reader.result);
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

    render() {
        return (
            <div className='page'>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <h1>Add your Image</h1>
                            <br />
                            <img src={this.state.profileImg} alt="Imagen de Perfil" className="testImage"></img>
                            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}></input>
                            <label htmlFor="input" className="image-upload"></label>
                            <i className="material-icons">add_photo_alternate</i>
                            Choose your Photo
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }


}

export default TestImage