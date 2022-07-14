import React, { Component, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutNav from './AboutNav';
import '../App.css';
import BroPicture from '../Images/mcCute.jpg'; 
import BirdGif from '../Images/birdGif1.gif';
import HockeyGif from '../Images/hockGif2.gif';
import MyInfo from './MyInfo'
import snapCodeRuff from '../Images/snapcodeBitmojiRuff.svg'
import snapCodeBeebe from '../Images/snapcodeBitmojiBeebe.svg'
import chillMike from '../Images/gradMikeSqr.jpg'
import chillRuff from '../Images/gradRuffSqr.jpg'
import chiSkyline from '../Images/chi-skyline.png'
import cltSkyline from '../Images/clt-skyline.png'
import ReactPlayer from 'react-player'
import MyProInfo from './MyProInfo';

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
                name: "General Information",
                email: "michaelbeebe1031@gmail.com",
                info: MyProInfo,
                image: chillMike, 
                sign: 'Scorpio',
                uni: 'University of North Carolina at Chapel Hill',
                major: 'Computer Science, Economics',
                linkedIn: 'https://www.linkedin.com/in/michaelbeebe9/',
                git: 'https://github.com/mpb9',
                descr: 'Michael Beebe',
                twitterName: 'mbeeebe',
                snapCode: snapCodeBeebe,
                skyline: chiSkyline
            },
            connorInfo : {
                name: "General Information",
                email: "cruff@nd.edu",
                info: MyInfo,
                image: chillRuff,
                sign: 'Libra',
                uni: 'University of Notre Dame',
                major: 'Computer Science',
                linkedIn: 'https://www.linkedin.com/in/connor-ruff-37b56616b/',
                git: 'https://github.com/connor-ruff',
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
                    {/*figure out height */}
                    <Container style = {{height:"fit-content"}} fluid>
                    <Row>
                        <Col xs={3} id="bioSideCol" style = {{paddingBottom: '10px'}}>
                            <img src={dispObj.image} alt='A Good Looking Guy' style={{ height: '200px', padding: '5px', marginTop: '10px', marginBottom:'-15px', borderRadius: 18}} ></img>
                            <h5 style={{marginBottom: '5px'}}>{dispObj.name}</h5>
                            <h6>Email: {dispObj.email}</h6> 
                            <h6>Education: {dispObj.uni}</h6>
                            <h6>Major: {dispObj.major}</h6>
                            <h6>Professional: &nbsp;
                                <a style={{ backgroundColor: '#D9E3E7', borderLeft: '2px solid #D9E3E7', 
                                            borderRight: '2px solid #D9E3E7', cursor: 'pointer', color: '#4183C4'}} 
                                            onClick={() => window.open(dispObj.linkedIn)}>LinkedIn</a> 
                                &nbsp;&nbsp;&nbsp;
                                <a style={{ backgroundColor: '#D9E3E7', borderLeft: '2px solid #D9E3E7', 
                                            borderRight: '2px solid #D9E3E7', cursor: 'pointer', color: '#4183C4'}} 
                                            onClick={() => window.open(dispObj.git)}>GitHub</a>
                            </h6>
                            {/* <h6>Sign: {dispObj.sign}</h6> */}
                        </Col>
                        <Col id="bioMainCol">
                            <Col xs={8}>
                                <h1 style={{ marginTop: '12px', marginBottom: '0px'}}>{dispObj.descr}</h1>
                            </Col>
                            {/* temporary mikes is professional n ruffs is fun */}
                            <dispObj.info twitterName={dispObj.twitterName} snapCode={dispObj.snapCode}/>
                            {/* <MyProInfo twitterName={dispObj.twitterName} snapCode={dispObj.snapCode}/> */}
                            {/* <MyInfo twitterName={dispObj.twitterName} snapCode={dispObj.snapCode}/> */}
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                    <img src={dispObj.skyline} style={{width: '100%',
                        margin: '0px',
                        paddingTop: '10px',
                        height: 190,
                        left: 0,
                        backgroundColor: '#696969',
                        position: 'absolute' }} ></img>
                    
                    </Container>
                </div>
            );
        }
        else {
            return (
                <div id='biosDiv'>
                <Zoom/>
                    <AboutNav meetUs={this.meetUs} />
                    {/*figure out height */}
                    <Container style = {{height:""}} fluid>
                        
                        <Row style={{paddingBottom: '20px', paddingTop: '40px'}}>
                            <Col className="BPCol" style={{overflow: 'hidden'}}>
                                <img style={{height: '170px', marginTop: '75px'}} src={HockeyGif} alt="MnC" className="HockeyGif"/>
                                
                            </Col>
                            <Col className="BPCol">
                                <img src={BroPicture} alt="MnC" className="BroPicture"/>
                                
                            </Col>
                            <Col className="BPCol" style={{overflow: 'hidden'}}>
                                <img style={{height: '170px', marginTop: '75px'}} src={BirdGif} alt="MnC" className="BirdGif"/>                                
                            </Col>
                        </Row>
                        <Row id='bioSideCol' style={{padding: '5px', margin: '1px'}}>
                            <Col style={{textAlign: 'left', textIndent: '10px', color: '#ffffffea'}}>
                                <h4> About: </h4>
                                <p style={{textIndent: '20px', fontSize: '15px'}}> Created to showcase individual passion projects, social media platforms, and personal information. </p>
                                <p style={{textIndent: '25px', fontSize: '15px'}}> - "Birding" directs you to Connor Ruff's bird sighting lists and photographs.</p>
                                <p style={{textIndent: '25px', fontSize: '15px'}}> - "Hockey" takes you to Michael Beebe's statistical analysis of NHL success rates against 
                                    professional sports prediction models' assumptions. </p>
                                <p style={{textIndent: '25px', fontSize: '15px'}}> - "Graphics" takes you to Michael's 2D graphics playground, a space to create and experiment 
                                    with graphics tools from a personal library. </p>
                                <p style={{textIndent: '20px', fontWeight: 'bold'}}> Enjoy! </p>
                            </Col>
                        </Row>
                        <Row style={{padding:'5px'}}></Row>
                    </Container>   
                </div>
            )
        }

        
    

    }

}

export default Bios