import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ImageCar from './ImageCar.js'
import SightList from './SightList.js'
import '../CSS/Birding.css'

class Birding extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#B1A296', padding: '10px', fontFamily: ''}} fluid>
                <Row id='headerRow'>
                    <Col>
                        <h1>Backyard Birds: Winter 2020-2021</h1>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={3}>
                        <SightList />
                    </Col>
                    <Col xs={9}>
                        <ImageCar />
                    </Col>
                   
                </Row>
            </Container>
        )
    }
}

export default Birding
