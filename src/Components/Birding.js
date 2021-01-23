import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ImageCar from './ImageCar.js'
import SightList from './SightList.js'
import BirdListComp from './BirdListComp.js'
import '../CSS/Birding.css'
import backYardBirds from '../Constants/backYardBirds'
import lakeWylieBirds from '../Constants/lakeWylieBirds.js';

class Birding extends Component {

    render() {
        return (
          
            <Container style={{backgroundColor: '#B1A296', padding: '10px', fontFamily: ''}} fluid>
                <Row id='headerRow'>
                    <Col>
                        <h1 style={{color: 'white'}}>Major Lists</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <BirdListComp head="2021 Year List" apiURL='https://ruffapi.azurewebsites.net/list2021'/>
                    </Col>
                    <Col xs={4}>
                        <BirdListComp head="Life List" apiURL='https://ruffapi.azurewebsites.net/lifelist'/>
                    </Col>
                </Row>

                <Row id='headerRow'>
                    <Col>
                        <h1 style={{color: 'white'}}>McDowell Nature Preserve Bird Trip January 9 2021 - Lake Wylie </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <SightList birds={lakeWylieBirds.birdList}/>
                    </Col>
                    <Col xs={9}>
                        <ImageCar pics={lakeWylieBirds.images} />
                    </Col>
                </Row>

                <br></br>
                
                <Row id='headerRow'>
                    <Col>
                        <h1 style={{color: 'white'}}>Backyard Birds Winter 2020-2021 - Charlotte NC</h1>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={3}>
                        <SightList birds={backYardBirds.birdList}/>
                    </Col>
                    <Col xs={9}>
                        <ImageCar pics={backYardBirds.images} />
                    </Col>
                   
                </Row>

  
            </Container>
                       
          
        )
    }
}

export default Birding
