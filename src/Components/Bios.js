import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutNav from './AboutNav';
import '../App.css';
import BroPicture from '../Images/MnCpic.jpg'; 
import BirdGif from '../Images/flappybird.gif';
import HockeyGif from '../Images/hockeyplayer.gif';
import MyInfo from './MyInfo'
import snapCodeRuff from '../Images/snapcodeBitmojiRuff.svg'
import snapCodeBeebe from '../Images/snapcodeBitmojiBeebe.svg'
import chillMike from '../Images/mikebeebechill.jpg'
import ReactPlayer from 'react-player'

class Bios extends Component {

    constructor(){
        super()
        this.state = {
            tab: 0,
            mikeInfo : {
                name: "Michael Peter Beebe",
                email: "mpb9@live.unc.edu",
                image : chillMike, // TODO: add Mike's image
                sign: 'Scorpio',
                uni: 'University of North Carolina at Chapel Hill',
                major: 'Computer Science, Economics',
                linkedIn: 'https://www.linkedin.com/in/michael-beebe-302664196/',
                descr: 'Michael!',
                twitterName: 'mbeeebe',
                snapCode: snapCodeBeebe
            },
            connorInfo : {
                name: "Connor Blaise Ruff",
                email: "cruff@nd.edu",
                image: "https://ace.nd.edu/media/zoo/images/Connor_Ruff_5704571696f0947b46902f5ff16ddf67.jpg",
                sign: 'Libra',
                uni: 'University of Notre Dame',
                major: 'Computer Science',
                linkedIn: 'https://www.linkedin.com/in/connor-ruff-37b56616b/',
                descr: 'Connor!',
                twitterName: '_connorruff_',
                snapCode: snapCodeRuff

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
      
        if (this.state.tab === 1){
            dispObj = this.state.mikeInfo
        }
        else if (this.state.tab === 2){
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
                             <img src={dispObj.image} alt='A Good Looking Guy' style={{ height: '200px', padding: '5px', borderRadius: 20}} ></img>
                             <h5>Name: {dispObj.name}</h5>
                             <h6>Email: {dispObj.email}</h6> 
                             <h6>Education: {dispObj.uni}</h6>
                             <h6>Major: {dispObj.major}</h6>
                             <h6>Professional: <a href={dispObj.linkedIn}>linkedIn</a></h6>
                             <h6>Sign: {dispObj.sign}</h6>
                        </Col>
                        <Col id="bioMainCol">
                            <h1>{dispObj.descr}</h1>
                            <MyInfo twitterName={dispObj.twitterName} snapCode={dispObj.snapCode}/>
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
                                <h5> Mike and Connor's Web App!!! </h5>
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