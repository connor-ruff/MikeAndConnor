import React, { Component, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Input} from 'semantic-ui-react'
import ImageCar from './ImageCar.js'
import SightList from './SightList.js'
import BirdListComp from './BirdListComp.js'
import '../CSS/Birding.css'
import backYardBirds from '../Constants/backYardBirds'
import lakeWylieBirds from '../Constants/lakeWylieBirds.js';
import caliBirds from '../Constants/caliBirds.js';
import {useAlert} from 'react-alert';

export default function Birding2(props) {

        const [pass, setPass] = useState('')

        const alert = useAlert()
    
        var md5 = require('md5')

        const enterPortal = () => {
            if (md5(pass) == 'c9af7bbb75fde2d0e61ed7c4869e59c3') {
                alert.success('Correct')
                props.history.push('/bird/add')

            } else {
                alert.error('Wrong Password')
            }

        }

    
        return (
          
            <Container className='birdMain' style={{'padding': '10px'}} fluid>
                <Row id='headerRow'>
                    <Col>
                        <h1 style={{color: 'black'}}>Major Lists</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <BirdListComp head="2021 Year List" apiURL='https://ruffapi.azurewebsites.net/list2021'/>
                    </Col>
                    <Col xs={4}>
                        <BirdListComp head="Life List" apiURL='https://ruffapi.azurewebsites.net/lifelist'/>
                    </Col>
                    <Col xs={4}>
                        <Button onClick={enterPortal}>Add A Bird (Admin Only)</Button>
                        <Input placeholder='password' onChange={(event, {value}) => setPass(value)} value={pass} />
                    </Col>
                </Row>

                <Row id='headerRow'>
                    <Col>
                     <h1 style={{color: 'black'}}>San Francisco Spring Semester 2021</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <SightList birds={caliBirds.birdList}/>
                    </Col>
                    <Col xs={9}>
                        <ImageCar pics={caliBirds.images} />
                    </Col>
                </Row>
                

                <Row id='headerRow'>
                    <Col>
                        <h1 style={{color: 'black'}}>McDowell Nature Preserve Bird Trip January 9 2021 - Lake Wylie </h1>
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
                        <h1 style={{color: 'black'}}>Backyard Birds Winter 2020-2021 - Charlotte NC</h1>
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


