import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Timeline} from 'react-twitter-widgets'




export class MyInfo extends Component {
    render() {
        return (
            <Container className='basic' fluid>
            <Row>
                <Col xs={6}>
                    <h5 style={{paddingBottom: '10px'}}>Check Me Out On Twitter!</h5>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: this.props.twitterName
                        }}
                        options={{
                            height: '310',
                            width: '380'
                        }} />
                </Col>

                <Col xs={6}>
                    <h5 style={{paddingBottom: '10px'}}>Add Me on Snapchat!</h5>
                    <img src={this.props.snapCode} alt='Snapcode'  />
                </Col>
            </Row>
            </Container>
        )
    }
}

export default MyInfo
