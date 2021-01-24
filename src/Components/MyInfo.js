import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Timeline} from 'react-twitter-widgets'
import ReactPlayer from 'react-player'



export class MyInfo extends Component {
    render() {
        return (
            <Container className='basic' fluid>
            <Row>

                <Col xs={4}>
                    <h4>Daily Thoughts...</h4>
                </Col>

                <Col xs={4}>
                    <h4>Check Me Out On Twitter!</h4>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: this.props.twitterName
                        }}
                        options={{
                            height: '365'
                        }} />
                </Col>

                <Col xs={4}>
                    <h4>Add Me on Snapchat!</h4>
                    <img src={this.props.snapCode} />
                </Col>
            </Row>
            </Container>
        )
    }
}

export default MyInfo
