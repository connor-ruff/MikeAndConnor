import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class AboutNav extends Component {



    render(){
        return (

            <Navbar bg="dark" variant="dark" id="bioNavBar" style={{ minWidth: 700, borderRadius: 10}}>
             <Nav className="mr-auto">
                <Nav.Link onClick={() => this.props.meetUs(0)}>Home</Nav.Link>
                <Nav.Link onClick={() => this.props.meetUs(1)}>Meet Mike</Nav.Link>
                <Nav.Link onClick={() => this.props.meetUs(2)}>Meet Connor</Nav.Link>
                <Nav.Link href='bird'>Birding</Nav.Link>
                <Nav.Link href='hockey'>Hockey</Nav.Link>
            </Nav>
            </Navbar>
            
        );
    }

}

export default AboutNav;