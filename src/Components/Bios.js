import React, { Component, useEffect } from 'react';
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
import chiSkyline from '../Images/chi-skyline.png'
import cltSkyline from '../Images/clt-skyline.png'
import ReactPlayer from 'react-player'

const Zoom = () => {
    useEffect(() => {
      const initialValue = document.body.style.zoom;
  
      // Change zoom level on mount
      document.body.style.zoom = "100%";
  
      return () => {
        // Restore default value
        document.body.style.zoom = initialValue;
      };
    }, []);
    return <></>;
  };

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
                descr: 'Michael Beebe',
                twitterName: 'mbeeebe',
                snapCode: snapCodeBeebe,
                skyline: chiSkyline
            },
            connorInfo : {
                name: "Connor Blaise Ruff",
                email: "cruff@nd.edu",
                image: "https://ace.nd.edu/media/zoo/images/Connor_Ruff_5704571696f0947b46902f5ff16ddf67.jpg",
                sign: 'Libra',
                uni: 'University of Notre Dame',
                major: 'Computer Science',
                linkedIn: 'https://www.linkedin.com/in/connor-ruff-37b56616b/',
                descr: 'Connor Ruff',
                twitterName: '_connorruff_',
                snapCode: snapCodeRuff,
                skyline: cltSkyline
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
                <Zoom />
                    <AboutNav meetUs={this.meetUs} />
                    <Container style = {{height:"100vh"}} fluid>
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
                    <Row>
                    </Row>
                    <img src={dispObj.skyline} style={{width: '100%',
                        paddingTop: '10px',
                        height: 190,
                        left: 0,
                       
                        position: 'absolute', 
                        bottom: -60, }} ></img>
                    
                    </Container>
                </div>
            );
        }
        else {
            return (
                <div id='biosDiv'>
                <Zoom/>
                    <AboutNav meetUs={this.meetUs} />
                    <Container style = {{height:"100vh"}} fluid>
                        <Row style={{paddingBottom: '15px'}}>
                            <Col>
                                <br/>
                                <h5> Mike and Connor's Web App!!! </h5>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: '40px'}}>
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
                        <Row id='bioSideCol' style={{padding: '5px', margin: '1px'}}>
                            <Col style={{textAlign: 'left', textIndent: '10px', color: '#ffffffea'}}>
                                <h5> About: </h5>
                                <p style={{textIndent: '20px', fontSize: '15px'}}> Created to showcase individual passion projects, social media platforms, and personal information. </p>
                                <p style={{textIndent: '25px', fontSize: '15px'}}> - "Birding" directs you to Connor Ruff's bird sighting lists and photographs.</p>
                                <p style={{textIndent: '25px', fontSize: '15px'}}> - "Hockey" takes you to Michael Beebe's statistical analysis of NHL success rates against 
                                    professional sports prediction models' assumptions.
                                </p>
                                <h5 style={{textIndent: '15px'}}> Enjoy! </h5>
                            </Col>
                        </Row>
                    </Container>   
                </div>
            )
        }

        
    

    }

}

export default Bios