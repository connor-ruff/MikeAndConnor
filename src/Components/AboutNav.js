import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../App.css';

export class AboutNav extends Component {


    render(){
        return (

            <Navbar bg="dark" variant="dark" id="bioNavBar" style={{ minWidth: 700 }}>
             <Nav className="mr-auto">
                <Nav.Link onClick={this.props.meetUs.bind(this, 0)}>About</Nav.Link>
                <Nav.Link onClick={this.props.meetUs.bind(this, 1)}>Meet Mike</Nav.Link>
                <Nav.Link onClick={this.props.meetUs.bind(this, 2)}>Meet Connor</Nav.Link>
                 </Nav>
            </Navbar>
            
        );
    }

}

export default AboutNav;