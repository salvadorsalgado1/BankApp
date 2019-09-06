import React from 'react'
import {Badge, Button, Card, CardBody, Container, Image, Input, Navbar, NavbarBrand, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Profile from '../components/Profile';
import profileImage from '../images/profilepicture.png';
import Balance from './Balance';
import {Link, Router} from "react-router-dom";
import NavbarPage from './NavbarPage';

const cardStyle = {
  
  
        
   }
const textFlex = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
const buttonStyle= {
    
}

const containerStyle = {



}
const ImageSize = {
  height:"10em",
  width:"auto"
}

const textColor = {
    color:"white"
}
const cardShadow = {
   
    boxShadow:"5px 5px 5px 5px"
}
const textSize = {
   fontSize:"1rem",
    color:"white"
}
const textSizeFreezeInfo = {
    fontSize:"2.5vw",
    
}






let checkingAmt = 400;
let savingsAmt = 3423.23;
let creditAmt = 223.33;
let notificationsAmt = 11;
let yearJoin = 2015;
let accountStatus = "checked";
function Freeze()
{
    return(
        <div className = "Freeze">
            <NavbarPage/>

   
            <Container className = "ContainerMain">
                <Row>
                    <Col xs = "12">
                        <Card style = {cardShadow}>
                            <Card.Body style = {textSizeFreezeInfo}>
                                <Container>

                                    <Row>
                                        
                                            <Col >
                                                <div>
                                                <p className = "lead" style = {textSizeFreezeInfo} >
                                                    Lost your card? You have the ability to lock your account. 
                                                    This bank is insured by the FDIC up to a million dollars. 
                                                    Call this number 1-800-876-9083 for any questions regarding your account. 
                                                </p>
                                               
                                             

                                                </div>
                                           
                                            
                                            
                                            
                                           
                                           
                                            </Col>
                                        
                                           
                                    </Row>

                                    <Row>

                                    <Col >
                                        <div style = {textSizeFreezeInfo} className = "custom-control custom-switch">                                     
                                                            <input type = "checkbox" class="custom-control-input" id = "customSwitch2" uncheck></input>
                                                            <label className = "custom-control-label" for="customSwitch2" ></label>                                              
                                        </div>
                                        
                                        <p>Freeze Account</p>
                                    </Col>
                                   
                                        
                                    <Col className = "ButtonsStyle" xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                                               <Link to = "balance" component = {Balance}>
                                               <Button  size="lg"style = {textSizeFreezeInfo} variant = "primary">Home</Button>
                                               </Link>

                                                
                                    </Col>
                                       
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                   
                </Row>
            </Container>
          
            
        </div>
    );
}
export default Freeze