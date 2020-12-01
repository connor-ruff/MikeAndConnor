import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

export class Bios extends Component {

    render() {
        return (
            <Container fluid="md">
                <Row> <Col><h1>About The Authors</h1></Col></Row>

                <Row>

                 <Col>
                     <p>Connor's Info</p>
                 </Col>

                 <Col>
                     <p>Mike's Info</p>
                 </Col>

                </Row>
            </Container>
        )

    }

}

export default Bios