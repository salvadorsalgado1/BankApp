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
    paddingTop:"5vh",
    height:"50%",
    width:"auto"

}

const alignflex = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flex:"1"
}
const containerflex = {
   
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flex:"1"
}
function Main()
{
    return(
        <div className = "Main">
         
        <Container>
            <Row>

                <Col style = {topPadding} xsm = "12" sm = "12" md = "12" lg = "6">
                    <JumboTron/>
                </Col>

                <Col style = {alignflex} xsm = "12" sm = "12" md = "12" lg = "6">
                    <Buttons/>
                  
                </Col>
                   
            </Row>
        </Container>
           
    

        </div>
    );
}
   
export default Main



