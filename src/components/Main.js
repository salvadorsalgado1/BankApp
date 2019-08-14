import React from 'react';

import {
    Button, 
    ButtonGroup, 
    Container, 
    Row, 
    Col,
    Navbar,
    NavbarBrand,
    Jumbotron
    
}

 from 'react-bootstrap';
import Buttons from './Buttons';
import JumboTron from './JumboTron';

const topPadding = {
    height:"50vh"
}

function Main()
{
    return(
        <div className = "Main">
         
        <Container fluid>
            <Row  fluid className = "justify-content-center align-items-center">

                <Col className = "align-items-center" xsm = "12" sm = "auto" md = "auto" lg = "auto">
                    <JumboTron/>
                </Col>

                <Col className = "align-items-center" xsm = "12" sm = "auto" md = "auto" lg = "auto">
                    <Buttons/>
                  
                </Col>
                   
            </Row>
        </Container>
           
    

        </div>
    );
}
   
export default Main



