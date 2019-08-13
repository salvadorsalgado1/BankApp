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
import Buttons from './Buttons'

function Main()
{
    return(
        <div className = "Main">
         
            <Container>
                <Row>
                    <Col>
                    <Buttons/>
                    <Jumbotron/>
                    </Col>
                </Row>
            </Container>
           
    

        </div>
    );
}
   
export default Main



