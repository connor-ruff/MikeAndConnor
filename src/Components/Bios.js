import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutNav from './AboutNav';
import '../App.css';

export class Bios extends Component {

    constructor(){
        super()
        this.state = {
            tab: 0
        }
    }

    meetUs = (code) => {
        var newState = {};
        console.log('State Before Set: ' + this.state.tab)
        newState['tab'] = code;
        this.setState(newState);
    }

    render() {
        return (
            
            <div id='biosDiv'>
                <AboutNav meetUs={this.meetUs} />
                <Container fluid>
                <Row>
                    <Col xs={3} id="bioSideCol">
                        <p>Hey</p>
                    </Col>
                    <Col id="bioMainCol">
                        <p>Hey</p>
                    </Col>
                </Row>
                </Container>
                
             
            </div>
       
        );

    }

}

export default Bios