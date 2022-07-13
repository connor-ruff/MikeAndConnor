import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Timeline} from 'react-twitter-widgets'




export class MyProInfo extends Component {
    render() {
        return (
            <Container className='basic' fluid>
            <Row>
                <Col xs={8}>
                    {/* <h5 style={{paddingBottom: '10px', fontSize: '20px'}}>About Me:</h5> */}
                    <Container 
                    style={{backgroundColor: 'lightgray', textAlign: 'left', border: '1px solid #595959', borderRadius: '2px',
                            height: 'fit-content', width: '560px', padding: '5px', paddingBottom: '0px'}}>
                        <h6 style={{ fontWeight: 'bold', marginLeft: '1px', fontSize: '15px'}}>About Me:</h6>
                        <p style={{marginLeft: '5px'}}> This summer, I graduated from the University of North Carolina at Chapel Hill with 
                            a B.S. in Computer Science and a B.A. in Economics. Throughout my time at university, 
                            I worked for the UNC Hockey organization as a website developer and statistical analyst. 
                            I'm currently pursuing a career in software engineering with special interests in graphics 
                            engineering and quantitative analysis. 
                        </p>
                        <h6 style={{ fontWeight: 'bold', marginLeft: '1px', fontSize: '15px'}}>Projects:</h6>
                        <ul style={{marginLeft: '-20px', listStyleType: 'square'}}>
                            <li> 
                                <p>
                                    <a style={{ fontWeight: 'bold', cursor: 'pointer', color: '#3f5a55', textDecorationLine: 'underline'}} 
                                       onClick={() => window.open('https://unchockey.com/')}> UNC Hockey</a>
                                      &nbsp;  Updated and maintained the website using HTML/CSS and WordPress. 
                                     Added features to the site, including a ticketing feature that allowed for the online purchase of game tickets. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a style={{ fontWeight: 'bold', cursor: 'pointer', color: '#3f5a55', textDecorationLine: 'underline'}} 
                                    onClick={() => window.open('http://mikeandconnor.herokuapp.com/hockey/')}> NHL Analysis</a>
                                    &nbsp;  Webpage featuring NHL data analysed through self-built Java programs. Compiled and evaluated data from 
                                    2000+ NHL games (thus far) in order to identify relationships between professional oddsmaker predictions and 
                                    actual game outcomes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a style={{ fontWeight: 'bold', cursor: 'pointer', color: '#3f5a55', textDecorationLine: 'underline'}} 
                                    onClick={() => window.open('http://mygraphicsplayground.com/')}> Graphics Illustrator</a>
                                    &nbsp;  Developed an interactive 2D graphics editor using JavaScript, HTML, and CSS in order to demonstrate and 
                                    expand upon my personal graphics tool library (orignally built with C++). Site users create 
                                    illustrations and manipulate images on a "canvas." Users draw lines, shapes, and background images using 
                                    the tool buttons and mouse clicks. Find additional capabilities and complete "how to" guide on site.
                                </p>                            
                            </li>
                        </ul>
                    </Container>
                </Col>
                <Col xs={4}>
                    <h5 style={{paddingBottom: '-2px', marginTop:'10px', fontSize: '15px'}}>Find Me On Twitter:</h5>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: this.props.twitterName
                        }}
                        options={{
                            height: '300',
                            width: '250'
                        }} />
                </Col>
            </Row>
            </Container>
        )
    }
}

export default MyProInfo
