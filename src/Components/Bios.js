import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutNav from './AboutNav';
import '../App.css';
import BroPicture from '../Images/MnCpic.jpg'; 
import BirdGif from '../Images/flappybird.gif';
import HockeyGif from '../Images/hockeyplayer.gif';

class Bios extends Component {

    constructor(){
        super()
        this.state = {
            tab: 0,
            mikeInfo : {
                name: "Michael Peter Beebe",
                email: "mpb9@live.unc.edu",
                image : "", // TODO: add Mike's image
                sign: 'scorpio',
                uni: 'University of North Carolina at Chapel Hill'
            },
            connorInfo : {
                name: "Connor Blaise Ruff",
                email: "cruff@nd.edu",
                image: "https://ace.nd.edu/media/zoo/images/Connor_Ruff_5704571696f0947b46902f5ff16ddf67.jpg",
                sign: 'libra',
                uni: 'University of Notre Dame'
            },

        }
    }
    meetUs = (code) => {
        var newState = {};
        newState['tab'] = code;
        this.setState(newState);
    }

    render() {

        let dispObj;
      
        if (this.state.tab == 1){
            dispObj = this.state.mikeInfo
        }
        else if (this.state.tab == 2){
            dispObj = this.state.connorInfo
        }
        else{
        }

        
        if (this.state.tab > 0) {
            return (

                <div id='biosDiv'>
                    <AboutNav meetUs={this.meetUs} />
                    <Container fluid>
                    <Row>
                        <Col xs={3} id="bioSideCol">
                             <img src={dispObj.image} style={{padding: '5px', borderRadius: 20}} ></img>
                             <h5>Name: {dispObj.name}</h5>
                             <h6>Email: {dispObj.email}</h6> 
                             <h6>Sign: {dispObj.sign}</h6>
                        </Col>
                        <Col id="bioMainCol">
                            <h1>TBD</h1>
                        </Col>
                    </Row>
                    </Container>


                </div>
            );
        }
        else {
            return (
                <div id='biosDiv'>
                    <AboutNav meetUs={this.meetUs} />
                    <Container fluid>
                        <Row>
                            <Col>
                                <br/>
                                <p> Mike and Connor's Web App!!! </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="BPCol">
                                <img src={HockeyGif} alt="MnC" className="HockeyGif"/>
                                
                            </Col>
                            <Col className="BPCol">
                                <img src={BroPicture} alt="MnC" className="BroPicture"/>
                                
                            </Col>
                            <Col className="BPCol">
                                <img src={BirdGif} alt="MnC" className="BirdGif"/>                                
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }

        
    

    }

}

export default Bios