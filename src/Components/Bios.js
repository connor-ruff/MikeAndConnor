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
                image : "" // TODO: add Mike's image
            },
            connorInfo : {
                name: "Connor Blaise Ruff",
                email: "cruff@nd.edu",
                image: "https://ace.nd.edu/media/zoo/images/Connor_Ruff_5704571696f0947b46902f5ff16ddf67.jpg"
            },

            mikeOverview : "this is michael's overview",
            connorOverview : "this is connor's overview",
            mikeDesc : "Mikinos is a cool guy",
            connorDesc : "alright arlight alright",
            aboutLeft : "about..,",
            aboutRight: "this is the about section"
        }
    }
    meetUs = (code) => {
        var newState = {};
        newState['tab'] = code;
        this.setState(newState);
    }

    render() {

        let dispName;
        let dispEmail;
        let dispImage;
        if (this.state.tab == 1){
            dispName = this.state.mikeInfo.name
            dispEmail = this.state.mikeInfo.email
        }
        else if (this.state.tab == 2){
            dispName = this.state.connorInfo.name
            dispEmail = this.state.connorInfo.email
            dispImage = this.state.connorInfo.image
        }
        else{
            dispName = ""
            dispEmail = ""
            dispImage = ""
        }

        
        if (this.state.tab > 0) {
            return (

                <div id='biosDiv'>
                    <AboutNav meetUs={this.meetUs} />
                    <Container fluid>
                    <Row>
                        <Col xs={3} id="bioSideCol">
                             <img src={dispImage} ></img>
                             <h5>Name: {dispName}</h5>
                             <h6>Email: {dispEmail}</h6> 
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